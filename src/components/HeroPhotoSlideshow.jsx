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
    position: 'center center',
    mobilePosition: '55% center',
    label: 'ECU PERFORMANCE',
    glow: 'from-cyan-400/35 via-blue-500/20 to-orange-500/25',
  },
  {
    title: "SYSTÈME D'ÉCHAPPEMENT",
    subtitle: 'Une signature sonore plus profonde, des finitions propres et une présence plus agressive.',
    image: '/hero/slides/systeme-echappement.avif',
    position: 'center center',
    mobilePosition: '62% center',
    label: 'SOUND ENGINEERING',
    glow: 'from-orange-500/35 via-cyan-400/20 to-blue-500/25',
  },
  {
    title: 'DIAGNOSTIC AVANCÉ',
    subtitle: 'Analyse électronique, lecture complète et décision technique claire avant intervention.',
    image: '/hero/slides/diagnostic-avance.avif',
    position: 'center center',
    mobilePosition: '58% center',
    label: 'DIGITAL SCAN',
    glow: 'from-blue-500/35 via-cyan-400/25 to-orange-500/15',
  },
  {
    title: 'COVERING & RELOOKING',
    subtitle: 'Films premium, textures sportives et transformation visuelle avec finition atelier.',
    image: '/hero/slides/covering-relooking.avif',
    position: 'center center',
    mobilePosition: '50% center',
    label: 'VISUAL UPGRADE',
    glow: 'from-cyan-400/30 via-orange-500/20 to-blue-500/25',
  },
  {
    title: 'CARROSSERIE & ACCESSOIRES',
    subtitle: 'Kits, détails extérieurs et accessoires posés avec alignement net et rendu premium.',
    image: '/hero/slides/carrosserie-accessoires.jpg',
    position: 'center center',
    mobilePosition: '58% center',
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
              style={{ '--hero-position': item.position, '--hero-mobile-position': item.mobilePosition }}
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'auto'}
              decoding={index === 0 ? 'sync' : 'async'}
              sizes="100vw"
              draggable={false}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(5,6,6,0.9)_0%,rgba(5,6,6,0.64)_34%,rgba(5,6,6,0.28)_68%,rgba(5,6,6,0.72)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(5,6,6,0.74)_0%,rgba(5,6,6,0.14)_42%,rgba(5,6,6,0.94)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-2/3 bg-[radial-gradient(ellipse_at_24%_70%,rgba(0,161,156,0.2),transparent_48%),linear-gradient(180deg,transparent,rgba(5,6,6,0.78)_64%,rgba(5,6,6,0.96))] sm:hidden" />
      <div className="noise-overlay pointer-events-none absolute inset-0 z-20 opacity-20" />

      <div className="hero-glow-orb hero-soft-float pointer-events-none absolute left-[8%] top-[22%] z-20 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl sm:h-44 sm:w-44" />
      <div className="hero-glow-orb hero-soft-float pointer-events-none absolute bottom-[16%] right-[10%] z-20 h-40 w-40 rounded-full bg-orange-500/18 blur-3xl [animation-delay:1s] sm:h-56 sm:w-56" />
      <div className="hero-glow-orb hero-soft-float pointer-events-none absolute right-[34%] top-[12%] z-20 hidden h-48 w-48 rounded-full bg-blue-500/16 blur-3xl [animation-delay:2s] md:block" />
      <div className="hero-light-streak pointer-events-none absolute left-[-35%] top-[26%] z-20 h-px w-[45vw] rotate-[-12deg] bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent opacity-0 shadow-[0_0_34px_rgba(34,211,238,0.7)]" />

      <div className="relative z-30 mx-auto flex min-h-[54svh] w-full max-w-7xl items-end px-5 pb-12 pt-8 sm:min-h-[68svh] sm:items-center sm:px-5 sm:py-14 md:px-8 md:py-16 lg:min-h-[calc(100svh-6rem)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.title}
            variants={titleVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="relative max-w-[35rem] sm:max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="inline-flex max-w-full items-center gap-2 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-cyan-200 drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] sm:text-xs sm:tracking-widest"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(251,146,60,0.9)]" />
              {slide.label}
            </motion.div>

            <motion.h1
              variants={titleLineVariants}
              initial="hidden"
              animate="show"
              aria-label={slide.title}
              className="mt-2.5 max-w-[min(35rem,100%)] break-words font-display text-[clamp(1.65rem,8.4vw,2.6rem)] font-semibold uppercase leading-[0.94] tracking-[0.01em] text-white [text-wrap:balance] drop-shadow-[0_8px_36px_rgba(0,0,0,0.8)] sm:mt-5 sm:text-[clamp(2.2rem,5.7vw,4.05rem)] md:max-w-3xl lg:text-[4.55rem] xl:text-[4.9rem]"
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
              className="mt-2 max-w-md text-[0.78rem] leading-5 text-white/82 drop-shadow-[0_4px_18px_rgba(0,0,0,0.85)] sm:mt-5 sm:max-w-xl sm:text-base sm:leading-6 md:text-lg"
            >
              {slide.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.68, delay: 0.36 }}
              className="mt-4 flex max-w-md items-center gap-2.5 sm:mt-7 sm:max-w-lg sm:gap-3"
            >
              <span className="h-px w-14 bg-gradient-to-r from-cyan-300 to-transparent shadow-[0_0_18px_rgba(34,211,238,0.7)] sm:w-24" />
              <span className="text-[0.56rem] font-bold uppercase tracking-[0.2em] text-white/58 drop-shadow-[0_4px_16px_rgba(0,0,0,0.75)] sm:text-xs sm:tracking-widest">
                CUSTOMCAR PERFORMANCE
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-orange-300/80 to-transparent shadow-[0_0_18px_rgba(251,146,60,0.35)]" />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-2.5 left-4 right-14 z-40 mx-auto flex max-w-7xl items-center justify-between gap-2 sm:bottom-8 sm:right-4 sm:gap-3 sm:px-1 md:px-5">
        <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/30 p-1.5 shadow-[0_16px_50px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:gap-2 sm:p-2">
          {heroSlides.map((item, index) => (
            <button
              key={item.title}
              type="button"
              aria-label={`Afficher ${item.title}`}
              onClick={() => swiper?.slideToLoop(index)}
              className={`group relative h-2.5 overflow-hidden rounded-full transition-all duration-500 ${
                activeIndex === index ? 'w-9 bg-white/20 sm:w-12' : 'w-2.5 bg-white/35 hover:bg-white/65'
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

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Slide précédente"
            onClick={() => swiper?.slidePrev()}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/14 bg-white/[0.08] text-white shadow-[0_0_28px_rgba(0,161,156,0.12)] backdrop-blur-xl transition duration-300 hover:border-cyan-300/65 hover:bg-cyan-300/12 hover:shadow-[0_0_34px_rgba(34,211,238,0.28)] sm:h-11 sm:w-11"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <button
            type="button"
            aria-label="Slide suivante"
            onClick={() => swiper?.slideNext()}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/14 bg-white/[0.08] text-white shadow-[0_0_28px_rgba(251,146,60,0.12)] backdrop-blur-xl transition duration-300 hover:border-orange-300/65 hover:bg-orange-300/12 hover:shadow-[0_0_34px_rgba(251,146,60,0.28)] sm:h-11 sm:w-11"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
