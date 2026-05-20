import { MessageCircle } from 'lucide-react'
import { WHATSAPP_NUMBER } from '@/utils/constants.js'

export default function WhatsAppFloat() {
  const href = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-3 right-3 z-[90] flex h-11 w-11 items-center justify-center rounded-full bg-brand-accent text-brand-black shadow-[0_0_34px_rgba(0,161,156,0.42)] transition hover:scale-105 hover:shadow-[0_0_60px_rgba(0,161,156,0.55)] sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
      aria-label="WhatsApp"
    >
      <MessageCircle className="h-5 w-5 sm:h-7 sm:w-7" />
    </a>
  )
}
