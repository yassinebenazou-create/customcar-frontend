import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import Seo from '@/components/Seo.jsx'
import GlassCard from '@/components/GlassCard.jsx'
import AnimatedCounter from '@/components/AnimatedCounter.jsx'

const milestones = [
  { year: '2016', title: 'Origine', text: 'Premiers réglages moteur, essais route et culture de la donnée.' },
  { year: '2019', title: 'Atelier', text: 'Ouverture d’un espace premium avec outillage professionnel.' },
  { year: '2022', title: 'Signature', text: 'Identité CUSTOMCAR : précision, lumière, performance et finition.' },
  { year: '2026', title: 'Évolution', text: 'Expérience client plus fluide, présence digitale et suivi de projets.' },
]

export default function About() {
  return (
    <>
      <Seo
        title="À propos | CUSTOMCAR"
        description="Histoire, équipe et philosophie : un garage automobile premium au Maroc."
        path="/about"
      />

      <section className="relative overflow-hidden px-4 pb-16 pt-8 sm:px-5 md:px-8 md:pb-20 md:pt-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              'radial-gradient(circle at 70% 0%, color-mix(in srgb, #00a19c 30%, transparent), transparent 55%)',
          }}
        />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.28em] text-brand-accent sm:tracking-[0.35em]">Manifeste</p>
          <h1 className="mt-4 font-display text-5xl text-brand-ink md:text-6xl">L’obsession du détail</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-brand-muted/90 sm:mt-6 sm:text-lg">
            CUSTOMCAR est né d’une conviction : une voiture doit être plus qu’un moyen de transport.
            Elle doit avoir une présence, une réponse et une finition qui correspondent à son propriétaire.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-5 md:px-8 md:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4 text-brand-muted/90">
            <h2 className="font-display text-3xl text-brand-ink">Notre histoire</h2>
            <p>
              De la cartographie moteur à la carrosserie, nous avons construit un atelier capable
              d’accompagner un projet complet : performance, esthétique, entretien et personnalisation.
            </p>
            <p>
              Chaque véhicule est traité comme une pièce unique : diagnostic, conseil, intervention
              propre, contrôle final et remise claire au client.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <img
              className="h-56 w-full rounded-2xl object-cover sm:h-64 sm:rounded-3xl"
              src="https://images.unsplash.com/photo-1486262711209-f2271367aaa4?auto=format&fit=crop&w=1200&q=80"
              alt="Atelier automobile"
              loading="lazy"
            />
            <img
              className="h-56 w-full rounded-2xl object-cover sm:mt-12 sm:h-64 sm:rounded-3xl"
              src="https://images.unsplash.com/photo-1617818484432-f7ca70a13295?auto=format&fit=crop&w=1200&q=80"
              alt="Détail intérieur"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-brand-edge/5 bg-brand-panel/35 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-5 md:grid-cols-4 md:gap-6 md:px-8">
          {[
            { label: 'Projets livrés', value: 850, suffix: '+' },
            { label: 'Heures de réglage', value: 12000, suffix: '+' },
            { label: 'Marques suivies', value: 18, suffix: '' },
            { label: 'Satisfaction', value: 99, suffix: '%' },
          ].map((s) => (
            <GlassCard key={s.label} glow className="text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-accent">{s.label}</p>
              <p className="mt-3 font-display text-4xl text-brand-ink">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-5 md:px-8 md:py-20">
        <h2 className="font-display text-3xl text-brand-ink">Équipe</h2>
        <p className="mt-3 max-w-2xl text-sm text-brand-muted/85">
          Techniciens moteur, carrossiers, spécialistes detailing et conseil client : une équipe
          compacte, exigeante et orientée résultat.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 md:mt-10 md:grid-cols-3 md:gap-6">
          {['Spécialiste moteur', 'Direction artistique', 'Responsable detailing'].map((role) => (
            <GlassCard key={role}>
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-b from-brand-ink/10 to-transparent" />
              <p className="mt-4 font-display text-xl text-brand-ink">{role}</p>
              <p className="text-sm text-brand-muted/80">Équipe CUSTOMCAR</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-5 md:px-8 md:py-20">
        <h2 className="font-display text-3xl text-brand-ink">Parcours</h2>
        <div className="relative mt-10 space-y-10 border-l border-brand-edge/10 pl-8">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="relative"
            >
              <span className="absolute -left-[39px] top-1 h-3 w-3 rounded-full bg-brand-accent shadow-[0_0_20px_rgba(0,161,156,0.8)]" />
              <p className="text-xs uppercase tracking-[0.35em] text-brand-accent">{m.year}</p>
              <h3 className="mt-2 font-display text-2xl text-brand-ink">{m.title}</h3>
              <p className="mt-2 text-sm text-brand-muted/85">{m.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-5 md:px-8 md:pb-24">
        <h2 className="font-display text-3xl text-brand-ink">Pourquoi nous choisir</h2>
        <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-3 md:gap-6">
          {[
            {
              t: 'Méthode claire',
              d: 'Chaque modification est expliquée, contrôlée et validée avant livraison.',
            },
            {
              t: 'Finition premium',
              d: 'Lignes propres, matériaux soignés, détails alignés et rendu maîtrisé.',
            },
            {
              t: 'Confidentialité',
              d: 'Garage privé, rendez-vous, discrétion et floutage média sur demande.',
            },
          ].map((c) => (
            <GlassCard key={c.t} glow>
              <h3 className="font-display text-xl text-brand-ink">{c.t}</h3>
              <p className="mt-3 text-sm text-brand-muted/85">{c.d}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section id="design-proposal" className="mx-auto max-w-6xl px-4 pb-16 sm:px-5 md:px-8 md:pb-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-brand-accent">Identité</p>
            <h2 className="mt-3 font-display text-2xl leading-tight text-brand-ink sm:text-3xl md:text-4xl">Proposition de design</h2>
            <p className="mt-2 max-w-2xl text-sm text-brand-muted/85">
              Document officiel CUSTOMCAR : charte, direction artistique et applications web.
            </p>
          </div>
          <a
            href="/brand/custom-car-design-proposal.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-brand-edge/15 bg-brand-ink/[0.06] px-5 py-2.5 text-sm font-semibold text-brand-ink transition hover:border-brand-accent hover:text-brand-accent"
          >
            <Download className="h-4 w-4" />
            Télécharger le PDF
          </a>
        </div>
        <GlassCard className="mt-8 overflow-hidden p-0" glow>
          <div className="border-b border-brand-edge/10 bg-brand-panel/55 px-4 py-3 text-xs text-brand-muted/80">
            Aperçu intégré : utilisez le lecteur PDF de votre navigateur.
          </div>
          <iframe
            title="CUSTOMCAR - proposition de design"
            src="/brand/custom-car-design-proposal.pdf"
            className="h-[min(85vh,900px)] w-full bg-brand-bg"
          />
        </GlassCard>
      </section>
    </>
  )
}
