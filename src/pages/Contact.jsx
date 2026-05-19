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

      <section className="px-4 pb-10 pt-7 sm:px-5 md:px-8 md:pb-14 md:pt-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.28em] text-brand-accent sm:tracking-[0.35em]">Contact</p>
          <h1 className="mt-4 font-display text-[clamp(2.1rem,9vw,4rem)] leading-tight text-brand-ink">
            Parlons de votre voiture
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-brand-muted/90 sm:text-lg">
            Notre équipe répond avec précision et rapidité pour vous orienter vers la bonne intervention.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-10 sm:px-5 md:grid-cols-3 md:gap-6 md:px-8 md:pb-14">
        <GlassCard glow className="space-y-3">
          <Phone className="h-5 w-5 text-brand-accent" />
          <p className="text-sm uppercase tracking-[0.25em] text-brand-muted/70">Téléphone</p>
          <a className="break-words font-display text-lg text-brand-ink sm:text-xl" href={`tel:${PHONE_TEL}`}>
            {PHONE_DISPLAY}
          </a>
          <a className="block break-words text-sm text-brand-muted hover:text-brand-accent" href={`tel:${FIX_TEL}`}>
            Fixe : {FIX_DISPLAY}
          </a>
        </GlassCard>
        <GlassCard className="space-y-3">
          <Mail className="h-5 w-5 text-brand-accent" />
          <p className="text-sm uppercase tracking-[0.25em] text-brand-muted/70">Email</p>
          <a className="break-words font-display text-lg text-brand-ink sm:text-xl" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </GlassCard>
        <GlassCard className="space-y-3">
          <MapPin className="h-5 w-5 text-brand-accent" />
          <p className="text-sm uppercase tracking-[0.25em] text-brand-muted/70">Atelier</p>
          <p className="text-lg text-brand-ink">{ADDRESS}</p>
        </GlassCard>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-5 md:px-8 md:pb-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="font-display text-3xl text-brand-ink">Horaires</h2>
            <div className="space-y-3">
              {WORKING_HOURS.map((w) => (
                <div key={w.day} className="flex flex-col gap-1 border-b border-brand-edge/5 py-3 text-sm sm:flex-row sm:justify-between">
                  <span className="text-brand-muted/80">{w.day}</span>
                  <span className="text-brand-ink">{w.hours}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:flex-wrap">
              <MagneticButton
                href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`}
                className="bg-brand-accent text-brand-black"
              >
                WhatsApp
              </MagneticButton>
              <MagneticButton href={SOCIAL.instagram} className="border border-brand-edge/20 bg-brand-ink/[0.06] text-brand-ink">
                Instagram
              </MagneticButton>
              <MagneticButton href={SOCIAL.tiktok} className="border border-brand-edge/20 bg-brand-ink/[0.06] text-brand-ink">
                TikTok
              </MagneticButton>
              <MagneticButton href={SOCIAL.facebook} className="border border-brand-edge/20 bg-brand-ink/[0.06] text-brand-ink">
                Facebook
              </MagneticButton>
            </div>
          </div>
          <LocationMapCard />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-14 sm:px-5 md:px-8 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 34, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-visible rounded-3xl border border-brand-edge/15 bg-brand-panel/70 p-4 shadow-[0_24px_90px_rgba(0,0,0,0.36),0_0_54px_rgba(0,161,156,0.12)] backdrop-blur-2xl sm:p-6 md:p-8"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_12%_0%,rgba(0,161,156,0.22),transparent_35%),radial-gradient(circle_at_92%_100%,rgba(198,198,198,0.1),transparent_34%)]" />
          <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent shadow-glow-sm" />

          <div className="relative z-10">
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-accent">Message rapide</p>
              <h2 className="mt-3 font-display text-2xl leading-tight text-brand-ink sm:text-3xl md:text-4xl">Envoyez votre demande</h2>
            </div>

            <form className="grid gap-4" onSubmit={send}>
              <div className="relative z-20">
                <button
                  type="button"
                  onClick={() => setTypeOpen((open) => !open)}
                  className="flex w-full items-center justify-between border-b border-brand-accent/80 bg-brand-ink/[0.08] px-4 py-3.5 text-left text-base text-brand-ink outline-none transition duration-300 hover:bg-brand-ink/[0.12] focus:border-brand-accent focus:shadow-[0_16px_48px_rgba(0,161,156,0.18)] sm:px-5 sm:py-4 sm:text-lg"
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
                          className="block w-full px-4 py-3 text-left text-base text-brand-ink transition duration-200 hover:bg-brand-accent/15 hover:text-brand-accent sm:px-5 sm:text-lg"
                        >
                          {type}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  placeholder="Titre du message"
                  className="border-b border-brand-edge/40 bg-transparent px-4 py-3.5 text-base text-brand-ink outline-none transition duration-300 placeholder:text-brand-muted/70 focus:border-brand-accent focus:bg-brand-ink/[0.06] sm:px-5 sm:py-4 sm:text-lg"
                  value={form.title}
                  onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="border-b border-brand-edge/40 bg-transparent px-4 py-3.5 text-base text-brand-ink outline-none transition duration-300 placeholder:text-brand-muted/70 focus:border-brand-accent focus:bg-brand-ink/[0.06] sm:px-5 sm:py-4 sm:text-lg"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                />
              </div>

              <textarea
                required
                rows={5}
                placeholder="Message"
                className="min-h-36 resize-y border-b border-brand-accent/80 bg-transparent px-4 py-3.5 text-base text-brand-ink outline-none transition duration-300 placeholder:text-brand-muted/70 focus:bg-brand-ink/[0.06] sm:min-h-40 sm:px-5 sm:py-4 sm:text-lg"
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              />

              <motion.button
                type="submit"
                className="mx-auto inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-accent px-8 py-3.5 text-base font-semibold text-brand-black shadow-[0_18px_55px_rgba(0,161,156,0.28)] transition sm:w-auto sm:min-w-56"
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
