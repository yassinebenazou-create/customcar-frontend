import { motion } from 'framer-motion'

export default function FeatureChip({ title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-brand-edge/10 bg-brand-ink/[0.03] p-5"
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="h-full w-full bg-gradient-to-br from-brand-accent/25 via-transparent to-brand-silver/10" />
      </div>
      <div className="relative space-y-2">
        <h4 className="font-display text-lg text-brand-ink">{title}</h4>
        <p className="text-sm leading-relaxed text-brand-muted/90">{description}</p>
      </div>
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl"
        whileHover={{
          boxShadow: '0 0 0 1px color-mix(in srgb, #00a19c 45%, transparent)',
        }}
      />
    </motion.div>
  )
}
