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

      <section className="relative min-h-[calc(100svh-4.5rem)] overflow-hidden bg-brand-black sm:min-h-[calc(100svh-5rem)]">
        <HeroPhotoSlideshow />
      </section>

      <section className="relative overflow-hidden border-y border-brand-edge/10 bg-brand-black px-4 py-14 sm:px-5 md:min-h-[24rem] md:px-8 md:py-20">
        <video
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.78]"
          src="/videos/customcar-gears-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(5,6,6,0.7),rgba(5,6,6,0.34)_42%,rgba(5,6,6,0.76)),radial-gradient(circle_at_18%_50%,rgba(0,161,156,0.2),transparent_34%),radial-gradient(circle_at_84%_22%,rgba(255,141,52,0.14),transparent_30%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,6,0.64),rgba(5,6,6,0.2)_46%,rgba(5,6,6,0.76))]" />
        <div className="pointer-events-none absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-accent/22 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/80 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center"
        >
          <h2 className="font-display text-[clamp(1.9rem,7vw,3.8rem)] leading-tight text-brand-ink drop-shadow-[0_0_34px_rgba(0,0,0,0.65)]">
            En savoir plus sur <span className="text-brand-accent">CUSTOM</span>CAR
          </h2>
          <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
            <MagneticButton
              href="/services"
              className="w-full justify-center bg-brand-accent text-brand-black shadow-[0_0_45px_rgba(0,161,156,0.5)] hover:shadow-[0_0_90px_rgba(0,161,156,0.65)] sm:w-64"
            >
              Nos Services
            </MagneticButton>
            <MagneticButton
              href="/portfolio"
              className="w-full justify-center border border-white/12 bg-white/[0.08] text-brand-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl hover:border-brand-accent hover:bg-brand-accent/10 sm:w-64"
            >
              Nos Travaux
            </MagneticButton>
          </div>
        </motion.div>
      </section>

      <PartnerMarquee compact />

      <section className="relative overflow-hidden bg-[#333] px-4 py-12 text-center sm:px-5 md:px-8 md:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,161,156,0.16),transparent_38%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto flex max-w-4xl flex-col items-center"
        >
          <h2 className="font-display text-[clamp(1.85rem,7vw,3.4rem)] font-semibold leading-tight text-white">
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
