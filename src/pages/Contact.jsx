import { ChevronDown, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Seo from '@/components/Seo.jsx'
import GlassCard from '@/components/GlassCard.jsx'
import LocationMapCard from '@/components/LocationMapCard.jsx'
import MagneticButton from '@/components/MagneticButton.jsx'
import {
  ADDRESS,
  EMAIL,
  FIX_DISPLAY,
  FIX_TEL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SOCIAL,
  WHATSAPP_NUMBER,
  WORKING_HOURS,
} from '@/utils/constants.js'
const CONTACT_TYPES = ['Questions ou demandes', 'Demande de service', 'Suggestions', 'Autres']

export default function Contact() {
  const [form, setForm] = useState({ type: '', title: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [typeOpen, setTypeOpen] = useState(false)

  const selectType = (type) => {
    setForm((f) => ({ ...f, type }))
    if (status === 'type') setStatus(null)
    setTypeOpen(false)
  }

  const send = (e) => {
    e.preventDefault()
    if (!form.type) {
      setTypeOpen(true)
      setStatus('type')
      return
    }

    const message = [
      'Bonjour CUSTOMCAR,',
      '',
      `Type de demande : ${form.type}`,
      `Titre : ${form.title}`,
      `Email : ${form.email}`,
      '',
      'Message :',
      form.message,
    ].join('\n')

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
    const opened = window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

    if (!opened) {
      window.location.href = whatsappUrl
      return
    }

    setStatus('ok')
  }

  return (
    <>
      <Seo
        title="Contact | CUSTOMCAR"
        description="Coordonnées, plan, réseaux sociaux et formulaire de contact."
        path="/contact"
      />

      <section className="px-4 pb-4 pt-4 sm:px-5 sm:pb-8 sm:pt-7 md:px-8 md:pb-12 md:pt-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-[0.65rem] uppercase tracking-[0.24em] text-brand-accent sm:text-xs sm:tracking-[0.35em]">Contact</p>
          <h1 className="mt-2 font-display text-[clamp(1.5rem,7.4vw,4rem)] leading-[1.04] text-brand-ink sm:mt-4">
            Parlons de votre voiture
          </h1>
          <p className="mt-2 max-w-2xl text-[0.82rem] leading-5 text-brand-muted/90 sm:mt-4 sm:text-lg sm:leading-7">
            Notre équipe répond avec précision et rapidité pour vous orienter vers la bonne intervention.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-2.5 px-4 pb-4 sm:px-5 sm:gap-4 sm:pb-6 md:grid-cols-3 md:gap-6 md:px-8 md:pb-8">
        <GlassCard glow className="space-y-2.5 sm:space-y-3">
          <Phone className="h-5 w-5 text-brand-accent" />
          <p className="text-[0.68rem] uppercase tracking-[0.22em] text-brand-muted/70 sm:text-sm sm:tracking-[0.25em]">Téléphone</p>
          <a className="break-words font-display text-base text-brand-ink sm:text-xl" href={`tel:${PHONE_TEL}`}>
            {PHONE_DISPLAY}
          </a>
          <a className="block break-words text-xs text-brand-muted hover:text-brand-accent sm:text-sm" href={`tel:${FIX_TEL}`}>
            Fixe : {FIX_DISPLAY}
          </a>
        </GlassCard>
        <GlassCard className="space-y-2.5 sm:space-y-3">
          <Mail className="h-5 w-5 text-brand-accent" />
          <p className="text-[0.68rem] uppercase tracking-[0.22em] text-brand-muted/70 sm:text-sm sm:tracking-[0.25em]">Email</p>
          <a className="break-words font-display text-base text-brand-ink sm:text-xl" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </GlassCard>
        <GlassCard className="col-span-2 space-y-2.5 sm:space-y-3 md:col-span-1">
          <MapPin className="h-5 w-5 text-brand-accent" />
          <p className="text-[0.68rem] uppercase tracking-[0.22em] text-brand-muted/70 sm:text-sm sm:tracking-[0.25em]">Atelier</p>
          <p className="text-sm leading-5 text-brand-ink sm:text-lg sm:leading-7">{ADDRESS}</p>
        </GlassCard>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-3 sm:px-5 sm:pb-5 md:px-8 md:pb-6">
        <div className="space-y-3 sm:space-y-5">
          <div className="max-w-4xl space-y-3 sm:space-y-6">
            <h2 className="font-display text-xl text-brand-ink sm:text-3xl">Horaires</h2>
            <div className="space-y-1 sm:space-y-3">
              {WORKING_HOURS.map((w) => (
                <div key={w.day} className="flex items-center justify-between gap-2 border-b border-brand-edge/5 py-1.5 text-xs sm:py-3 sm:text-sm">
                  <span className="text-brand-muted/80">{w.day}</span>
                  <span className="text-brand-ink">{w.hours}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 pt-1 sm:flex-row sm:flex-wrap sm:gap-3 sm:pt-4">
              <MagneticButton
                href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`}
                className="shrink-0 bg-brand-accent text-brand-black"
              >
                WhatsApp
              </MagneticButton>
              <MagneticButton href={SOCIAL.instagram} className="shrink-0 border border-brand-edge/20 bg-brand-ink/[0.06] text-brand-ink">
                Instagram
              </MagneticButton>
              <MagneticButton href={SOCIAL.tiktok} className="shrink-0 border border-brand-edge/20 bg-brand-ink/[0.06] text-brand-ink">
                TikTok
              </MagneticButton>
              <MagneticButton href={SOCIAL.facebook} className="shrink-0 border border-brand-edge/20 bg-brand-ink/[0.06] text-brand-ink">
                Facebook
              </MagneticButton>
            </div>
          </div>
          <LocationMapCard />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-3 sm:px-5 sm:pb-5 md:px-8 md:pb-6">
        <motion.div
          initial={{ opacity: 0, y: 34, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-visible rounded-2xl border border-brand-edge/15 bg-brand-panel/70 p-4 shadow-[0_24px_90px_rgba(0,0,0,0.36),0_0_54px_rgba(0,161,156,0.12)] backdrop-blur-2xl sm:rounded-3xl sm:p-6 md:p-8"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_12%_0%,rgba(0,161,156,0.22),transparent_35%),radial-gradient(circle_at_92%_100%,rgba(198,198,198,0.1),transparent_34%)]" />
          <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent shadow-glow-sm" />

          <div className="relative z-10">
            <div className="mb-4 sm:mb-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-brand-accent sm:text-xs sm:tracking-[0.35em]">Message rapide</p>
              <h2 className="mt-2 font-display text-xl leading-tight text-brand-ink sm:mt-3 sm:text-3xl md:text-4xl">Envoyez votre demande</h2>
            </div>

            <form className="grid gap-2.5 sm:gap-4" onSubmit={send}>
              <div className="relative z-20">
                <button
                  type="button"
                  onClick={() => setTypeOpen((open) => !open)}
                  className="flex w-full items-center justify-between border-b border-brand-accent/80 bg-brand-ink/[0.08] px-3 py-2.5 text-left text-sm text-brand-ink outline-none transition duration-300 hover:bg-brand-ink/[0.12] focus:border-brand-accent focus:shadow-[0_16px_48px_rgba(0,161,156,0.18)] sm:px-5 sm:py-4 sm:text-lg"
                >
                  <span className={form.type ? 'text-brand-ink' : 'text-brand-muted/70'}>
                    {form.type || 'Sélectionnez un type...'}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-brand-muted transition duration-300 ${typeOpen ? 'rotate-180 text-brand-accent' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {typeOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, filter: 'blur(8px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -8, filter: 'blur(8px)' }}
                      transition={{ duration: 0.22 }}
                      className="absolute left-0 right-0 top-full z-30 border border-brand-edge/20 bg-brand-black/95 shadow-[0_24px_80px_rgba(0,0,0,0.5),0_0_40px_rgba(0,161,156,0.18)] backdrop-blur-xl"
                    >
                      {CONTACT_TYPES.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => selectType(type)}
                          className="block w-full px-3.5 py-2.5 text-left text-sm text-brand-ink transition duration-200 hover:bg-brand-accent/15 hover:text-brand-accent sm:px-5 sm:py-3 sm:text-lg"
                        >
                          {type}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                <input
                  required
                  placeholder="Titre du message"
                  className="min-w-0 border-b border-brand-edge/40 bg-transparent px-3 py-2.5 text-sm text-brand-ink outline-none transition duration-300 placeholder:text-brand-muted/70 focus:border-brand-accent focus:bg-brand-ink/[0.06] sm:px-5 sm:py-4 sm:text-lg"
                  value={form.title}
                  onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="min-w-0 border-b border-brand-edge/40 bg-transparent px-3 py-2.5 text-sm text-brand-ink outline-none transition duration-300 placeholder:text-brand-muted/70 focus:border-brand-accent focus:bg-brand-ink/[0.06] sm:px-5 sm:py-4 sm:text-lg"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                />
              </div>

              <textarea
                required
                rows={5}
                placeholder="Message"
                className="min-h-24 resize-y border-b border-brand-accent/80 bg-transparent px-3 py-2.5 text-sm text-brand-ink outline-none transition duration-300 placeholder:text-brand-muted/70 focus:bg-brand-ink/[0.06] sm:min-h-40 sm:px-5 sm:py-4 sm:text-lg"
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              />

              <motion.button
                type="submit"
                className="mx-auto inline-flex w-auto min-w-44 items-center justify-center gap-2 rounded-full bg-brand-accent px-7 py-2.5 text-sm font-semibold text-brand-black shadow-[0_18px_55px_rgba(0,161,156,0.28)] transition sm:min-w-56 sm:py-3.5 sm:text-base"
                whileHover={{ scale: 1.03, boxShadow: '0 22px 70px rgba(0,161,156,0.36)' }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="h-4 w-4" />
                Envoyer
              </motion.button>
            </form>

            <AnimatePresence>
              {status === 'ok' && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-center text-sm text-brand-accent"
                >
                  WhatsApp est ouvert avec votre message.
                </motion.p>
              )}
              {status === 'type' && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-center text-sm text-brand-accent"
                >
                  Choisissez un type de demande avant d'envoyer le message.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>
    </>
  )
}
