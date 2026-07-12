import { useI18n } from '../i18n'
import Reveal from '../components/Reveal'
import splitRailNote from '../lib/splitRailNote'
import './Method.css'

export default function Method() {
  const { t } = useI18n()
  const m = t.method
  const [tag, rest] = splitRailNote(m.railNote)

  return (
    <section id="method">
      <div className="sheet">
        <div className="row">
          <div>
            <Reveal>
              <p className="kicker">{m.kicker}</p>
              <h2>{m.title}</h2>
            </Reveal>

            <div className="method-gates">
              {m.gates.map((gate, i) => (
                <Reveal key={i} delay={i * 80} className="method-gate">
                  <span className="method-index mono" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="method-gate-name">{gate.name}</p>
                    <p className="muted">{gate.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={240} className="method-legend-wrap">
              <div className="card method-legend">
                <h3>{m.legendTitle}</h3>
                <div className="method-legend-grid">
                  {m.legend.map((item, i) => (
                    <div className="method-legend-row" key={i}>
                      <span className={`status ${item.ok ? 'ok' : 'flag'}`}>{item.code}</span>
                      <span className="muted method-legend-text">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <aside className="rail">
            <p>
              {tag && <span className="tag">{tag}</span>}
              {rest}
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
