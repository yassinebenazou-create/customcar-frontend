/** PNGs in `public/services/` — filenames match your APR-style assets. */
export function serviceImage(filename) {
  return `/services/${encodeURIComponent(filename)}`
}

/** Used if a PNG is missing locally */
export const SERVICE_IMAGE_FALLBACK =
  'https://images.unsplash.com/photo-1617814076365-e41592f95ca4?auto=format&fit=crop&w=1200&q=80'
