import { useI18n } from '../i18n'
import Reveal from '../components/Reveal'
import './Contact.css'

/** Closing section — an inverted "signature card", no rail. */
export default function Contact() {
  const { t } = useI18n()
  return (
    <section id="contact">
      <div className="sheet">
        <Reveal>
          <div className="card contact-card">
            <span className="contact-badge" aria-hidden="true">✓</span>
            <p className="kicker">{t.contact.kicker}</p>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.text}</p>
            <a className="contact-addr" href={`mailto:${t.contact.email}`}>
              {t.contact.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
