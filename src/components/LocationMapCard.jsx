import { motion } from 'framer-motion'
import { MapPin, X } from 'lucide-react'
import { useState } from 'react'
import {
  ADDRESS,
  BRAND_LOGO,
  MAP_DIRECTIONS_URL,
  MAP_EMBED_URL,
} from '@/utils/constants.js'

export default function LocationMapCard() {
  const [showInfo, setShowInfo] = useState(true)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative min-h-[340px] overflow-hidden rounded-3xl border border-brand-edge/10 bg-brand-black shadow-[0_30px_120px_rgba(0,0,0,0.55)] sm:min-h-[390px]"
    >
      <iframe
        title="Carte CUSTOMCAR"
        src={MAP_EMBED_URL}
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_46%_56%,rgba(0,161,156,0.10),transparent_24%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.75, y: 16 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-[68%] z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center sm:top-[66%]"
      >
        {showInfo && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.35 }}
            className="absolute bottom-[4.75rem] left-1/2 w-[min(16.5rem,calc(100vw-2rem))] -translate-x-1/2 rounded-2xl bg-white px-4 py-3 text-[#111111] shadow-[0_14px_42px_rgba(0,0,0,0.28)] sm:w-72"
          >
            <button
              type="button"
              onClick={() => setShowInfo(false)}
              className="absolute right-3 top-3 rounded-full p-1 text-[#111111]/55 transition hover:bg-black/5 hover:text-[#111111]"
              aria-label="Masquer la carte info"
            >
              <X className="h-4 w-4" />
            </button>
            <p className="pr-8 font-display text-lg leading-tight text-[#111111] sm:text-xl">
              CUSTOMCAR
              <span className="block">Casablanca</span>
            </p>
            <span className="mt-2 block max-w-[14rem] text-xs leading-5 text-[#111111]/62 sm:max-w-[15rem]">
              {ADDRESS}
            </span>
            <a
              href={MAP_DIRECTIONS_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-sm font-semibold text-[#1a5cff] underline underline-offset-2"
            >
              Directions
            </a>
            <span className="absolute -bottom-2 left-1/2 h-5 w-5 -translate-x-1/2 rotate-45 bg-white" />
          </motion.div>
        )}

        <a
          href={MAP_DIRECTIONS_URL}
          target="_blank"
          rel="noreferrer"
          className="group relative flex flex-col items-center"
          aria-label="Directions vers CUSTOMCAR"
        >
          <span className="absolute h-24 w-24 rounded-full bg-brand-accent/20 blur-2xl transition group-hover:bg-brand-accent/34" />
          <span className="relative flex h-16 w-16 items-center justify-center">
            <img
              src={BRAND_LOGO}
              alt="CUSTOMCAR"
              className="h-14 w-14 object-contain drop-shadow-[0_0_2px_rgba(255,255,255,1)] [filter:drop-shadow(0_0_1px_#fff)_drop-shadow(0_0_5px_rgba(255,255,255,0.9))_drop-shadow(0_0_16px_rgba(0,161,156,0.8))]"
            />
          </span>
          <MapPin className="-mt-2 h-9 w-9 fill-brand-accent text-brand-accent drop-shadow-[0_0_18px_rgba(0,161,156,0.65)]" />
        </a>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-white/82 via-white/42 to-transparent p-5">
        <p className="text-xs uppercase tracking-[0.28em] text-brand-accent">Localisation</p>
        <p className="mt-2 max-w-xl text-sm font-semibold leading-6 text-[#333333]">{ADDRESS}</p>
      </div>
    </motion.div>
  )
}
