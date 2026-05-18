export default function SoundPreview({ tracks = [] }) {
  const usable = tracks.filter((t) => t.src)
  if (!usable.length) {
    return (
      <div className="rounded-2xl border border-brand-edge/10 bg-brand-ink/[0.03] p-6 text-sm text-brand-muted/80">
        Préparez vos extraits audio (MP3) via variables d’environnement{' '}
        <span className="text-brand-accent">VITE_SOUND_*</span> pour activer les previews.
      </div>
    )
  }
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {usable.map((t) => (
        <div
          key={t.title}
          className="glass-panel space-y-3 rounded-2xl border border-brand-edge/10 p-5"
        >
          <p className="text-sm font-semibold text-brand-ink">{t.title}</p>
          <audio controls className="w-full" src={t.src}>
            Votre navigateur ne supporte pas l’audio.
          </audio>
        </div>
      ))}
    </div>
  )
}
