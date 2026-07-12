import { useI18n } from '../i18n'

export default function Footer() {
  const { t } = useI18n()
  return (
    <footer className="site-footer">
      <div className="sheet footer-inner">
        <span>{t.footer.copyright}</span>
        <span>
          {t.footer.note} <span style={{ color: 'var(--brand)' }}>✓</span>
        </span>
      </div>
    </footer>
  )
}
