import { useEffect } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import Navbar from '@/components/Navbar.jsx'
import Footer from '@/components/Footer.jsx'
import ScrollProgress from '@/components/ScrollProgress.jsx'
import WhatsAppFloat from '@/components/WhatsAppFloat.jsx'

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
      <main className="overflow-x-hidden pt-[4.9rem] sm:pt-[6.25rem] lg:pt-24">
        {outlet}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
