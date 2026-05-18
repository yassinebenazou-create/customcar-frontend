import { Link, useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowDownRight,
  CircleCheck,
  Gauge,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from 'lucide-react'
import Seo from '@/components/Seo.jsx'
import AnimatedCounter from '@/components/AnimatedCounter.jsx'
import BeforeAfterSlider from '@/components/BeforeAfterSlider.jsx'
import FAQAccordion from '@/components/FAQAccordion.jsx'
import GlassCard from '@/components/GlassCard.jsx'
import MagneticButton from '@/components/MagneticButton.jsx'
import SoundPreview from '@/components/SoundPreview.jsx'
import { getServiceBySlug, tuningFor } from '@/data/servicesCatalog.js'

const ease = [0.22, 1, 0.36, 1]
const icons = [Gauge, Wrench, ShieldCheck, Sparkles, CircleCheck, Zap]

const SERVICE_THEMES = {
  'systeme-echappement': {
    label: 'Sound engineering',
    mood: 'Titane, valves, fumée légère et signature sonore contrôlée.',
    material: ['Titane brossé', 'Inox 304', 'Embouts carbone', 'Valves pilotées'],
    workflow: ['Audit sonore', 'Choix matériaux', 'Montage aligné', 'Test fuite & son'],
    gallery: ['/services/systeme-echappement.jfif', '/services/carrosserie-accessoires.jfif', '/hero/garage-hero.png'],
  },
  'reprogrammation-moteur': {
    label: 'ECU performance',
    mood: 'Données moteur, couple, réponse pédale et calibration sur mesure.',
    material: ['Lecture ECU', 'Logs route', 'Modes moteur', 'Sauvegarde origine'],
    workflow: ['Lecture véhicule', 'Analyse des logs', 'Calibration', 'Validation route'],
    gallery: ['/services/reprogrammation-moteur.jfif', '/services/diagnostic-avance.jfif', '/services/systeme-echappement.jfif'],
  },
  'detailing-lustrage': {
    label: 'Gloss studio',
    mood: 'Reflets profonds, correction vernis, lumière studio et finition miroir.',
    material: ['Décontamination', 'Polissage LED', 'Protection finale', 'Contrôle reflets'],
    workflow: ['Lavage technique', 'Inspection vernis', 'Correction', 'Protection & photos'],
    gallery: ['/services/detailing-lustrage.jfif', '/services/covering-relooking.jfif', '/hero/garage-hero.png'],
  },
  'diagnostic-avance': {
    label: 'Scanner intelligence',
    mood: 'Interface scanner, données électroniques et décisions techniques claires.',
    material: ['Lecture défauts', 'Tests actuateurs', 'Live data', 'Compte rendu'],
    workflow: ['Symptômes', 'Scan complet', 'Tests ciblés', 'Plan d’action'],
    gallery: ['/services/diagnostic-avance.jfif', '/services/reprogrammation-moteur.jfif', '/services/entretien-vidange.jfif'],
  },
  'covering-relooking': {
    label: 'Material design',
    mood: 'Films premium, carbone, mat profond et lignes tendues.',
    material: ['Film cast', 'Chrome delete', 'PPF ciblé', 'Découpe propre'],
    workflow: ['Choix finition', 'Préparation surface', 'Pose film', 'Contrôle lumière'],
    gallery: ['/services/covering-relooking.jfif', '/services/carrosserie-accessoires.jfif', '/services/detailing-lustrage.jfif'],
  },
  'carrosserie-accessoires': {
    label: 'Aero fitment',
    mood: 'Kits, carbone, alignement carrosserie et détails extérieurs agressifs.',
    material: ['Carbone', 'ABS premium', 'Ajustage', 'Finition peinture'],
    workflow: ['Présentation pièces', 'Pré-ajustage', 'Fixation', 'Alignement final'],
    gallery: ['/services/carrosserie-accessoires.jfif', '/services/covering-relooking.jfif', '/hero/garage-hero.png'],
  },
  'retrofit-interieur': {
    label: 'Cabin upgrade',
    mood: 'Habitacle moderne, matières nobles, éclairage et touches sportives.',
    material: ['Alcantara', 'Nappa', 'Carbone intérieur', 'Éclairage ambiance'],
    workflow: ['Compatibilité', 'Choix matière', 'Installation', 'Contrôle habitacle'],
    gallery: ['/services/retrofit-interieur.jfif', '/services/detailing-lustrage.jfif', '/hero/garage-hero.png'],
  },
  'entretien-vidange': {
    label: 'Preventive care',
    mood: 'Maintenance propre, fluides adaptés et contrôle préventif premium.',
    material: ['Huile adaptée', 'Filtres', 'Fluides', 'Check-list'],
    workflow: ['Contrôle entrée', 'Vidange propre', 'Filtres & fluides', 'Rapport livraison'],
    gallery: ['/services/entretien-vidange.jfif', '/services/diagnostic-avance.jfif', '/hero/garage-hero.png'],
  },
  'protection-ceramique': {
    label: 'Surface armor',
    mood: 'Protection hydrophobe, brillance durable et entretien facilité.',
    material: ['Céramique', 'Traitement jantes', 'Vitres', 'Plastiques'],
    workflow: ['Préparation', 'Correction', 'Pose couches', 'Cure & livraison'],
    gallery: ['/services/detailing-lustrage.jfif', '/services/covering-relooking.jfif', '/hero/garage-hero.png'],
  },
  default: {
    label: 'Custom atelier',
    mood: 'Intervention premium, méthode claire et rendu CUSTOMCAR.',
    material: ['Diagnostic', 'Préparation', 'Installation', 'Contrôle final'],
    workflow: ['Brief client', 'Inspection', 'Intervention', 'Livraison'],
    gallery: ['/hero/garage-hero.png', '/services/diagnostic-avance.jfif', '/services/detailing-lustrage.jfif'],
  },
}

function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 38, scale: 0.98, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.18, margin: '0px 0px -90px 0px' }}
      transition={{ duration: 0.72, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const service = getServiceBySlug(slug)
  const theme = SERVICE_THEMES[service?.slug] || SERVICE_THEMES.default
  const detail = service?.detail || {}
  const tuning = tuningFor(detail.tuningIds || [])
  const gallery = service
    ? [service.image, ...(theme.gallery || [])].filter((src, index, arr) => src && arr.indexOf(src) === index)
    : []
  const stats = [...(detail.stats || []), { label: 'Contrôle', value: 100, suffix: '%' }].slice(0, 3)

  if (!service) {
    return (
      <div className="px-4 py-24 text-center sm:px-5 md:px-8 md:py-32">
        <p className="text-brand-ink">Service introuvable.</p>
        <button type="button" className="mt-4 text-brand-accent" onClick={() => navigate('/services')}>
          Retour aux services
        </button>
      </div>
    )
  }

  return (
    <>
      <Seo title={`${service.title} | CUSTOMCAR`} description={service.excerpt} path={`/services/${service.slug}`} />

      <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.title} className="h-full w-full object-cover opacity-55" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#070707_0%,rgba(7,7,7,0.82)_42%,rgba(7,7,7,0.34)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(0,161,156,0.18),transparent_28%),linear-gradient(180deg,rgba(17,17,17,0.04)_0%,#111111_100%)]" />
        </div>

        <div className="relative z-10 mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-5 md:px-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-brand-accent sm:tracking-[0.55em]"
            >
              {theme.label}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.08, ease }}
              className="mt-5 max-w-4xl font-display text-[clamp(2.7rem,12vw,5.8rem)] leading-[0.9] text-brand-ink"
            >
              {service.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease }}
              className="mt-6 max-w-2xl text-base leading-7 text-brand-silver/86 sm:text-lg"
            >
              {detail.heroSub} {theme.mood}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28, ease }}
              className="mt-8"
            >
              <MagneticButton href="/services" className="bg-brand-accent text-brand-black shadow-glow">
                Voir les services
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.18, ease }}
            className="relative hidden lg:block"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-brand-silver/18 bg-brand-silver/[0.04] p-4 shadow-[0_38px_140px_rgba(0,0,0,0.62)] backdrop-blur-xl">
              <img src={service.image} alt="" className="aspect-[4/5] w-full rounded-[1.5rem] object-cover opacity-90" />
              <div className="absolute inset-4 rounded-[1.5rem] bg-gradient-to-t from-brand-black/72 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 grid gap-3">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: 26 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.38 + index * 0.08, ease }}
                    className="flex items-center justify-between rounded-2xl border border-brand-silver/12 bg-brand-black/62 px-4 py-3 backdrop-blur-xl"
                  >
                    <span className="text-xs uppercase tracking-[0.24em] text-brand-silver/72">{stat.label}</span>
                    <span className="font-display text-2xl text-brand-ink">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix || ''} />
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-bg px-4 py-16 sm:px-5 md:px-8 md:py-24">
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.32em] text-brand-accent">Service explanation</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-brand-ink sm:text-4xl md:text-5xl">
              Une intervention pensée comme une préparation haut de gamme.
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="space-y-5 text-base leading-8 text-brand-muted/90">
            {detail.body?.map((text) => (
              <p key={text}>{text}</p>
            ))}
            <p>
              Nous combinons esthétique, méthode atelier et contrôle final pour livrer un résultat cohérent avec le
              niveau de votre véhicule.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-5 md:px-8 md:py-24">
        <Reveal className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em] text-brand-accent">Technologies</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-brand-ink sm:text-4xl md:text-5xl">
            Features calibrées pour un rendu premium.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {detail.features?.map((feature, index) => {
            const Icon = icons[index % icons.length]
            return (
              <Reveal key={feature} delay={index * 0.06}>
                <div className="group relative min-h-56 overflow-hidden rounded-2xl border border-brand-edge/10 bg-brand-silver/[0.04] p-5 shadow-[0_22px_80px_rgba(0,0,0,0.34)] transition duration-500 hover:-translate-y-2 hover:border-brand-accent/35">
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="h-full w-full bg-[radial-gradient(circle_at_20%_0%,rgba(0,161,156,0.24),transparent_50%)]" />
                  </div>
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-silver/15 bg-brand-black/60 text-brand-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="relative mt-6 font-display text-xl text-brand-ink">{feature}</h3>
                  <p className="relative mt-3 text-sm leading-6 text-brand-muted/82">
                    Étape validée par CUSTOMCAR avec contrôle et finition premium.
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="border-y border-brand-edge/5 bg-brand-panel/35 px-4 py-16 sm:px-5 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.32em] text-brand-accent">Workflow atelier</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-brand-ink sm:text-4xl md:text-5xl">
              Un process clair, du brief à la livraison.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {theme.workflow.map((step, index) => (
              <Reveal key={step} delay={index * 0.07}>
                <div className="relative overflow-hidden rounded-2xl border border-brand-edge/10 bg-brand-black/55 p-6">
                  <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-brand-accent to-transparent" />
                  <p className="font-display text-5xl text-brand-silver/12">0{index + 1}</p>
                  <h3 className="mt-6 font-display text-xl text-brand-ink">{step}</h3>
                  <p className="mt-3 text-sm leading-6 text-brand-muted/78">
                    Contrôle, validation et finition avant de passer à l'étape suivante.
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-5 md:px-8 md:py-24 lg:grid-cols-[1fr_1fr]">
        <Reveal>
          <GlassCard glow className="h-full p-5 sm:p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-brand-accent">Performance</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-brand-ink sm:text-4xl">
              Spécifications et gains.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {detail.specs?.map((spec) => (
                <div key={spec.label} className="rounded-2xl border border-brand-edge/10 bg-brand-black/45 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-brand-muted/60">{spec.label}</p>
                  <p className="mt-3 font-display text-2xl text-brand-ink">{spec.value}</p>
                </div>
              ))}
              {detail.gains?.map((gain) => (
                <div key={gain.label} className="rounded-2xl border border-brand-edge/10 bg-brand-black/45 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-brand-muted/60">{gain.label}</p>
                  <p className="mt-3 font-display text-2xl text-brand-accent">
                    {gain.value}
                    <span className="text-base text-brand-muted">{gain.unit}</span>
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>
        </Reveal>
        <Reveal delay={0.08}>
          <GlassCard className="h-full p-5 sm:p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-brand-accent">Matériaux & optimisation</p>
            <div className="mt-8 grid gap-3">
              {theme.material.map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-brand-edge/10 bg-brand-black/40 px-4 py-3"
                  whileHover={{ x: 6, borderColor: '#00a19c' }}
                  transition={{ duration: 0.3 }}
                >
                  <CircleCheck className="h-5 w-5 shrink-0 text-brand-accent" />
                  <span className="text-sm text-brand-ink">{item}</span>
                  <span className="ml-auto text-xs uppercase tracking-[0.18em] text-brand-muted/45">0{index + 1}</span>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </Reveal>
      </section>

      {tuning.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-5 md:px-8 md:pb-24">
          <Reveal className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.32em] text-brand-accent">Calibration modules</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-brand-ink sm:text-4xl">
              Modes et options de cartographie.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {tuning.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.05}>
                <GlassCard className="h-full">
                  <h3 className="font-display text-xl text-brand-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-brand-muted/84">{item.description}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="relative overflow-hidden bg-brand-bg px-4 py-16 sm:px-5 md:px-8 md:py-24">
        <div className="relative mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.32em] text-brand-accent">Gallery</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-brand-ink sm:text-4xl md:text-5xl">
              Visuels atelier et détails de finition.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {gallery.slice(0, 3).map((src, index) => (
              <Reveal key={src} delay={index * 0.08} className={index === 0 ? 'md:col-span-2 md:row-span-2' : ''}>
                <motion.div
                  className="group relative h-72 overflow-hidden rounded-2xl border border-brand-edge/10 bg-brand-panel shadow-[0_28px_90px_rgba(0,0,0,0.38)] md:h-full md:min-h-72"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  <img src={src} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/78 via-brand-black/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-xs uppercase tracking-[0.28em] text-brand-accent">CUSTOMCAR</p>
                    <p className="mt-2 font-display text-xl text-brand-ink">
                      {index === 0 ? service.title : theme.material[index] || 'Atelier premium'}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {detail.beforeAfter && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-5 md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl text-brand-ink sm:text-4xl">Avant / Après</h2>
            <p className="mt-2 text-sm text-brand-muted/80">Glissez le curseur pour comparer le rendu atelier.</p>
            <div className="mt-8">
              <BeforeAfterSlider before={detail.beforeAfter.before} after={detail.beforeAfter.after} />
            </div>
          </Reveal>
        </section>
      )}

      {detail.sounds && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-5 md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl text-brand-ink sm:text-4xl">Aperçu sonore</h2>
            <p className="mt-2 text-sm text-brand-muted/80">Extraits configurables, idéal pour les systèmes à valves.</p>
            <div className="mt-8">
              <SoundPreview tracks={detail.sounds} />
            </div>
          </Reveal>
        </section>
      )}

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-5 md:px-8 md:py-24">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.32em] text-brand-accent">FAQ</p>
          <h2 className="mt-4 text-center font-display text-3xl text-brand-ink sm:text-4xl">
            Questions fréquentes.
          </h2>
          <div className="mt-10">
            <FAQAccordion items={detail.faq || []} />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-5 md:px-8 md:pb-24">
        <Link className="inline-flex items-center gap-2 text-sm text-brand-accent hover:text-brand-ink" to="/services">
          <ArrowDownRight className="h-4 w-4 rotate-90" />
          Retour aux services
        </Link>
      </section>
    </>
  )
}
