// LoreKiln library (docs/front_page_pdr.md 4.1): loads the series sites named in library.json,
// and builds the keys and links every page shares. No DOM at import, so Node can test it
// (node player/library.test.mjs). Pages import it as library.js?v=N, the same N everywhere.

// ---------- storage (localStorage, "lk." keys, JSON values) ----------
export const store = {
  get(k, d) { try { const v = localStorage.getItem("lk." + k); return v === null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem("lk." + k, JSON.stringify(v)); } catch {} },
};

// Fetch that turns HTTP errors and network failures into one plain sentence.
// "no-cache" revalidates with the server (a cheap 304 when unchanged), so a newly published
// episode shows up on the next load instead of after Pages' 10-minute cache.
export async function get(url) {
  let res;
  try { res = await fetch(url, { cache: "no-cache" }); } catch { throw new Error(globalThis.navigator && navigator.onLine === false ? "you're offline" : "the network request failed"); }
  if (!res.ok) throw new Error(res.status === 404 ? "not found (404)" : `the server answered ${res.status}`);
  return res;
}

export function stamp(url, v) { return v ? `${url}${url.includes("?") ? "&" : "?"}v=${encodeURIComponent(v)}` : url; }

// ---------- books and editions ----------
// Storage keys: canon keeps the chapter id itself, so positions saved before editions existed still resume.
export const isPrime = b => b.edition === "prime-trial";
export const bookKey = b => `${b.series}${b.book}${isPrime(b) ? ":prime" : ""}`;
export const chapterKey = (b, c) => (isPrime(b) ? "prime:" : "") + c.id;

// The other edition's chapter at the same episode, or null.
export function partner(books, b, ch) {
  if (!books || !ch) return null;
  let other;
  if (isPrime(b)) {
    const to = b.compare_to;
    other = to && books.find(x => !isPrime(x) && x.series === to.series && x.book === to.book);
  } else {
    other = books.find(x => isPrime(x) && x.compare_to && x.compare_to.series === b.series && x.compare_to.book === b.book);
  }
  if (!other) return null;
  const i = other.chapters.findIndex(c => c.episode === ch.episode);
  return i < 0 ? null : { book: other, index: i };
}

// Canon books by title, each followed by its prime trial; prime trials without a canon book go last.
export function orderBooks(books) {
  const canon = books.filter(b => !isPrime(b)).sort((a, b) => a.title.localeCompare(b.title) || a.book - b.book);
  const prime = books.filter(isPrime);
  const out = [];
  for (const c of canon) {
    out.push(c);
    for (const p of prime) if (p.compare_to && p.compare_to.series === c.series && p.compare_to.book === c.book) out.push(p);
  }
  for (const p of prime) if (!out.includes(p)) out.push(p);
  return out;
}

// Covers whose candidate (or, with no candidates, the book) is approved, by series + book. base is absolute.
export function approvedCovers(cat, base) {
  const out = {};
  if (!cat || !Array.isArray(cat.books)) return out;
  const code = cat.series && cat.series.code;
  for (const cb of cat.books) {
    if (!cb || typeof cb.cover !== "string" || !cb.cover || !code) continue;
    const cand = Array.isArray(cb.cover_candidates) ? cb.cover_candidates.find(c => c && c.image === cb.cover) : null;
    if ((cand ? cand.status : cb.status) !== "approved") continue;
    out[`${code}${cb.book}`] = new URL(cb.cover, base).href;
  }
  return out;
}

const slash = u => u.replace(/\/?$/, "/");

// One source: its books with absolute file URLs, trimmed to maxEpisode (null: no trim).
async function loadSource(base, maxEpisode, role) {
  const catalog = fetch(base + "catalog.json", { cache: "no-cache" }).then(r => r.ok ? r.json() : null).catch(() => null);
  let m;
  try { m = await (await get(base + "manifest.json")).json(); }
  catch (e) { return { failed: { base, reason: e instanceof SyntaxError ? "not a valid manifest" : e.message } }; }
  const covers = approvedCovers(await catalog, base);
  const books = [];
  for (const b of m.books || []) {
    if (!b || !Array.isArray(b.chapters)) continue;
    if (maxEpisode != null) b.chapters = b.chapters.filter(c => c && Number(c.episode) <= maxEpisode);
    b.chapters = b.chapters.filter(Boolean);
    if (!b.chapters.length) continue;
    b.edition ||= "canon";
    b.title ||= `${b.series} Book ${b.book}`;
    b.cover = isPrime(b) ? null : covers[`${b.series}${b.book}`] || null;
    b.base = base;
    b.role = role;
    for (const c of b.chapters) {
      for (const k of ["text", "audio", "ass", "timing", "script"]) if (c[k]) c[k] = new URL(c[k], base).href;
      for (const k of ["audio", "ass", "timing"]) if (c[k]) c[k] = stamp(c[k], c.audio_version);
    }
    books.push(b);
  }
  return { books };
}

// The library: library.json's sources (or one ?media= folder, already absolute), each source's
// manifest and catalog, merged. Overview books load only when asked for and aren't trimmed.
export async function loadLibrary({ libraryUrl = new URL("library.json", import.meta.url).href, media = null, overview = false } = {}) {
  let sources, overviewSources = [], sections = {}, maxEpisode = 20, homeReady = false;
  if (media) sources = [slash(media)];
  else {
    sources = [new URL("media/", libraryUrl).href];
    try {
      const lib = await (await fetch(libraryUrl, { cache: "no-cache" })).json();
      const abs = list => list.map(s => slash(new URL(s, libraryUrl).href));
      if (Array.isArray(lib.sources)) sources = abs(lib.sources);
      if (Array.isArray(lib.overview)) overviewSources = abs(lib.overview);
      if (Number.isInteger(lib.max_episode) && lib.max_episode > 0) maxEpisode = lib.max_episode;
      if (lib.sections && typeof lib.sections === "object") {
        for (const [name, s] of Object.entries(lib.sections)) {
          if (s && typeof s.url === "string") sections[name] = { url: new URL(s.url, libraryUrl).href, label: s.label || "Open" };
        }
      }
      homeReady = lib.homeReady === true;
    } catch {}
  }
  const story = await Promise.all(sources.map(b => loadSource(b, maxEpisode, "story")));
  const over = overview ? await Promise.all(overviewSources.map(b => loadSource(b, null, "overview"))) : [];
  const failed = [...story, ...over].filter(r => r.failed).map(r => r.failed);
  return {
    books: orderBooks(story.flatMap(r => r.books || [])),
    overview: over.flatMap(r => r.books || []),
    sections, maxEpisode, homeReady, failed,
  };
}

export function findChapter(books, key) {
  for (const b of books) {
    const i = b.chapters.findIndex(c => chapterKey(b, c) === key);
    if (i >= 0) return { book: b, index: i };
  }
  return null;
}

// ---------- links ----------
const PLAYER = new URL("./", import.meta.url).href;
const APP = new URL("../app/", import.meta.url).href;
const withParam = (url, k, v) => `${url}${url.includes("?") ? "&" : "?"}${k}=${encodeURIComponent(v)}`;

// The link that opens `section` at chapter `key`. Always absolute.
export function placeLink(section, key, { t = null, media = null, script = null, sections = {} } = {}) {
  let url;
  if (section === "home") url = APP;
  else if (section === "listen") {
    url = withParam(PLAYER, "ch", key);
    if (t != null) url = withParam(url, "t", Math.floor(t));
  } else if (section === "watch") {
    url = withParam(PLAYER + "slides.html", "script", script);
    if (key) url = withParam(url, "ch", key);              // no key: no way back to Listen (overview books)
  }
  else if (sections[section]) url = withParam(sections[section].url, "ch", key);
  else return null;
  return media ? withParam(url, "media", media) : url;
}

// What each section can do for this chapter (front page tiles, player chips).
export function sectionsFor(book, chapter, registry = {}) {
  const out = [];
  // Overview books aren't in the player's library (they're slide shows), so they're watched, not listened to.
  if (book && book.role === "overview") out.push({ name: "listen", label: "Listen", state: "coming", reason: "Watch it as a slide show" });
  else if (chapter && chapter.audio) out.push({ name: "listen", label: "Listen", state: "open", reason: "Ready" });
  else if (chapter && chapter.text) out.push({ name: "listen", label: "Listen", state: "open", reason: "Text only" });
  else out.push({ name: "listen", label: "Listen", state: "coming", reason: "Coming" });
  const watch = chapter && chapter.script && (chapter.visual === true || (book && book.role === "overview"));
  out.push({ name: "watch", label: "Watch", state: watch ? "open" : "coming", reason: watch ? "Ready" : "Comic in production" });
  for (const [name, label] of [["play", "Play"], ["rpg", "RPG"], ["explore", "Explore"]]) {
    const r = registry[name];
    out.push({ name, label, state: r ? "open" : "coming", reason: r ? r.label : "Coming" });
  }
  return out;
}
