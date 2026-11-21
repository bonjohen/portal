// LoreKiln playback-script engine (LoreKiln docs/systems/AUDIO-PLAYBACK-SCRIPT.md).
// One script per episode drives several audio files, mixed live with Web Audio. Levels 1 and 2:
// the sequence track only (narration, and character voices in quote slots); overlays later.
// No dependencies; works as an ES module in the browser and in Node (planning only) for tests.

export const SAMPLE_RATE = 24000;

// The choice a slot plays at a level: the one with the highest level not above it.
export function pick(slot, level) {
  let best = null;
  for (const c of slot.choose) {
    if (c.level <= level && (!best || c.level > best.level)) best = c;
  }
  return best || slot.choose[0];
}

// Lay the sequence out end to end for a level: [{seg, choice, start, end}], and the total length.
// offsets (seconds per source, from checkOffsets) shift a source's from/to where a decoded MP3
// isn't the length the script was cut against.
export function plan(script, level, offsets = {}) {
  const out = [];
  let t = 0;
  for (const seg of script.sequence) {
    const c = pick(seg, level);
    const len = c.src == null ? (c.seconds || 0) : c.to - c.from;
    out.push({ seg, choice: c, start: t, end: t + len, shift: c.src ? offsets[c.src] || 0 : 0 });
    t += len;
  }
  return { items: out, length: t };
}

// The plan item playing at time t (binary search), or the last one.
export function at(p, t) {
  let lo = 0, hi = p.items.length - 1;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (p.items[mid].start <= t) lo = mid; else hi = mid - 1;
  }
  return p.items[lo];
}

// The word index sounding at time t: the last word of the playing item whose start has passed.
export function wordAt(p, t) {
  const item = at(p, t);
  const c = item.choice;
  if (!c.words) return null;
  const rel = t - item.start;
  let k = 0;
  for (let i = 0; i < c.t.length; i++) if (c.t[i] <= rel) k = i;
  return c.words[0] + k;
}

// The time a word starts at in a plan (for seek by word and for keeping place on a level change).
export function timeOfWord(p, i) {
  for (const item of p.items) {
    const c = item.choice;
    if (c.words && i >= c.words[0] && i <= c.words[1]) return item.start + c.t[i - c.words[0]];
  }
  return 0;
}

// MP3 padding: browsers decode an MP3 a few tens of ms longer than its WAV (encoder delay), and
// not all trim it the same way. Shift a source by the difference when it's small; report larger ones.
export function checkOffsets(script, decodedSeconds) {
  const offsets = {}, warnings = [];
  for (const [key, src] of Object.entries(script.sources)) {
    const got = decodedSeconds[key];
    if (got == null) continue;
    const diff = got - src.seconds;
    if (Math.abs(diff) > 0.2) warnings.push(`${key}: decoded ${got.toFixed(3)} s, script says ${src.seconds} s`);
    else if (Math.abs(diff) > 0.001) offsets[key] = diff;
  }
  return { offsets, warnings };
}

// The live player. new ScriptPlayer(script, baseUrl).load() then play(level), seek(t), setLevel(n).
export class ScriptPlayer {
  constructor(script, baseUrl = "", { onWord = null, onEnd = null, lookahead = 2, tick = 50 } = {}) {
    this.script = script;
    this.base = baseUrl;
    this.onWord = onWord;
    this.onEnd = onEnd;
    this.lookahead = lookahead;
    this.tickMs = tick;
    this.level = 1;
    this.buffers = {};
    this.offsets = {};
    this.warnings = [];
    this.playing = false;
    this.pos = 0;          // seconds into the plan when paused
  }

  async load() {
    // The audio context runs at the files' rate, so decoding doesn't resample (and memory halves).
    this.ctx = this.ctx || new AudioContext({ sampleRate: SAMPLE_RATE });
    const decoded = {};
    await Promise.all(Object.entries(this.script.sources).map(async ([key, src]) => {
      const res = await fetch(this.base + src.file);
      if (!res.ok) throw new Error(`${src.file}: ${res.status}`);
      this.buffers[key] = await this.ctx.decodeAudioData(await res.arrayBuffer());
      decoded[key] = this.buffers[key].duration;
    }));
    const { offsets, warnings } = checkOffsets(this.script, decoded);
    this.offsets = offsets;
    this.warnings = warnings;
    this.plan = plan(this.script, this.level, this.offsets);
    return this;
  }

  get length() { return this.plan ? this.plan.length : 0; }

  get currentTime() {
    return this.playing ? this.ctx.currentTime - this.t0 : this.pos;
  }

  async play(level = this.level) {
    if (this.ctx.state !== "running") await this.ctx.resume();   // needs the tap that called play
    if (level !== this.level) { this.level = level; this.plan = plan(this.script, level, this.offsets); }
    this.start(this.pos);
  }

  pause() {
    if (!this.playing) return;
    this.pos = this.currentTime;
    this.stopAll();
  }

  seek(t) {
    const was = this.playing;
    this.stopAll();
    this.pos = Math.max(0, Math.min(t, this.length));
    if (was) this.start(this.pos);
  }

  // A level change keeps the listener's place: the same word, under the new plan.
  setLevel(level) {
    const word = wordAt(this.plan, this.currentTime);
    const was = this.playing;
    this.stopAll();
    this.level = level;
    this.plan = plan(this.script, level, this.offsets);
    this.pos = word == null ? 0 : timeOfWord(this.plan, word);
    if (was) this.start(this.pos);
  }

  start(from) {
    this.playing = true;
    this.t0 = this.ctx.currentTime - from + 0.05;   // a 50 ms lead so the first segment starts on time
    this.sources = [];
    this.next = this.plan.items.indexOf(at(this.plan, from));
    this.tick();
    this.timer = setInterval(() => this.tick(), this.tickMs);
  }

  // Look-ahead scheduling: start every segment due in the next few seconds at its sample-accurate time.
  tick() {
    const now = this.ctx.currentTime - this.t0;
    while (this.next < this.plan.items.length && this.plan.items[this.next].start < now + this.lookahead) {
      const item = this.plan.items[this.next++];
      const c = item.choice;
      if (c.src == null) continue;                       // a hold: silence in the sequence
      const into = Math.max(0, now - item.start);         // a seek can land inside a segment
      const node = this.ctx.createBufferSource();
      node.buffer = this.buffers[c.src];
      node.connect(this.ctx.destination);
      const when = this.t0 + item.start + into;
      node.start(Math.max(when, this.ctx.currentTime), c.from + item.shift + into, c.to - c.from - into);
      this.sources.push(node);
    }
    if (this.onWord) this.onWord(wordAt(this.plan, Math.max(0, now)));
    if (now >= this.length) {
      this.stopAll();
      this.pos = this.length;
      if (this.onEnd) this.onEnd();
    }
  }

  stopAll() {
    clearInterval(this.timer);
    for (const s of this.sources || []) { try { s.stop(); } catch (e) { /* already stopped */ } }
    this.sources = [];
    this.playing = false;
  }
}
