import { useI18n } from '../i18n'
import Reveal from '../components/Reveal'
import Tick from '../components/Tick'
import splitRailNote from '../lib/splitRailNote'
import './Pricing.css'

export default function Pricing() {
  const { t } = useI18n()
  const p = t.pricing
  const [tag, rest] = splitRailNote(p.railNote)

  return (
    <section id="pricing">
      <div className="sheet">
        <div className="row">
          <div>
            <Reveal>
              <p className="kicker">{p.kicker}</p>
            </Reveal>
            <Reveal delay={80}>
              <h2>{p.title}</h2>
            </Reveal>
            <Reveal delay={160}>
              <h3>{p.auditTitle}</h3>
              <div className="pricing-table-wrap">
                <table className="pricing-table">
                  <thead>
                    <tr>
                      <th>{p.cols.tier}</th>
                      <th>{p.cols.scope}</th>
                      <th>{p.cols.fee}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {p.tiers.map((tier, i) => (
                      <tr key={i} className="pricing-row" style={{ animationDelay: `${i * 90}ms` }}>
                        <td>
                          <strong>{tier.name}</strong>
                          <br />
                          <span className="mono muted pricing-time">{tier.time}</span>
                        </td>
                        <td>{tier.scope}</td>
                        <td className="price pricing-fee">{tier.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <h3>{p.leadsTitle}</h3>
              <p>
                {p.leadsText}
                <Tick note={p.freeNote} />
              </p>
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
