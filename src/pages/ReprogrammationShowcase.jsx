import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Seo from '@/components/Seo.jsx'

const modules = [
  {
    title: 'Launch Control',
    image: '/services/tuning-icons/launch-control.png',
  },
  {
    title: 'Pops & Bangs',
    image: '/services/tuning-icons/pops-bangs.png',
  },
  {
    title: 'No Lift Shift',
    image: '/services/tuning-icons/no-lift-shift.png',
  },
  {
    title: 'MultiMap',
    image: '/services/tuning-icons/multimap.png',
  },
  {
    title: 'Hard Rev Cut',
    image: '/services/tuning-icons/hard-rev-cut.png',
  },
  {
    title: 'Start/Stop OFF',
    image: '/services/tuning-icons/start-stop-off.png',
  },
]

const itemVariants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(10px)' },
  show: (index) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.58, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

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

        <div className="relative z-10 mx-auto mt-14 grid max-w-6xl gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              animate="show"
              className="group text-center"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                whileHover={{ y: -10, scale: 1.06 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="mx-auto flex h-44 w-44 items-center justify-center rounded-full sm:h-52 sm:w-52"
              >
                <img
                  src={module.image}
                  alt={module.title}
                  className="h-full w-full rounded-full object-cover drop-shadow-[0_0_28px_rgba(0,161,156,0.22)] transition duration-500 group-hover:drop-shadow-[0_0_48px_rgba(0,161,156,0.55)]"
                  loading={index < 3 ? 'eager' : 'lazy'}
                />
              </motion.div>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight text-white transition duration-300 group-hover:text-brand-accent sm:text-3xl">
                {module.title}
              </h2>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
