import { motion } from 'framer-motion'

const BRANDS = [
  { name: 'Mercedes-Benz', image: '/brand/showcase-mercedes.png' },
  { name: 'BMW', image: '/brand/showcase-bmw.png' },
  { name: 'Audi', image: '/brand/showcase-audi.png' },
  { name: 'Porsche', image: '/brand/showcase-porsche.png' },
  { name: 'Land Rover', image: '/brand/showcase-land-rover.png' },
]

export default function PartnerMarquee({ compact = false }) {
  const marqueeBrands = [...BRANDS, ...BRANDS, ...BRANDS]

  const sectionSpace = compact
    ? 'px-4 py-9 sm:px-5 md:px-8 md:py-12'
    : 'px-4 py-16 sm:px-5 md:px-8 md:py-28'
  const headingSpace = compact ? 'mx-auto mb-6 max-w-3xl text-center' : 'mx-auto mb-10 max-w-5xl text-center md:mb-14'
  const titleSize = compact
    ? 'mt-3 font-display text-2xl leading-tight text-brand-silver sm:text-3xl md:text-4xl'
    : 'mt-4 font-display text-3xl leading-tight text-brand-silver sm:text-5xl md:text-7xl'
  const shellSpace = compact
    ? 'rounded-[1.5rem] px-0 py-5 md:rounded-[2rem] md:py-7'
    : 'rounded-[1.75rem] px-0 py-7 md:rounded-[2.25rem] md:py-10'
  const cardSize = compact
    ? 'h-32 w-44 sm:h-44 sm:w-60 md:h-52 md:w-72'
    : 'h-48 w-60 sm:h-60 sm:w-80 md:h-72 md:w-96'
  const logoSize = compact
    ? 'h-20 max-h-20 w-32 sm:h-28 sm:max-h-28 sm:w-44 md:h-32 md:max-h-32 md:w-52'
    : 'h-28 max-h-28 w-44 sm:h-40 sm:max-h-40 sm:w-60 md:h-48 md:max-h-48 md:w-72'

  return (
    <section className={`relative isolate overflow-hidden bg-[#060707] ${sectionSpace}`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(0,161,156,0.24),transparent_26%),radial-gradient(circle_at_86%_78%,rgba(0,161,156,0.18),transparent_32%),linear-gradient(180deg,#080909_0%,#050606_48%,#111111_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:72px_72px]" />
      <span className="brand-light-streak pointer-events-none absolute left-[-20%] top-14 h-px w-[46rem] rotate-[-8deg] bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-55 blur-[1px]" />
      <span className="brand-light-streak pointer-events-none absolute bottom-12 right-[-16%] h-px w-[42rem] rotate-[5deg] bg-gradient-to-r from-transparent via-brand-accent/80 to-transparent opacity-45 blur-[1px] [animation-delay:2.2s]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className={headingSpace}
        >
          <p className="font-display text-xs font-semibold uppercase tracking-[0.38em] text-brand-accent sm:tracking-[0.55em]">
            Marques premium
          </p>
          <h2 className={titleSize}>Nous travaillons sur les grandes marques</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className={`group relative overflow-hidden border border-brand-silver/20 bg-white/[0.035] shadow-[0_38px_160px_rgba(0,0,0,0.78),inset_0_1px_0_rgba(255,255,255,0.13)] backdrop-blur-2xl ${shellSpace}`}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(0,161,156,0.18),transparent_34%),radial-gradient(circle_at_88%_100%,rgba(0,161,156,0.20),transparent_34%),linear-gradient(90deg,rgba(255,255,255,0.04),transparent_32%,rgba(255,255,255,0.035))]" />
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand-silver/40 to-transparent" />
          <div className="pointer-events-none absolute left-8 top-0 h-px w-64 bg-brand-accent shadow-[0_0_34px_rgba(0,161,156,0.95)]" />
          <div className="pointer-events-none absolute bottom-0 right-10 h-px w-72 bg-brand-accent shadow-[0_0_38px_rgba(0,161,156,0.95)]" />
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-[#060707] via-[#060707]/72 to-transparent sm:w-28 md:w-40" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-[#060707] via-[#060707]/72 to-transparent sm:w-28 md:w-40" />

          <div
            className="premium-logo-marquee relative z-10 flex w-max items-center gap-5 px-4 will-change-transform group-hover:[animation-play-state:paused] sm:gap-7 sm:px-6 md:gap-9"
            aria-label="Mercedes-Benz, BMW, Audi, Porsche, Land Rover"
          >
            {marqueeBrands.map((brand, index) => (
              <motion.article
                key={`${brand.name}-${index}`}
                aria-hidden={index >= BRANDS.length}
                className={`group/brand relative shrink-0 overflow-hidden rounded-2xl bg-[linear-gradient(135deg,rgba(0,161,156,0.62),rgba(255,255,255,0.16)_32%,rgba(0,161,156,0.10)_62%,rgba(255,255,255,0.22))] p-px shadow-[0_28px_100px_rgba(0,0,0,0.52)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(0,161,156,0.28),0_34px_110px_rgba(0,0,0,0.62)] ${cardSize}`}
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 5.6,
                  delay: (index % BRANDS.length) * 0.18,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[calc(1rem-1px)] border border-white/5 bg-[#101312]/78 px-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.11)] backdrop-blur-xl">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.09),transparent_35%),radial-gradient(circle_at_50%_86%,rgba(0,161,156,0.16),transparent_44%)]" />
                  <div className="pointer-events-none absolute -inset-x-12 top-0 h-20 -translate-y-10 rotate-6 bg-gradient-to-r from-transparent via-white/14 to-transparent opacity-0 blur-md transition duration-700 group-hover/brand:opacity-100" />
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className={`relative object-contain opacity-95 brightness-110 contrast-110 saturate-110 transition duration-500 group-hover/brand:scale-110 group-hover/brand:opacity-100 group-hover/brand:drop-shadow-[0_0_32px_rgba(0,161,156,0.55)] ${logoSize}`}
                    draggable={false}
                  />
                  <span className="relative mt-3 font-display text-xs font-semibold uppercase tracking-[0.24em] text-brand-silver/78 transition duration-500 group-hover/brand:text-white sm:text-sm">
                    {brand.name}
                  </span>
                  <span className="relative mt-3 h-px w-16 bg-brand-accent/70 shadow-[0_0_18px_rgba(0,161,156,0.8)] transition duration-500 group-hover/brand:w-24" />
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
