import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Seo from '@/components/Seo.jsx'

const tuningModulesImage = '/services/tuning-icons/lgs.png'

export default function ReprogrammationShowcase() {
  return (
    <>
      <Seo
        title="Reprogrammation Moteur | Modules performance CUSTOMCAR"
        description="Modules performance pour la reprogrammation moteur CUSTOMCAR : Launch Control, Pops & Bangs, Hard Rev Cut, MultiMap, Start/Stop OFF et No Lift Shift."
        path="/services/reprogrammation-moteur"
      />
      <section className="relative min-h-screen overflow-hidden bg-brand-black px-4 py-12 text-brand-ink sm:px-5 md:px-8 md:py-16">
        <div className="pointer-events-none absolute inset-0 noise-overlay opacity-35" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_22%,rgba(0,161,156,0.16),transparent_30%),radial-gradient(circle_at_82%_28%,rgba(198,198,198,0.08),transparent_34%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/80 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto max-w-7xl"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border border-brand-edge/20 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-brand-muted transition hover:border-brand-accent hover:text-brand-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux services
          </Link>

          <div className="mx-auto mt-10 max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-brand-accent">
              ECU Performance
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.2rem,5.6vw,4.6rem)] font-semibold leading-[0.95] text-white">
              Reprogrammation Moteur
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto mt-12 max-w-6xl"
        >
          <div className="pointer-events-none absolute -inset-x-10 top-10 h-40 bg-brand-accent/10 blur-[90px]" />
          <motion.img
            src={tuningModulesImage}
            alt="Modules performance : Launch Control, Pops & Bangs, No Lift Shift, MultiMap, Hard Rev Cut, Start/Stop OFF"
            className="relative mx-auto block w-full max-w-5xl object-contain drop-shadow-[0_0_45px_rgba(0,161,156,0.16)]"
            loading="eager"
            animate={{ y: [0, -8, 0] }}
            whileHover={{ scale: 1.015 }}
            transition={{
              y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
              scale: { duration: 0.35, ease: 'easeOut' },
            }}
          />
        </motion.div>
      </section>
    </>
  )
}
