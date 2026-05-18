import { useMotionValue, useSpring } from 'framer-motion'
import { useCallback, useRef } from 'react'

export function useMagnetic(strength = 0.35) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 })
  const sy = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 })

  const onMove = useCallback(
    (e) => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const dx = e.clientX - (r.left + r.width / 2)
      const dy = e.clientY - (r.top + r.height / 2)
      x.set(dx * strength)
      y.set(dy * strength)
    },
    [strength, x, y],
  )

  const onLeave = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  return { ref, style: { x: sx, y: sy }, onMove, onLeave }
}
