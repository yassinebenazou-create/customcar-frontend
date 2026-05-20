import { motion } from 'framer-motion'
import ServiceIcon from '@/components/ServiceIcon.jsx'

export default function ServiceCard({ service, index = 0, onSelect }) {
  const isReprogrammation = service.slug === 'reprogrammation-moteur'
  const content = (
    <>
      <motion.div
        whileHover={{ y: -4, scale: 1.04 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="mx-auto flex h-14 w-14 items-center justify-center sm:h-24 sm:w-24 md:h-28 md:w-28"
      >
        <ServiceIcon
          slug={service.slug}
          className="h-10 w-10 text-neutral-950 transition duration-300 group-hover:text-brand-accent sm:h-16 sm:w-16 md:h-20 md:w-20"
          imageClassName="h-12 w-12 object-contain transition duration-300 group-hover:scale-105 sm:h-20 sm:w-20 md:h-24 md:w-24"
        />
      </motion.div>
      <h3 className="mx-auto mt-1.5 max-w-[10rem] font-display text-[0.9rem] font-semibold leading-tight text-neutral-950 transition duration-300 group-hover:text-brand-accent sm:mt-4 sm:max-w-xs sm:text-2xl">
        {service.title}
      </h3>
    </>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 26, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -70px 0px' }}
      transition={{ duration: 0.58, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
    >
      {isReprogrammation ? (
        <button
          type="button"
          onClick={() => onSelect?.(service)}
          className="group block w-full rounded-3xl outline-none transition focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-4 focus-visible:ring-offset-white"
        >
          {content}
        </button>
      ) : (
        <div className="group">{content}</div>
      )}
    </motion.div>
  )
}
