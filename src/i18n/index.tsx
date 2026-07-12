import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import en from './en'
import type { Dict } from './en'
import zh from './zh'
import es from './es'
import de from './de'
import ja from './ja'
import fr from './fr'

export const LOCALES = {
  en,
  zh,
  es,
  de,
  ja,
  fr,
} satisfies Record<string, Dict>

export type LangCode = keyof typeof LOCALES

const STORAGE_KEY = 'duebench-lang'

function detectLang(): LangCode {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && saved in LOCALES) return saved as LangCode
  } catch {
    /* private mode */
  }
  const langs = navigator.languages ?? [navigator.language]
  for (const l of langs) {
    const short = l.toLowerCase().slice(0, 2)
    if (short in LOCALES) return short as LangCode
  }
  return 'en'
}

interface I18nValue {
  lang: LangCode
  setLang: (l: LangCode) => void
  t: Dict
}

const I18nContext = createContext<I18nValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>(detectLang)

  const setLang = (l: LangCode) => {
    setLangState(l)
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {
      /* private mode */
    }
  }

  useEffect(() => {
    document.documentElement.lang = LOCALES[lang].meta.htmlLang
  }, [lang])

  const value = useMemo<I18nValue>(() => ({ lang, setLang, t: LOCALES[lang] }), [lang])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>')
  return ctx
}
