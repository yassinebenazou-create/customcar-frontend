import { motion } from 'framer-motion'
import Seo from '@/components/Seo.jsx'
import MagneticButton from '@/components/MagneticButton.jsx'
import HeroPhotoSlideshow from '@/components/HeroPhotoSlideshow.jsx'
import PartnerMarquee from '@/components/PartnerMarquee.jsx'
import { staggerContainer } from '@/animations/variants.js'

export default function Home() {
  return (
    <>
      <Seo
        title="CUSTOMCAR | Atelier auto premium"
        description="Garage premium : reprogrammation, entretien, covering, detailing, échappement et préparation automobile."
        path="/"
      />

      <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-brand-black">
        <HeroPhotoSlideshow />
      </section>

      <section className="relative overflow-hidden border-y border-brand-edge/10 bg-brand-black px-4 py-14 sm:px-5 md:px-8 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(0,161,156,0.1),transparent_35%,rgba(198,198,198,0.04))]" />
        <div className="pointer-events-none absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-brand-accent/18 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/70 to-transparent" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center"
        >
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-tight text-brand-ink">
            En savoir plus sur <span className="text-brand-accent">CUSTOM</span>CAR
          </h2>
          <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton
              href="/services"
              className="w-full justify-center bg-brand-accent text-brand-black shadow-[0_0_40px_rgba(0,161,156,0.45)] hover:shadow-[0_0_80px_rgba(0,161,156,0.55)] sm:w-64"
            >
              Nos Services
            </MagneticButton>
            <MagneticButton
              href="/portfolio"
              className="w-full justify-center border border-brand-edge/20 bg-brand-ink/[0.07] text-brand-ink hover:border-brand-accent hover:bg-brand-accent/10 sm:w-64"
            >
              Nos Travaux
            </MagneticButton>
          </div>
        </motion.div>
      </section>

      <PartnerMarquee compact />

      <section className="relative overflow-hidden bg-[#444] px-4 py-14 text-center sm:px-5 md:px-8 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,161,156,0.16),transparent_38%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto flex max-w-5xl flex-col items-center"
        >
          <h2 className="font-display text-[clamp(2rem,5vw,4.2rem)] font-semibold leading-tight text-white">
            Êtes-vous intéressés par nos services?
          </h2>
          <MagneticButton
            href="/contact"
            className="mt-8 w-full justify-center bg-brand-accent text-brand-black shadow-[0_0_40px_rgba(0,161,156,0.35)] hover:shadow-[0_0_75px_rgba(0,161,156,0.5)] sm:w-72"
          >
            Contactez-nous
          </MagneticButton>
        </motion.div>
      </section>
    </>
  )
}
