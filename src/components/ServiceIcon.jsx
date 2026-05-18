import { Cpu, Gauge, Layers, ShieldCheck, Sparkles, Wrench } from 'lucide-react'

const imageIcons = {
  'reprogrammation-moteur': '/services/icons/reprogrammation-moteur.jpg',
  'systeme-echappement': '/services/icons/systeme-echappement.jpg',
  'carrosserie-accessoires': '/services/icons/carrosserie-accessoires.jpg',
  'retrofit-interieur': '/services/icons/retrofit-interieur.webp',
  'diagnostic-avance': '/services/icons/diagnostic-avance.jpg',
  'detailing-lustrage': '/services/icons/detailing-lustrage.jpg',
  'entretien-vidange': '/services/icons/entretien-vidange.jpg',
  'covering-relooking': '/services/icons/covering-relooking.avif',
  'protection-ceramique': '/services/icons/protection-ceramique.jpg',
}

const serviceIcons = {
  'reprogrammation-moteur': Gauge,
  'systeme-echappement': Wrench,
  'carrosserie-accessoires': Layers,
  'retrofit-interieur': Cpu,
  'diagnostic-avance': Cpu,
  'detailing-lustrage': Sparkles,
  'entretien-vidange': Wrench,
  'covering-relooking': Layers,
  'protection-ceramique': ShieldCheck,
}

export default function ServiceIcon({ slug, className = '', imageClassName = '' }) {
  const image = imageIcons[slug]

  if (image) {
    return <img src={image} alt="" loading="lazy" className={imageClassName || className} />
  }

  const Icon = serviceIcons[slug] || Wrench

  return <Icon className={className} strokeWidth={1.7} />
}
