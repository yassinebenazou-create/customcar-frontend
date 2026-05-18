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
    <footer className="mt-20 bg-[#333] px-4 py-12 text-white sm:px-5 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3 md:gap-16">
        <div>
          <h2 className="font-display text-2xl font-semibold text-brand-ink">Liens utiles</h2>
          <nav className="mt-6 flex flex-col items-start gap-4 text-lg">
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
          <h2 className="font-display text-2xl font-semibold text-brand-ink">Horaires de travail</h2>
          <div className="mt-6 space-y-1 text-lg leading-tight text-white">
            {WORKING_HOURS.map((item) => (
              <p key={item.day}>
                {item.day}: <span>{item.hours}</span>
              </p>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-5 text-brand-accent">
            <a href={SOCIAL.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="transition hover:scale-110">
              <FaFacebook className="h-9 w-9 text-[#1877F2]" />
            </a>
            <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="transition hover:scale-110">
              <InstagramGradientIcon className="h-9 w-9" />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="transition hover:scale-110">
              <FaWhatsapp className="h-10 w-10 text-[#25D366]" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl font-semibold text-brand-ink">Contact</h2>
          <div className="mt-6 space-y-4 text-lg">
            <a className="flex items-center gap-3 transition hover:text-brand-accent" href={`tel:${PHONE_TEL}`}>
              <Phone className="h-7 w-7 text-brand-accent" />
              {PHONE_DISPLAY}
            </a>
            <a className="flex items-center gap-3 transition hover:text-brand-accent" href={SOCIAL.instagram} target="_blank" rel="noreferrer">
              <InstagramGradientIcon className="h-7 w-7" />
              customcar.ma
            </a>
          </div>

          <a
            href={MAP_DIRECTIONS_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-brand-accent px-8 py-4 text-lg font-medium text-brand-black transition hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(0,161,156,0.35)]"
          >
            <MapPin className="h-5 w-5" />
            Localisation
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-5 text-center text-sm text-white/60">
        © {new Date().getFullYear()} {BRAND.name}. Tous droits réservés.
      </div>
    </footer>
  )
}
