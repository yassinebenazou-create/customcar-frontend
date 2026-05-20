import { motion } from 'framer-motion'
import { useMagnetic } from '@/hooks/useMagnetic.js'

export default function MagneticButton({
  children,
  className = '',
  href,
  type = 'button',
  onClick,
  ...rest
}) {
  const { ref, style, onMove, onLeave } = useMagnetic(0.25)
  const cls = `relative inline-flex max-w-full items-center justify-center overflow-hidden rounded-full px-4 py-2 text-center text-[0.76rem] font-semibold leading-tight tracking-wide transition-shadow duration-300 sm:px-8 sm:py-3 sm:text-sm ${className}`

  const shine = (
    <motion.span
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      style={{
        background:
          'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)',
        translateX: '-120%',
      }}
    />
  )

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        style={style}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={`group ${cls}`}
        whileTap={{ scale: 0.98 }}
        {...rest}
      >
        {shine}
        <span className="relative z-10">{children}</span>
      </motion.a>
    )
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      style={style}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`group ${cls}`}
      whileTap={{ scale: 0.98 }}
      {...rest}
    >
      {shine}
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}
