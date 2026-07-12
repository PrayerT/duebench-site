import { useI18n } from '../i18n'
import Tick from '../components/Tick'
import Reveal from '../components/Reveal'
import splitRailNote from '../lib/splitRailNote'
import './Services.css'

type ServiceCopy = { no: string; title: string; sub: string; bullets: string[] }

function Engagement({
  service,
  tickNote,
  delay,
}: {
  service: ServiceCopy
  tickNote?: string
  delay: number
}) {
  return (
    <Reveal delay={delay}>
      <article className="engagement card">
        <span className="eng-no mono">{service.no}</span>
        <h3>{service.title}</h3>
        <p className="eng-sub muted">{service.sub}</p>
        <ul className="plain">
          {service.bullets.map((b, i) => (
            <li key={i}>
              {b}
              {i === 0 && tickNote ? <Tick note={tickNote} /> : null}
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  )
}

export default function Services() {
  const { t } = useI18n()
  const [tag, rest] = splitRailNote(t.services.railNote)

  return (
    <section id="services">
      <div className="sheet">
        <div className="row">
          <div>
            <Reveal>
              <p className="kicker">{t.services.kicker}</p>
            </Reveal>
            <Reveal delay={80}>
              <h2>{t.services.title}</h2>
            </Reveal>
            <Engagement service={t.services.lead} tickNote={t.services.lead.tickNote} delay={160} />
            <Engagement service={t.services.audit} delay={240} />
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
