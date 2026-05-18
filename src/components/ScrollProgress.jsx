import { motion } from 'framer-motion'
import { useScrollProgress } from '@/hooks/useScrollProgress.js'

export default function ScrollProgress() {
  const p = useScrollProgress()
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] bg-brand-ink/[0.06]">
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-brand-accent to-brand-silver"
        style={{ scaleX: p, boxShadow: '0 0 24px color-mix(in srgb, #00a19c 55%, transparent)' }}
      />
    </div>
  )
}
