import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
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
  const [scrolled, setScrolled] = useState(false)
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`

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
          ? 'border-b border-brand-edge/50 bg-brand-panel/82 backdrop-blur-xl'
          : 'border-b border-brand-edge/20 bg-brand-black/86 backdrop-blur-xl'
      }`}
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-3 gap-y-1 px-3 py-2 sm:gap-y-2 sm:px-5 md:px-8 lg:flex-nowrap lg:py-4">
        <Link to="/" className="group flex shrink-0 items-center gap-3">
          <span className="sr-only">{BRAND.name}</span>
          <BrandLogo size="sm" className="h-8 sm:h-10 md:h-14" />
        </Link>

        <nav className="order-3 -mx-1 flex w-full items-center gap-1 overflow-x-auto px-1 pb-0.5 text-[0.64rem] font-semibold text-brand-muted [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-3 sm:text-xs md:gap-5 md:text-sm lg:order-none lg:mx-0 lg:w-auto lg:flex-1 lg:justify-center lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0 xl:gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `relative shrink-0 rounded-full px-2 py-1.5 transition hover:text-brand-ink sm:px-3 sm:py-2 lg:rounded-none lg:px-0 lg:py-0 ${
                  isActive ? 'text-brand-ink' : ''
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="navline"
                      className="absolute bottom-0.5 left-2 right-2 h-0.5 bg-brand-accent shadow-[0_0_16px_rgba(0,161,156,0.65)] sm:bottom-1 sm:left-3 sm:right-3 lg:-bottom-2 lg:left-0 lg:right-0"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 xl:gap-2.5">
          <ThemeToggle />
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex h-8 items-center gap-1.5 rounded-full border border-brand-accent/30 bg-gradient-to-r from-brand-accent/12 via-brand-ink/[0.05] to-brand-ink/[0.03] px-2 text-xs font-semibold text-brand-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_26px_rgba(0,161,156,0.1)] transition hover:border-brand-accent/70 hover:bg-brand-accent/15 hover:text-white hover:shadow-[0_0_28px_rgba(0,161,156,0.25)] sm:h-10 sm:gap-2 sm:px-2.5 xl:h-11 xl:px-3"
          >
            <span className="flex h-[1.375rem] w-[1.375rem] shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_18px_rgba(37,211,102,0.34)] transition group-hover:scale-105 sm:h-7 sm:w-7">
              <WhatsAppMark className="h-3 w-3 sm:h-4 sm:w-4" />
            </span>
            <span className="hidden leading-none sm:block lg:max-xl:hidden">
              <span className="block text-[9px] uppercase tracking-[0.18em] text-brand-accent/90">WhatsApp</span>
              <span className="block text-[11px] sm:text-[13px]">{PHONE_DISPLAY}</span>
            </span>
            <span className="hidden text-[13px] leading-none xl:hidden">{PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>
    </header>
  )
}
