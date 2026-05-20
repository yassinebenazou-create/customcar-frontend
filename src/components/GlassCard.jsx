import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '', glow = false, revealDelay = 0 }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 34, scale: 0.97, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.22, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.7, delay: revealDelay, ease: [0.22, 1, 0.36, 1] }}
      className={`glass-panel group relative overflow-hidden rounded-2xl p-4 transition duration-500 hover:border-brand-accent/45 hover:shadow-[0_0_0_1px_rgba(0,161,156,0.22),0_22px_75px_rgba(0,0,0,0.42),0_0_58px_rgba(0,161,156,0.18)] sm:p-6 ${className}`}
      whileHover={{
        boxShadow: glow
          ? '0 0 0 1px color-mix(in srgb, #00a19c 48%, transparent), 0 24px 90px color-mix(in srgb, #111111 68%, transparent), 0 0 70px color-mix(in srgb, #00a19c 22%, transparent)'
          : '0 0 0 1px color-mix(in srgb, #00a19c 28%, transparent), 0 18px 65px color-mix(in srgb, #111111 55%, transparent), 0 0 42px color-mix(in srgb, #00a19c 14%, transparent)',
      }}
    >
      <div className="pointer-events-none absolute -inset-20 opacity-0 blur-3xl transition duration-700 group-hover:opacity-60">
        <div className="h-full w-full bg-[radial-gradient(circle_at_30%_10%,rgba(0,161,156,0.32),transparent_42%),radial-gradient(circle_at_90%_80%,rgba(198,198,198,0.12),transparent_36%)]" />
      </div>
      <div className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition duration-700 group-hover:left-full group-hover:opacity-100" />
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-24 opacity-40 blur-3xl"
        style={{
          background:
            'radial-gradient(circle at 30% 20%, color-mix(in srgb, #00a19c 35%, transparent), transparent 55%)',
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
