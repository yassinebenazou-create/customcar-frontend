import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import BrandLogo from '@/components/BrandLogo.jsx'
import ThemeToggle from '@/components/ThemeToggle.jsx'
import { BRAND, PHONE_DISPLAY, WHATSAPP_NUMBER } from '@/utils/constants.js'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Nos travaux' },
  { to: '/contact', label: 'Contact' },
]

function WhatsAppMark({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M16.03 4.4A11.43 11.43 0 0 0 6.2 21.66L4.8 27.6l6.06-1.36A11.42 11.42 0 1 0 16.03 4.4Zm0 2.08a9.34 9.34 0 1 1-4.64 17.45l-.35-.2-3.47.78.8-3.38-.23-.36A9.34 9.34 0 0 1 16.03 6.48Zm-4.2 4.76c-.22 0-.56.08-.86.42-.3.34-1.13 1.1-1.13 2.68s1.16 3.1 1.32 3.32c.16.22 2.24 3.6 5.54 4.9 2.74 1.08 3.3.86 3.9.8.6-.06 1.94-.78 2.2-1.54.28-.76.28-1.42.2-1.56-.08-.14-.3-.22-.62-.38-.32-.16-1.92-.94-2.22-1.04-.3-.12-.52-.16-.74.16-.22.32-.86 1.04-1.06 1.26-.2.22-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.96-.86-1.62-1.92-1.8-2.24-.2-.32-.02-.5.14-.66.14-.14.32-.38.48-.56.16-.2.22-.32.32-.54.1-.22.04-.42-.02-.58-.08-.16-.72-1.76-1-2.4-.26-.62-.52-.54-.72-.54h-.62Z"
      />
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- close drawer on navigation
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-brand-edge/50 bg-brand-panel/80 backdrop-blur-xl'
          : 'border-b border-brand-edge/20 bg-brand-black/82 backdrop-blur-xl'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-5 md:px-8 md:py-4">
        <Link to="/" className="group flex shrink-0 items-center gap-3">
          <span className="sr-only">{BRAND.name}</span>
          <BrandLogo size="md" />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-6 text-sm font-medium text-brand-muted lg:flex xl:gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `relative transition hover:text-brand-ink ${isActive ? 'text-brand-ink' : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="navline"
                      className="absolute -bottom-2 left-0 h-0.5 w-full bg-brand-accent shadow-[0_0_16px_rgba(0,161,156,0.65)]"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex xl:gap-2.5">
          <ThemeToggle />
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex h-10 items-center gap-2 rounded-full border border-brand-accent/30 bg-gradient-to-r from-brand-accent/12 via-brand-ink/[0.05] to-brand-ink/[0.03] px-2.5 text-sm font-semibold text-brand-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_26px_rgba(0,161,156,0.1)] transition hover:border-brand-accent/70 hover:bg-brand-accent/15 hover:text-white hover:shadow-[0_0_28px_rgba(0,161,156,0.25)] xl:h-11 xl:px-3"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_18px_rgba(37,211,102,0.34)] transition group-hover:scale-105">
              <WhatsAppMark className="h-4 w-4" />
            </span>
            <span className="leading-none lg:max-xl:hidden">
              <span className="block text-[9px] uppercase tracking-[0.18em] text-brand-accent/90">WhatsApp</span>
              <span className="block text-[13px]">{PHONE_DISPLAY}</span>
            </span>
            <span className="hidden text-[13px] leading-none xl:hidden">
              {PHONE_DISPLAY}
            </span>
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-edge/60 text-brand-ink lg:hidden"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="max-h-[calc(100svh-4.75rem)] overflow-y-auto border-t border-brand-edge/50 bg-brand-panel/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4 sm:px-5">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="rounded-xl px-3 py-3 text-lg text-brand-ink/90 hover:bg-brand-ink/[0.06]"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-xl px-3 py-3 text-lg text-brand-accent hover:bg-brand-ink/[0.06]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white">
                  <WhatsAppMark className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.2em] text-brand-muted">WhatsApp</span>
                  {PHONE_DISPLAY}
                </span>
              </a>
              <div className="flex items-center gap-3 px-3 py-2">
                <span className="text-xs uppercase tracking-[0.2em] text-brand-muted">Thème</span>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
