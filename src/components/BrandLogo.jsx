import { BRAND_LOGO, BRAND_LOGO_ALT } from '@/utils/constants.js'

const sizes = {
  sm: 'h-9 sm:h-10 md:h-12',
  md: 'h-10 sm:h-12 md:h-14',
  lg: 'h-16 sm:h-20 md:h-24',
  xl: 'h-24 sm:h-28 md:h-36',
}

export default function BrandLogo({ size = 'md', className = '' }) {
  return (
    <img
      src={BRAND_LOGO}
      alt={BRAND_LOGO_ALT}
      width={1115}
      height={813}
      className={`w-auto object-contain drop-shadow-[0_0_18px_rgba(0,161,156,0.2)] ${sizes[size]} ${className}`}
      decoding="async"
    />
  )
}
