import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import BrandLogo from '@/components/BrandLogo.jsx'

export default function LoaderScreen({ onDone }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2200)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!visible) {
      const t = setTimeout(() => onDone?.(), 500)
      return () => clearTimeout(t)
    }
  }, [visible, onDone])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-brand-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(12px)' }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-60"
            style={{
              background:
                'radial-gradient(circle at 50% 30%, color-mix(in srgb, #00a19c 35%, transparent), transparent 55%)',
            }}
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative text-center"
          >
            <p className="text-xs uppercase tracking-[0.55em] text-brand-accent">Atelier Premium</p>
            <h1 className="sr-only">CUSTOMCAR</h1>
            <BrandLogo size="xl" className="mx-auto mt-6 p-3" />
            <motion.div
              className="mx-auto mt-10 h-1 w-48 overflow-hidden rounded-full bg-brand-ink/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="h-full w-1/3 rounded-full bg-gradient-to-r from-brand-accent to-brand-silver"
                animate={{ x: ['-120%', '240%'] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
