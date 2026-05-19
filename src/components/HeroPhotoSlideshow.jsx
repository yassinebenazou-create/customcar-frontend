import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'

const heroSlides = [
  {
    title: 'REPROGRAMMATION MOTEUR',
    subtitle: 'Cartographie sur mesure, réponse plus vive et performance calibrée avec précision.',
    image: '/hero/slides/reprogrammation-moteur.avif',
    label: 'ECU PERFORMANCE',
    glow: 'from-cyan-400/35 via-blue-500/20 to-orange-500/25',
  },
  {
    title: "SYSTÈME D'ÉCHAPPEMENT",
    subtitle: 'Une signature sonore plus profonde, des finitions propres et une présence plus agressive.',
    image: '/hero/slides/systeme-echappement.avif',
    label: 'SOUND ENGINEERING',
    glow: 'from-orange-500/35 via-cyan-400/20 to-blue-500/25',
  },
  {
    title: 'DIAGNOSTIC AVANCÉ',
    subtitle: 'Analyse électronique, lecture complète et décision technique claire avant intervention.',
    image: '/hero/slides/diagnostic-avance.avif',
    label: 'DIGITAL SCAN',
    glow: 'from-blue-500/35 via-cyan-400/25 to-orange-500/15',
  },
  {
    title: 'COVERING & RELOOKING',
    subtitle: 'Films premium, textures sportives et transformation visuelle avec finition atelier.',
    image: '/hero/slides/covering-relooking.avif',
    label: 'VISUAL UPGRADE',
    glow: 'from-cyan-400/30 via-orange-500/20 to-blue-500/25',
  },
  {
    title: 'CARROSSERIE & ACCESSOIRES',
    subtitle: 'Kits, détails extérieurs et accessoires posés avec alignement net et rendu premium.',
    image: '/hero/slides/carrosserie-accessoires.jpg',
    label: 'BODY DESIGN',
    glow: 'from-orange-500/30 via-blue-500/20 to-cyan-400/25',
  },
]

const titleVariants = {
  hidden: { opacity: 0, y: 18, x: -8, filter: 'blur(12px)' },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -14,
    x: 10,
    filter: 'blur(16px)',
    transition: { duration: 0.34, ease: [0.4, 0, 1, 1] },
  },
}

const titleLineVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
}

const titleWordVariants = {
  hidden: { opacity: 0, y: 22, filter: 'blur(14px)', scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    scale: 1,
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function HeroPhotoSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [swiper, setSwiper] = useState(null)
  const slide = heroSlides[activeIndex]
  const titleWords = slide.title.split(' ')

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#050606]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        speed={1200}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        allowTouchMove
        onSwiper={setSwiper}
        onSlideChange={(instance) => setActiveIndex(instance.realIndex)}
        className="cinematic-hero-swiper absolute inset-0"
      >
        {heroSlides.map((item, index) => (
          <SwiperSlide key={item.title} className="cinematic-hero-slide">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'auto'}
              draggable={false}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(5,6,6,0.9)_0%,rgba(5,6,6,0.62)_36%,rgba(5,6,6,0.22)_68%,rgba(5,6,6,0.72)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(5,6,6,0.8)_0%,rgba(5,6,6,0.16)_44%,rgba(5,6,6,0.9)_100%)]" />
      <div className={`pointer-events-none absolute inset-0 z-10 bg-gradient-to-br ${slide.glow} opacity-65 mix-blend-screen blur-2xl`} />
      <div className="noise-overlay pointer-events-none absolute inset-0 z-20 opacity-40" />

      <div className="hero-glow-orb hero-soft-float pointer-events-none absolute left-[8%] top-[22%] z-20 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl sm:h-44 sm:w-44" />
      <div className="hero-glow-orb hero-soft-float pointer-events-none absolute bottom-[16%] right-[10%] z-20 h-40 w-40 rounded-full bg-orange-500/18 blur-3xl [animation-delay:1s] sm:h-56 sm:w-56" />
      <div className="hero-glow-orb hero-soft-float pointer-events-none absolute right-[34%] top-[12%] z-20 hidden h-48 w-48 rounded-full bg-blue-500/16 blur-3xl [animation-delay:2s] md:block" />
      <div className="hero-light-streak pointer-events-none absolute left-[-35%] top-[26%] z-20 h-px w-[45vw] rotate-[-12deg] bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent opacity-0 shadow-[0_0_34px_rgba(34,211,238,0.7)]" />

      <div className="relative z-30 mx-auto flex min-h-[calc(100svh-4.5rem)] w-full max-w-7xl items-center px-4 py-12 sm:min-h-[calc(100svh-5rem)] sm:px-5 sm:py-14 md:px-8 md:py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.title}
            variants={titleVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-cyan-200 shadow-[0_0_30px_rgba(0,161,156,0.16)] backdrop-blur-md sm:px-3.5 sm:py-2 sm:text-xs sm:tracking-widest"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(251,146,60,0.9)]" />
              {slide.label}
            </motion.div>

            <motion.h1
              variants={titleLineVariants}
              initial="hidden"
              animate="show"
              aria-label={slide.title}
              className="mt-4 max-w-[min(42rem,100%)] break-words font-display text-[clamp(1.55rem,8.4vw,2.7rem)] font-semibold uppercase leading-[1.02] tracking-[0.02em] text-white [text-wrap:balance] drop-shadow-[0_0_34px_rgba(0,0,0,0.72)] sm:mt-5 sm:text-[clamp(2.2rem,5.7vw,4.05rem)] md:max-w-3xl lg:text-[4.55rem] xl:text-[4.9rem]"
            >
              {titleWords.map((word, index) => (
                <motion.span
                  key={`${slide.title}-${word}-${index}`}
                  variants={titleWordVariants}
                  className="mr-[0.22em] inline-block will-change-transform"
                  aria-hidden="true"
                >
                  <span className="hero-title-word inline-block">{word}</span>
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.68, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 max-w-xl text-sm leading-6 text-white/78 sm:mt-5 sm:text-base md:text-lg"
            >
              {slide.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.68, delay: 0.36 }}
              className="mt-6 flex max-w-full items-center gap-2 rounded-2xl border border-white/12 bg-black/24 p-3 shadow-[0_24px_90px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:mt-7 sm:max-w-lg sm:gap-3"
            >
              <span className="h-px flex-1 bg-gradient-to-r from-cyan-300/80 to-transparent" />
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/58 sm:text-xs sm:tracking-widest">
                CUSTOMCAR PERFORMANCE
              </span>
              <span className="h-px flex-1 bg-gradient-to-l from-orange-300/80 to-transparent" />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-5 left-4 right-4 z-40 mx-auto flex max-w-7xl items-center justify-between gap-4 sm:bottom-8 sm:px-1 md:px-5">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/25 p-2 backdrop-blur-xl">
          {heroSlides.map((item, index) => (
            <button
              key={item.title}
              type="button"
              aria-label={`Afficher ${item.title}`}
              onClick={() => swiper?.slideToLoop(index)}
              className={`group relative h-2.5 overflow-hidden rounded-full transition-all duration-500 ${
                activeIndex === index ? 'w-12 bg-white/20' : 'w-2.5 bg-white/35 hover:bg-white/65'
              }`}
            >
              <span
                className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-orange-400 transition-all duration-500 ${
                  activeIndex === index ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <button
            type="button"
            aria-label="Slide précédente"
            onClick={() => swiper?.slidePrev()}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/[0.06] text-white shadow-[0_0_28px_rgba(0,161,156,0.12)] backdrop-blur-xl transition duration-300 hover:border-cyan-300/65 hover:bg-cyan-300/12 hover:shadow-[0_0_34px_rgba(34,211,238,0.28)]"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Slide suivante"
            onClick={() => swiper?.slideNext()}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/[0.06] text-white shadow-[0_0_28px_rgba(251,146,60,0.12)] backdrop-blur-xl transition duration-300 hover:border-orange-300/65 hover:bg-orange-300/12 hover:shadow-[0_0_34px_rgba(251,146,60,0.28)]"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
