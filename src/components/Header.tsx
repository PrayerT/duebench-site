import { useI18n, LOCALES } from '../i18n'
import type { LangCode } from '../i18n'
import './Header.css'

export default function Header() {
  const { t, lang, setLang } = useI18n()

  return (
    <header className="site-header">
      <div className="sheet masthead">
        <a className="wordmark" href="/">
          DueBench<span className="dot">.</span>
        </a>
        <nav aria-label={t.a11y.sections}>
          <a href="#services">{t.nav.services}</a>
          <a href="#method">{t.nav.method}</a>
          <a href="#pricing">{t.nav.pricing}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <div className="lang-picker">
          <span className="lang-globe" aria-hidden="true">
            {/* simple globe glyph */}
            <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="8" cy="8" r="6.4" />
              <ellipse cx="8" cy="8" rx="2.8" ry="6.4" />
              <path d="M1.8 8h12.4M2.6 4.8h10.8M2.6 11.2h10.8" />
            </svg>
          </span>
          <select
            aria-label={t.a11y.language}
            value={lang}
            onChange={(e) => setLang(e.target.value as LangCode)}
          >
            {(Object.keys(LOCALES) as LangCode[]).map((code) => (
              <option key={code} value={code}>
                {LOCALES[code].meta.langName}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  )
}
