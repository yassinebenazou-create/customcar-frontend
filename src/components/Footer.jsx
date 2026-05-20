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
    <footer className="mt-6 bg-[#333] px-4 py-6 text-white sm:px-5 sm:py-8 md:mt-12 md:px-8 md:py-12">
      <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 sm:gap-7 md:grid-cols-3 md:gap-10">
        <div>
          <h2 className="font-display text-lg font-semibold text-brand-ink sm:text-2xl">Liens utiles</h2>
          <nav className="mt-3 flex flex-col items-start gap-2 text-sm sm:mt-4 sm:gap-2.5 sm:text-lg">
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
          <h2 className="font-display text-lg font-semibold text-brand-ink sm:text-2xl">Horaires de travail</h2>
          <div className="mt-3 space-y-1 text-sm leading-tight text-white sm:mt-4 sm:text-lg">
            {WORKING_HOURS.map((item) => (
              <p key={item.day}>
                {item.day}: <span>{item.hours}</span>
              </p>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-4 text-brand-accent sm:mt-7 sm:gap-5">
            <a href={SOCIAL.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="transition hover:scale-110">
              <FaFacebook className="h-7 w-7 text-[#1877F2] sm:h-9 sm:w-9" />
            </a>
            <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="transition hover:scale-110">
              <InstagramGradientIcon className="h-7 w-7 sm:h-9 sm:w-9" />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="transition hover:scale-110">
              <FaWhatsapp className="h-8 w-8 text-[#25D366] sm:h-10 sm:w-10" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-brand-ink sm:text-2xl">Contact</h2>
          <div className="mt-3 space-y-2.5 text-sm sm:mt-4 sm:space-y-3 sm:text-lg">
            <a className="flex items-center gap-3 transition hover:text-brand-accent" href={`tel:${PHONE_TEL}`}>
              <Phone className="h-5 w-5 text-brand-accent sm:h-7 sm:w-7" />
              {PHONE_DISPLAY}
            </a>
            <a className="flex items-center gap-3 transition hover:text-brand-accent" href={SOCIAL.instagram} target="_blank" rel="noreferrer">
              <InstagramGradientIcon className="h-5 w-5 sm:h-7 sm:w-7" />
              customcar.ma
            </a>
          </div>

          <a
            href={MAP_DIRECTIONS_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-brand-accent px-5 py-2.5 text-sm font-medium text-brand-black transition hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(0,161,156,0.35)] sm:mt-7 sm:px-6 sm:py-3 sm:text-lg"
          >
            <MapPin className="h-5 w-5" />
            Localisation
          </a>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-7xl border-t border-white/10 pt-4 text-center text-xs text-white/60 sm:mt-9 sm:pt-5 sm:text-sm">
        Copyright {new Date().getFullYear()} CUSTOM<span className="text-brand-accent">CAR</span>. Tous droits reserves.
      </div>
    </footer>
  )
}
