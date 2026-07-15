import { useState } from 'react'
import { useI18n } from '../i18n'
import Reveal from '../components/Reveal'
import './Contact.css'

/** Closing section — an inverted "signature card", no rail. */
export default function Contact() {
  const { t } = useI18n()
  const [copied, setCopied] = useState(false)
  const mailtoHref = `mailto:${t.contact.email}?subject=${encodeURIComponent(
    t.contact.mailSubject,
  )}&body=${encodeURIComponent(t.contact.mailBody)}`

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(t.contact.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard unavailable (http / old browser) — the address is visible as text anyway
    }
  }

  return (
    <section id="contact">
      <div className="sheet">
        <Reveal>
          <div className="card contact-card">
            <span className="contact-seal" aria-hidden="true" />
            <span className="contact-badge" aria-hidden="true">✓</span>
            <p className="kicker">{t.contact.kicker}</p>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.text}</p>
            <a className="contact-addr" href={mailtoHref}>
              {t.contact.email}
            </a>
            <p className="contact-copy">
              <span className="muted">{t.contact.copyHint}</span>{' '}
              <button type="button" className="contact-copy-btn" onClick={copyAddress}>
                {copied ? t.contact.copied : t.contact.copyBtn}
              </button>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
