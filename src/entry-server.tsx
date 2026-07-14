import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'

/**
 * Build-time prerender entry (see scripts/prerender.mjs). Renders the English
 * page into static HTML so crawlers that don't execute JS — including AI
 * search bots — see the full content. The client bundle re-renders on load.
 */
export function render(): string {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
