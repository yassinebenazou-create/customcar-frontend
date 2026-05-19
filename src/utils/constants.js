export const BRAND = {
  name: 'CUSTOMCAR',
  tagline: 'Performance sur mesure, style sans compromis',
  accent: '#00A19C',
  bg: '#111111',
  muted: '#C6C6C6',
}

/** Official cropped glow lockup (PNG) - `public/brand/customcar-logo-nav.png` */
export const BRAND_LOGO = '/brand/customcar-logo-nav.png'
export const BRAND_LOGO_ALT = 'Custom Car'

/** Ancienne vidéo de secours si aucune image n'est définie pour l'accueil. */
export const HERO_VIDEO =
  import.meta.env.VITE_HERO_VIDEO_URL ||
  'https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4'

export const MAP_EMBED_URL =
  import.meta.env.VITE_MAP_EMBED_URL ||
  'https://www.google.com/maps?q=MAGASIN%20N%2048%20HAY%20HASSANI%20LOTISSEMENT%20ESSAFA%20Casablanca%20Morocco&output=embed'

export const MAP_DIRECTIONS_URL =
  import.meta.env.VITE_MAP_DIRECTIONS_URL ||
  'https://www.google.com/maps/dir/?api=1&destination=MAGASIN%20N%2048%20HAY%20HASSANI%20LOTISSEMENT%20ESSAFA%20Casablanca%20Morocco'

export const ADDRESS =
  import.meta.env.VITE_ADDRESS ||
  'MAGASIN N 48 HAY HASSANI LOTISSEMENT ESSAFA, Casablanca, Morocco'

export const EMAIL = import.meta.env.VITE_EMAIL || 'support@customcar.ma'

export const PHONE_DISPLAY = import.meta.env.VITE_PHONE_DISPLAY || '+212 6 61 95 77 51'
export const PHONE_TEL = import.meta.env.VITE_PHONE_TEL || '+212661957751'

export const FIX_DISPLAY = import.meta.env.VITE_FIX_DISPLAY || '+212 5 22 90 06 65'
export const FIX_TEL = import.meta.env.VITE_FIX_TEL || '+212522900665'

export const WHATSAPP_NUMBER =
  import.meta.env.VITE_WHATSAPP_NUMBER || '212661957751'

export const SOCIAL = {
  instagram:
    import.meta.env.VITE_INSTAGRAM_URL ||
    'https://www.instagram.com/customcar.ma?igsh=MWx0c3dxbXcwaHIzNQ%3D%3D&utm_source=qr',
  tiktok: import.meta.env.VITE_TIKTOK_URL || 'https://www.tiktok.com/@customcar.maa?_r=1&_t=ZS-96OMqaVRJk8',
  facebook:
    import.meta.env.VITE_FACEBOOK_URL ||
    'https://www.facebook.com/share/18mzMEgreF/?mibextid=wwXIfr',
}

export const API_BASE = import.meta.env.VITE_API_URL || '/api'

export const BRANDS = [
  'Tous',
  'BMW',
  'Audi',
  'Mercedes',
  'AMG',
  'Porsche',
  'Lamborghini',
  'Ferrari',
]

export const WORKING_HOURS = [
  { day: 'Lun - Ven', hours: '10:30 - 18:30' },
  { day: 'Samedi', hours: '11:00 - 18:00' },
  { day: 'Dimanche', hours: 'Sur rendez-vous' },
]
