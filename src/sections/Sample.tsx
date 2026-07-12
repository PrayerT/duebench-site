import { useI18n } from '../i18n'
import Reveal from '../components/Reveal'
import { GuillocheBand } from '../components/Guilloche'
import splitRailNote from '../lib/splitRailNote'
import './Sample.css'

export default function Sample() {
  const { t } = useI18n()
  const s = t.sample
  const [tag, rest] = splitRailNote(s.railNote)

  return (
    <section id="sample">
      <div className="sheet">
        <div className="row">
          <div>
            <Reveal>
              <p className="kicker">{s.kicker}</p>
            </Reveal>
            <Reveal delay={80}>
              <h2>{s.title}</h2>
              <p className="muted">{s.intro}</p>
            </Reveal>
            <Reveal delay={160}>
              <div className="workpaper card">
                <div className="wp-head mono">
                  <GuillocheBand className="wp-guilloche" />
                  <span>{s.wpTitle}</span>
                  <span className="stamp wp-stamp">{s.specimen}</span>
                </div>
                <div className="wp-scroll">
                  <table>
                    <thead>
                      <tr>
                        <th>{s.cols.account}</th>
                        <th>{s.cols.contact}</th>
                        <th>{s.cols.status}</th>
                        <th>{s.cols.hook}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {s.rows.map((r, i) => (
                        <tr key={i} className="wp-row" style={{ animationDelay: `${i * 90}ms` }}>
                          <td>
                            {r.company}
                            <br />
                            <span className="mono muted wp-meta">{r.companyMeta}</span>
                          </td>
                          <td>
                            {r.contact}
                            <br />
                            <span className="mono muted wp-meta">{r.contactMeta}</span>
                          </td>
                          <td>
                            <span className={`status ${r.ok ? 'ok' : 'flag'}`}>{r.status}</span>
                          </td>
                          <td>
                            {r.hook}
                            <br />
                            <span className="mono muted wp-meta">{r.hookSrc}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
