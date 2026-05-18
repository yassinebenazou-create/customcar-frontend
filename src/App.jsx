import { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout.jsx'
import Contact from '@/pages/Contact.jsx'

const Home = lazy(() => import('@/pages/Home.jsx'))
const Services = lazy(() => import('@/pages/Services.jsx'))
const ReprogrammationShowcase = lazy(() => import('@/pages/ReprogrammationShowcase.jsx'))
const Portfolio = lazy(() => import('@/pages/Portfolio.jsx'))
const About = lazy(() => import('@/pages/About.jsx'))

export default function App() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-brand-bg text-brand-muted">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-accent">
            Chargement
          </span>
        </div>
      }
    >
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/reprogrammation-moteur" element={<ReprogrammationShowcase />} />
          <Route path="services/:slug" element={<Navigate to="/services" replace />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="nos-travaux" element={<Navigate to="/portfolio" replace />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
