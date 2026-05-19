import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout.jsx'
import Home from '@/pages/Home.jsx'
import Services from '@/pages/Services.jsx'
import Portfolio from '@/pages/Portfolio.jsx'
import About from '@/pages/About.jsx'
import Contact from '@/pages/Contact.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<Navigate to="/services" replace />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="nos-travaux" element={<Navigate to="/portfolio" replace />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
