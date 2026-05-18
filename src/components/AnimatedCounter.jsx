import { useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function AnimatedCounter({ value, suffix = '' }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(0)
  const inView = useInView(ref, { once: true, margin: '-15%' })

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()
    let raf
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(value * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}
