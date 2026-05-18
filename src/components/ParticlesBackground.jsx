import { motion } from 'framer-motion'

const PARTICLES = Array.from({ length: 42 }, (_, i) => ({
  id: i,
  x: ((i * 37) % 100) + (i % 7),
  y: ((i * 53) % 100) + (i % 5),
  s: 1 + (i % 4) * 0.35,
  d: 12 + (i % 9) * 2.2,
}))

export default function ParticlesBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {PARTICLES.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-brand-ink/10 blur-[1px]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.s,
            height: p.s,
          }}
          animate={{ y: [0, -18, 0], opacity: [0.15, 0.45, 0.15] }}
          transition={{
            duration: p.d,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.id * 0.08,
          }}
        />
      ))}
      <div className="noise-overlay absolute inset-0 mix-blend-soft-light" />
    </div>
  )
}
