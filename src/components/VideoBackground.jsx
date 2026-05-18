export default function VideoBackground({ src, poster }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        className="h-full w-full scale-105 object-cover"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/55 to-brand-bg" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 20% 20%, color-mix(in srgb, #00a19c 22%, transparent), transparent 55%)',
        }}
      />
    </div>
  )
}
