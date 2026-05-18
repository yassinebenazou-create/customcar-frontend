import { useEffect } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from '@/components/Navbar.jsx'
import Footer from '@/components/Footer.jsx'
import ScrollProgress from '@/components/ScrollProgress.jsx'
import WhatsAppFloat from '@/components/WhatsAppFloat.jsx'
import { pageTransition } from '@/animations/variants.js'

export default function MainLayout() {
  const location = useLocation()
  const outlet = useOutlet()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-bg text-brand-muted">
      <ScrollProgress />
      <Navbar />
      <main className="overflow-x-hidden pt-20 sm:pt-24">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
          >
            {outlet}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
