import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import Seo from '@/components/Seo.jsx'
import ServiceCard from '@/components/ServiceCard.jsx'
import MagneticButton from '@/components/MagneticButton.jsx'
import { SERVICES } from '@/data/servicesCatalog.js'
import { PHONE_DISPLAY, PHONE_TEL } from '@/utils/constants.js'

export default function Services() {
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
        <div className="mx-auto grid max-w-7xl gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
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
