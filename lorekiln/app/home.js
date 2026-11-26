// Front page helpers (docs/front_page_pdr.md 4.3). Pure: no DOM at import, so Node can test them
// (node app/home.test.mjs). Library loading, keys, links and section readiness are in player/library.js.
import { chapterKey, findChapter, isPrime } from "../player/library.js?v=1";

// One card per series (its canon books, each followed by its prime trial), then an About card
// for the overview books when there are any.
export function seriesCards(books, overview = []) {
  const cards = [];
  for (const b of books) {
    const code = isPrime(b) && b.compare_to ? b.compare_to.series : b.series;
    let card = cards.find(c => c.series === code);
    if (!card) cards.push(card = { series: code, title: seriesTitle(b), cover: null, books: [] });
    card.books.push(b);
    if (!card.cover && b.cover) card.cover = b.cover;
  }
  if (overview.length) cards.push({ series: "about", title: "About LoreKiln", cover: null, books: overview, about: true });
  return cards;
}
// "Rise of Alcyoneus, Book 1" -> "Rise of Alcyoneus".
const seriesTitle = b => (b.title || b.series).replace(/,?\s*Book\s+\d+.*$/i, "").trim() || b.series;

// Where the page opens: the place last picked here, else the last chapter played, else the first episode.
export function defaultPlace(books, overview, home, last) {
  const all = [...books, ...overview];
  return (home && home.key && findChapter(all, home.key)) || (last && findChapter(books, last)) ||
    (books.length ? { book: books[0], index: 0 } : overview.length ? { book: overview[0], index: 0 } : null);
}

// The Continue line: the last chapter played (if it's still in the library) and its saved position.
export function continueLine(books, last, posOf) {
  const hit = last ? findChapter(books, last) : null;
  if (!hit) return null;
  const at = Number(posOf(chapterKey(hit.book, hit.book.chapters[hit.index]))) || 0;
  return { ...hit, at };
}
