import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote } from 'lucide-react'

const FALLBACK = [
  {
    name: 'Yassine M.',
    role: 'BMW M3 Competition',
    quote:
      'Cartographie stage 2 + downpipe : la voiture est un missile civilisé. Accompagnement premium du début à la fin.',
  },
  {
    name: 'Imane K.',
    role: 'Mercedes C43',
    quote:
      'Covering satin + détailing céramique : finition showroom. L’équipe CUSTOMCAR maîtrise le détail.',
  },
  {
    name: 'Omar L.',
    role: 'Audi RS3',
    quote:
      'Diagnostic avancé ultra pro, pops & bangs dosés à la perfection. Je recommande sans hésiter.',
  },
]

export default function TestimonialSlider({ items = [] }) {
  const data = useMemo(
    () => (items.length ? items : FALLBACK),
    [items],
  )
  const [i, setI] = useState(0)
  const active = data[i % data.length]

  return (
    <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-brand-edge/10 bg-gradient-to-br from-brand-ink/[0.06] to-transparent p-10 md:p-14">
      <Quote className="absolute right-8 top-8 h-10 w-10 text-brand-accent/35" />
      <AnimatePresence mode="wait">
        <motion.div
          key={active.name}
          initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -12, filter: 'blur(6px)' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <p className="text-xl leading-relaxed text-brand-ink md:text-2xl">“{active.quote}”</p>
          <div>
            <p className="font-semibold text-brand-ink">{active.name}</p>
            <p className="text-sm text-brand-muted/80">{active.role}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="mt-10 flex items-center justify-between gap-4">
        <div className="flex gap-2">
          {data.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Témoignage ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${idx === i ? 'w-10 bg-brand-accent' : 'w-2 bg-brand-ink/20 hover:bg-brand-ink/40'}`}
              onClick={() => setI(idx)}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="rounded-full border border-brand-edge/15 px-4 py-2 text-sm text-brand-ink hover:border-brand-accent"
            onClick={() => setI((v) => (v - 1 + data.length) % data.length)}
          >
            Précédent
          </button>
          <button
            type="button"
            className="rounded-full border border-brand-edge/15 px-4 py-2 text-sm text-brand-ink hover:border-brand-accent"
            onClick={() => setI((v) => (v + 1) % data.length)}
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  )
}
