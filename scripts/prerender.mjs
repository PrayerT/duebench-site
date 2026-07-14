// Injects the SSR-rendered app into docs/index.html after `vite build`.
// Run via `npm run build` (see package.json); requires the SSR bundle at
// .ssr/entry-server.js produced by `vite build --ssr`.
import { readFileSync, writeFileSync } from 'node:fs'
import { render } from '../.ssr/entry-server.js'

const file = new URL('../docs/index.html', import.meta.url)
const html = readFileSync(file, 'utf8')
const marker = '<div id="root"></div>'
if (!html.includes(marker)) {
  throw new Error('prerender: <div id="root"></div> marker not found in docs/index.html')
}
const app = render()
if (app.length < 5000) {
  throw new Error(`prerender: rendered HTML suspiciously small (${app.length} chars) — check entry-server`)
}
writeFileSync(file, html.replace(marker, `<div id="root">${app}</div>`))
console.log(`prerender: injected ${app.length} chars of static HTML into docs/index.html`)
