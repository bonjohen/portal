// LoreKiln slide player helpers (docs/slides_phone_pdr.md). Pure functions only: no DOM at import,
// so Node can test them (node player/slides.test.mjs).

// A plan's narration as one 16-bit PCM mono WAV. channels: {src: Float32Array} at `rate`. Plan items
// sit end to end without overlap, so each one is a copy of its slice; holds stay silent.
export function mixPlan(plan, channels, rate) {
  const n = Math.ceil(plan.length * rate);
  const bytes = new Uint8Array(44 + 2 * n);
  const view = new DataView(bytes.buffer);
  const str = (at, s) => { for (let i = 0; i < s.length; i++) bytes[at + i] = s.charCodeAt(i); };
  str(0, "RIFF"); view.setUint32(4, 36 + 2 * n, true); str(8, "WAVE");
  str(12, "fmt "); view.setUint32(16, 16, true); view.setUint16(20, 1, true); view.setUint16(22, 1, true);
  view.setUint32(24, rate, true); view.setUint32(28, rate * 2, true); view.setUint16(32, 2, true); view.setUint16(34, 16, true);
  str(36, "data"); view.setUint32(40, 2 * n, true);
  for (const item of plan.items) {
    const c = item.choice;
    if (c.src == null) continue;
    const src = channels[c.src];
    if (!src) throw new Error(`no samples for ${c.src}`);
    const from = Math.round((c.from + (item.shift || 0)) * rate);
    const at = Math.round(item.start * rate);
    const len = Math.min(Math.round((c.to - c.from) * rate), n - at);
    for (let i = 0; i < len; i++) {
      const j = from + i;
      const v = j >= 0 && j < src.length ? Math.max(-1, Math.min(1, src[j])) : 0;
      view.setInt16(44 + 2 * (at + i), Math.round(v * 32767), true);
    }
  }
  return bytes;
}

// Samples at another rate, by straight-line interpolation (iOS may decode at its own rate).
export function resampleLinear(samples, fromRate, toRate) {
  if (fromRate === toRate) return samples;
  const n = Math.round(samples.length * toRate / fromRate);
  const out = new Float32Array(n);
  const step = fromRate / toRate;
  for (let i = 0; i < n; i++) {
    const x = i * step, k = Math.floor(x), f = x - k;
    const a = samples[Math.min(k, samples.length - 1)], b = samples[Math.min(k + 1, samples.length - 1)];
    out[i] = a + (b - a) * f;
  }
  return out;
}
