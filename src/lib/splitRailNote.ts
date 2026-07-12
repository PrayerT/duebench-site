/**
 * Split a rail note into a lead phrase (rendered as the brand-green .tag span)
 * and the remainder. The lead ends at the first sentence delimiter, covering
 * every locale's punctuation: ASCII/full-width colon, question/exclamation
 * marks, ideographic full stop and comma.
 *
 * The remainder keeps its leading whitespace on purpose — locales that need a
 * space after the delimiter carry it in the copy itself (CJK locales don't).
 */
export default function splitRailNote(note: string): [string, string] {
  const m = note.match(/^(.*?[:：?？!！。、])([\s\S]*)$/)
  return m ? [m[1], m[2]] : ['', note]
}
