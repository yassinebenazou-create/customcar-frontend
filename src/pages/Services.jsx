import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, X } from 'lucide-react'
import Seo from '@/components/Seo.jsx'
import ServiceCard from '@/components/ServiceCard.jsx'
import MagneticButton from '@/components/MagneticButton.jsx'
import { SERVICES } from '@/data/servicesCatalog.js'
import { PHONE_DISPLAY, PHONE_TEL } from '@/utils/constants.js'

const REPROGRAMMATION_SHOWCASE_IMAGE = '/services/tuning-icons/lgs.png'

export default function Services() {
  const [selectedService, setSelectedService] = useState(null)
  const showcaseRef = useRef(null)

  function handleServiceSelect(service) {
    if (service.slug !== 'reprogrammation-moteur') return
    setSelectedService(service)
    window.setTimeout(() => {
      showcaseRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 40)
  }

  return (
    <>
      <Seo
        title="Services | CUSTOMCAR"
        description="Reprogrammation moteur, échappement, carrosserie, intérieur, diagnostic, detailing, entretien, covering et céramique."
        path="/services"
      />

      <section className="relative overflow-hidden bg-white px-4 pb-10 pt-10 sm:px-5 md:px-8 md:pb-12 md:pt-14">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              'radial-gradient(circle at 18% 0%, color-mix(in srgb, #00a19c 14%, transparent), transparent 44%)',
          }}
        />
        <div className="relative mx-auto max-w-7xl text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-brand-accent sm:tracking-[0.45em]">
            CUSTOMCAR
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-neutral-950 sm:text-5xl md:text-6xl">
            Services
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-neutral-600 md:text-lg">
            Une sélection claire de prestations premium, présentées simplement pour aller vite vers le bon service.
          </p>
          <a
            href={`tel:${PHONE_TEL}`}
            className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-semibold text-brand-accent hover:text-neutral-950"
          >
            <Phone className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      <section className="bg-white px-4 pb-16 sm:px-5 md:px-8 md:pb-20">
        {selectedService?.slug === 'reprogrammation-moteur' ? (
          <motion.div
            ref={showcaseRef}
            initial={{ opacity: 0, y: 26, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto mb-14 max-w-6xl overflow-hidden rounded-[2rem] border border-brand-accent/20 bg-brand-black p-4 text-white shadow-[0_0_60px_rgba(0,161,156,0.18)] sm:p-6 md:p-8"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(0,161,156,0.2),transparent_34%),radial-gradient(circle_at_82%_22%,rgba(198,198,198,0.1),transparent_36%)]" />
            <div className="relative z-10 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.38em] text-brand-accent">
                  ECU Performance
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
                  Reprogrammation Moteur
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white/70 transition hover:border-brand-accent hover:text-brand-accent"
                aria-label="Fermer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <motion.img
              src={REPROGRAMMATION_SHOWCASE_IMAGE}
              alt="Modules performance : Launch Control, Pops & Bangs, No Lift Shift, MultiMap, Hard Rev Cut, Start/Stop OFF"
              className="relative z-10 mx-auto mt-6 block w-full max-w-5xl object-contain drop-shadow-[0_0_42px_rgba(0,161,156,0.22)]"
              loading="eager"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        ) : null}

        <div className="mx-auto grid max-w-7xl gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              index={index}
              onSelect={handleServiceSelect}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:px-5 md:px-8 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-brand-edge/10 bg-gradient-to-br from-brand-ink/[0.06] to-transparent p-5 text-center sm:p-8 md:p-14"
        >
          <h2 className="font-display text-2xl leading-tight text-brand-ink sm:text-3xl md:text-4xl">
            Avez-vous besoin de l&apos;un de nos services ?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-brand-muted/85">
            Contactez-nous par téléphone ou envoyez un message : on vous répond rapidement avec une orientation claire.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <MagneticButton href="/contact" className="bg-brand-accent text-brand-black">
              Contactez-nous
            </MagneticButton>
          </div>
        </motion.div>
      </section>
    </>
  )
}
