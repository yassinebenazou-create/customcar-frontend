import { useState } from 'react'
import { motion } from 'framer-motion'

export default function BeforeAfterSlider({ before, after }) {
  const [pct, setPct] = useState(52)
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-brand-edge/10">
      <img src={after} alt="Après" className="absolute inset-0 h-full w-full object-cover" />
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${pct}%` }}
      >
        <img src={before} alt="Avant" className="absolute inset-0 h-full w-full object-cover" />
      </div>
      <motion.div
        className="absolute inset-y-0 w-px bg-brand-accent"
        style={{ left: `${pct}%` }}
      >
        <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-accent bg-brand-panel/70 shadow-[0_0_30px_rgba(0,161,156,0.45)]" />
      </motion.div>
      <input
        type="range"
        min={5}
        max={95}
        value={pct}
        onChange={(e) => setPct(Number(e.target.value))}
        className="absolute inset-0 z-10 w-full cursor-ew-resize opacity-0"
        aria-label="Comparaison avant après"
      />
      <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-brand-panel/65 px-3 py-1 text-xs text-brand-ink">
        Avant
      </div>
      <div className="pointer-events-none absolute right-4 top-4 rounded-full bg-brand-panel/65 px-3 py-1 text-xs text-brand-ink">
        Après
      </div>
    </div>
  )
}
