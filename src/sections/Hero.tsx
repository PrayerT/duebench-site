import { useEffect, useRef, useState } from 'react'
import { useI18n } from '../i18n'
import Tick from '../components/Tick'
import Reveal from '../components/Reveal'
import { GuillocheRosette } from '../components/Guilloche'
import './Hero.css'

type RowState = 'idle' | 'checking' | 'done'

/** The animated "live check" feed — the site's signature motion piece. */
function VerificationFeed() {
  const { t } = useI18n()
  const rows = t.hero.feed.rows
  const [states, setStates] = useState<RowState[]>(() => rows.map(() => 'idle'))
  const timers = useRef<number[]>([])

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setStates(rows.map(() => 'done'))
      return
    }

    let cancelled = false
    const schedule = (fn: () => void, ms: number) => {
      const id = window.setTimeout(() => {
        if (!cancelled) fn()
      }, ms)
      timers.current.push(id)
    }

    const runCycle = () => {
      setStates(rows.map(() => 'idle'))
      rows.forEach((_, i) => {
        schedule(() => {
          setStates((s) => s.map((v, j) => (j === i ? 'checking' : v)))
        }, 500 + i * 1400)
        schedule(() => {
          setStates((s) => s.map((v, j) => (j === i ? 'done' : v)))
        }, 500 + i * 1400 + 1050)
      })
      // pause on the completed board, then loop
      schedule(runCycle, 500 + rows.length * 1400 + 3600)
    }

    runCycle()
    return () => {
      cancelled = true
      timers.current.forEach(clearTimeout)
      timers.current = []
    }
    // rows identity changes with language; restart the cycle then
  }, [rows])

  return (
    <div className="feed card" aria-hidden="true">
      <div className="feed-head mono">
        <span className="feed-dot" />
        {t.hero.feed.title}
      </div>
      <ul>
        {rows.map((row, i) => {
          const st = states[i]
          return (
            <li key={i} className={`feed-row ${st}`}>
              <div className="feed-text">
                <span className="feed-label">{row.label}</span>
                <span className="feed-detail mono">{row.detail}</span>
              </div>
              <span className="feed-status mono">
                {st === 'checking' && (
                  <span className="checking">
                    {t.hero.feed.checking}
                    <span className="dots">
                      <i>.</i>
                      <i>.</i>
                      <i>.</i>
                    </span>
                  </span>
                )}
                {st === 'done' && (
                  <span className={`badge ${row.ok ? 'ok' : 'flag'}`}>
                    {row.ok ? `✓ ${t.hero.feed.valid}` : `⚑ ${t.hero.feed.flagged}`}
                  </span>
                )}
              </span>
            </li>
          )
        })}
      </ul>
      <div className="feed-note mono">{t.hero.feed.note}</div>
    </div>
  )
}

export default function Hero() {
  const { t } = useI18n()
  return (
    <div className="sheet">
      <div className="hero row">
        <div>
          <Reveal>
            <p className="kicker">{t.hero.eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h1>{t.hero.title}</h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="lede">
              {t.hero.lede1}
              <Tick note={t.hero.proofNote} />
            </p>
            <p className="lede sub">{t.hero.lede2}</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="hero-ctas">
              <a className="btn btn-primary" href="#contact">
                {t.hero.ctaPrimary} <span className="arrow">→</span>
              </a>
              <a className="btn btn-ghost" href="#pricing">
                {t.hero.ctaSecondary}
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={300} className="hero-feed-wrap">
          <GuillocheRosette className="hero-rosette" />
          <VerificationFeed />
        </Reveal>
      </div>
    </div>
  )
}
