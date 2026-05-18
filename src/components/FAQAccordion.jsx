import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <motion.div
            key={item.q}
            layout
            className="glass-panel overflow-hidden rounded-2xl border border-brand-edge/10"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span className="font-display text-lg text-brand-ink">{item.q}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-brand-accent transition-transform ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <motion.div
              initial={false}
              animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="px-5 pb-5 text-sm leading-relaxed text-brand-muted/90">
                {item.a}
              </p>
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}
