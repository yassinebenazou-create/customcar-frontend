import { Link } from 'react-router-dom'
import { MapPin, Phone } from 'lucide-react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import {
  BRAND,
  MAP_DIRECTIONS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SOCIAL,
  WHATSAPP_NUMBER,
  WORKING_HOURS,
} from '@/utils/constants.js'

function InstagramGradientIcon({ className = '' }) {
  return (
    <FaInstagram
      className={className}
      style={{
        background: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    />
  )
}

export default function Footer() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`

  return (
    <footer className="mt-0 bg-[#333] px-3 py-4 text-white sm:px-5 sm:py-8 md:px-8 md:py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-3 gap-3 sm:gap-7 md:gap-10">
        <div>
          <h2 className="font-display text-[0.82rem] font-semibold text-brand-ink sm:text-2xl">Liens utiles</h2>
          <nav className="mt-2 flex flex-col items-start gap-1.5 text-[0.68rem] leading-tight sm:mt-4 sm:gap-2.5 sm:text-lg">
            <Link className="underline underline-offset-4 transition hover:text-brand-accent" to="/services">
              Nos services
            </Link>
            <Link className="underline underline-offset-4 transition hover:text-brand-accent" to="/portfolio">
              Nos travaux
            </Link>
            <Link className="underline underline-offset-4 transition hover:text-brand-accent" to="/contact">
              Contact
            </Link>
          </nav>
        </div>

        <div>
          <h2 className="font-display text-[0.82rem] font-semibold text-brand-ink sm:text-2xl">Horaires</h2>
          <div className="mt-2 space-y-1 text-[0.68rem] leading-tight text-white sm:mt-4 sm:text-lg">
            {WORKING_HOURS.map((item) => (
              <p key={item.day}>
                {item.day}: <span>{item.hours}</span>
              </p>
            ))}
          </div>

          <div className="mt-3 flex items-center gap-2.5 text-brand-accent sm:mt-7 sm:gap-5">
            <a href={SOCIAL.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="transition hover:scale-110">
              <FaFacebook className="h-5 w-5 text-[#1877F2] sm:h-9 sm:w-9" />
            </a>
            <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="transition hover:scale-110">
              <InstagramGradientIcon className="h-5 w-5 sm:h-9 sm:w-9" />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="transition hover:scale-110">
              <FaWhatsapp className="h-5 w-5 text-[#25D366] sm:h-10 sm:w-10" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-display text-[0.82rem] font-semibold text-brand-ink sm:text-2xl">Contact</h2>
          <div className="mt-2 space-y-1.5 text-[0.68rem] leading-tight sm:mt-4 sm:space-y-3 sm:text-lg">
            <a className="flex items-center gap-3 transition hover:text-brand-accent" href={`tel:${PHONE_TEL}`}>
              <Phone className="h-4 w-4 shrink-0 text-brand-accent sm:h-7 sm:w-7" />
              {PHONE_DISPLAY}
            </a>
            <a className="flex items-center gap-3 transition hover:text-brand-accent" href={SOCIAL.instagram} target="_blank" rel="noreferrer">
              <InstagramGradientIcon className="h-4 w-4 shrink-0 sm:h-7 sm:w-7" />
              customcar.ma
            </a>
          </div>

          <a
            href={MAP_DIRECTIONS_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex w-full max-w-xs items-center justify-center gap-1 rounded-full bg-brand-accent px-2 py-2 text-[0.62rem] font-medium text-brand-black transition hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(0,161,156,0.35)] sm:mt-7 sm:gap-2 sm:px-6 sm:py-3 sm:text-lg"
          >
            <MapPin className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
            Localisation
          </a>
        </div>
      </div>

      <div className="mx-auto mt-4 max-w-7xl border-t border-white/10 pt-3 text-center text-[0.68rem] text-white/60 sm:mt-9 sm:pt-5 sm:text-sm">
        Copyright {new Date().getFullYear()} CUSTOM<span className="text-brand-accent">CAR</span>. Tous droits reserves.
      </div>
    </footer>
  )
}
