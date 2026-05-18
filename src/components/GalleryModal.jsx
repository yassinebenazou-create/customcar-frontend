import { motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import BeforeAfterSlider from '@/components/BeforeAfterSlider.jsx'

export default function GalleryModal({ onClose, items, startIndex = 0 }) {
  const safeIndex = Math.min(Math.max(startIndex, 0), Math.max(items.length - 1, 0))
  const [idx, setIdx] = useState(safeIndex)
  const item = items[idx]

  const onKey = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setIdx((i) => (i + 1) % items.length)
      if (e.key === 'ArrowLeft') setIdx((i) => (i - 1 + items.length) % items.length)
    },
    [items.length, onClose],
  )

  useEffect(() => {
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onKey])

  if (!items.length) return null

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-brand-panel/85 p-2 backdrop-blur-xl sm:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button
        type="button"
        aria-label="Fermer"
        className="absolute right-4 top-4 z-10 rounded-full border border-brand-edge/15 bg-brand-panel/80 p-2 text-brand-ink backdrop-blur hover:border-brand-accent sm:right-6 sm:top-6"
        onClick={onClose}
      >
        <X className="h-5 w-5" />
      </button>
      {item && (
        <motion.div
          layout
          className="relative max-h-[94vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-brand-edge/10 bg-brand-panel shadow-[0_0_120px_rgba(0,161,156,0.15)] sm:rounded-3xl"
          initial={{ scale: 0.94, opacity: 0, y: 16 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 10 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative bg-brand-panel">
              {item.type === 'video' ? (
                <video
                  src={item.media}
                  className="h-full max-h-[48vh] w-full object-cover lg:max-h-[72vh]"
                  controls
                  playsInline
                  autoPlay
                />
              ) : item.before && item.after ? (
                <div className="p-4">
                  <BeforeAfterSlider before={item.before} after={item.after} />
                </div>
              ) : (
                <img
                  src={item.media}
                  alt={item.title}
                  className="h-full max-h-[48vh] w-full object-cover lg:max-h-[72vh]"
                />
              )}
            </div>
            <div className="space-y-4 p-5 sm:p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-brand-accent sm:tracking-[0.35em]">{item.brand}</p>
              <h3 className="font-display text-2xl leading-tight text-brand-ink sm:text-3xl">{item.title}</h3>
              <p className="text-sm leading-relaxed text-brand-muted/90">{item.description}</p>
              <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-edge/15 px-4 py-2 text-sm text-brand-ink hover:border-brand-accent"
                  onClick={() => setIdx((i) => (i - 1 + items.length) % items.length)}
                >
                  <ChevronLeft className="h-4 w-4" /> Précédent
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-edge/15 px-4 py-2 text-sm text-brand-ink hover:border-brand-accent"
                  onClick={() => setIdx((i) => (i + 1) % items.length)}
                >
                  Suivant <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
