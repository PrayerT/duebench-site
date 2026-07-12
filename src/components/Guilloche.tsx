import { useMemo } from 'react'

/**
 * Parametric guilloché ornaments — the interlaced line patterns engraved on
 * certificates and banknotes. Generated at runtime (no asset), drawn with
 * currentColor so they tint correctly in both themes. Decorative only.
 */

function fmt(n: number) {
  return Math.round(n * 10) / 10
}

/** Horizontal interlaced band, viewBox 0 0 1200 64, stretches freely. */
export function GuillocheBand({
  className = '',
  waves = 5,
  freq = 3,
}: {
  className?: string
  waves?: number
  freq?: number
}) {
  const lines = useMemo(() => {
    const W = 1200
    const H = 64
    const out: string[] = []
    for (let k = 0; k < waves; k++) {
      const ph = (Math.PI * 2 * k) / waves
      const pts: string[] = []
      for (let i = 0; i <= 240; i++) {
        const t = i / 240
        const y =
          H / 2 +
          H * 0.36 * Math.sin(2 * Math.PI * freq * t + ph) +
          H * 0.16 * Math.sin(2 * Math.PI * freq * 2 * t - ph * 1.6)
        pts.push(`${fmt(t * W)},${fmt(y)}`)
      }
      out.push(pts.join(' '))
    }
    return out
  }, [waves, freq])

  return (
    <svg
      className={className}
      viewBox="0 0 1200 64"
      preserveAspectRatio="none"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
    >
      {lines.map((p, i) => (
        <polyline key={i} points={p} />
      ))}
    </svg>
  )
}

/** Circular lace rosette, viewBox 0 0 480 480. */
export function GuillocheRosette({
  className = '',
  rings = 12,
  lobes = 18,
}: {
  className?: string
  rings?: number
  lobes?: number
}) {
  const lines = useMemo(() => {
    const S = 480
    const c = S / 2
    const out: string[] = []
    for (let k = 0; k < rings; k++) {
      const ph = (Math.PI * 2 * k) / rings
      const base = S * (0.2 + (0.115 * k) / rings)
      const amp = S * (0.055 - (0.0022 * k) / rings)
      const pts: string[] = []
      for (let i = 0; i <= 360; i++) {
        const a = (Math.PI * 2 * i) / 360
        const r =
          base + amp * Math.sin(lobes * a + ph) + amp * 0.5 * Math.sin(6 * a - 2 * ph)
        pts.push(`${fmt(c + r * Math.cos(a))},${fmt(c + r * Math.sin(a))}`)
      }
      out.push(pts.join(' '))
    }
    return out
  }, [rings, lobes])

  return (
    <svg
      className={className}
      viewBox="0 0 480 480"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
    >
      {lines.map((p, i) => (
        <polyline key={i} points={p} />
      ))}
    </svg>
  )
}
