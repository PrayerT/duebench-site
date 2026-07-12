import { useId } from 'react'
import { useI18n } from '../i18n'

/**
 * The signature audit tick mark: a small ✓ badge that reveals,
 * on hover/focus, a note explaining how the claim next to it was checked.
 */
export default function Tick({ note }: { note: string }) {
  const id = useId()
  const { t } = useI18n()
  return (
    <button className="tick" type="button" aria-label={t.a11y.verifyLabel} aria-describedby={id}>
      ✓
      <span id={id} className="note" role="tooltip">
        {note}
      </span>
    </button>
  )
}
