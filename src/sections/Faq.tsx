import { useI18n } from '../i18n'
import Reveal from '../components/Reveal'
import splitRailNote from '../lib/splitRailNote'
import './Faq.css'

export default function Faq() {
  const { t } = useI18n()
  const f = t.faq
  const [railTag, railRest] = splitRailNote(f.railNote)

  return (
    <section id="faq">
      <div className="sheet">
        <div className="row">
          <div>
            <Reveal>
              <p className="kicker">{f.kicker}</p>
            </Reveal>
            <Reveal delay={80}>
              <h2>{f.title}</h2>
            </Reveal>
            <div className="faq-list">
              {f.items.map((item, i) => (
                <Reveal key={i} delay={i * 60}>
                  <details className="faq-item">
                    <summary>{item.q}</summary>
                    <div>
                      <p>{item.a}</p>
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
          <aside className="rail">
            <p>
              {railTag && <span className="tag">{railTag}</span>}
              {railRest}
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
