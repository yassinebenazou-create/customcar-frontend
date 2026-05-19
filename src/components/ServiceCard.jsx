import { motion } from 'framer-motion'
import ServiceIcon from '@/components/ServiceIcon.jsx'

export default function ServiceCard({ service, index = 0, onSelect }) {
  const isReprogrammation = service.slug === 'reprogrammation-moteur'
  const content = (
    <>
      <motion.div
        whileHover={{ y: -4, scale: 1.04 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="mx-auto flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28"
      >
        <ServiceIcon
          slug={service.slug}
          className="h-16 w-16 text-neutral-950 transition duration-300 group-hover:text-brand-accent sm:h-20 sm:w-20"
          imageClassName="h-20 w-20 object-contain transition duration-300 group-hover:scale-105 sm:h-24 sm:w-24"
        />
      </motion.div>
      <h3 className="mx-auto mt-4 max-w-xs font-display text-xl font-semibold leading-tight text-neutral-950 transition duration-300 group-hover:text-brand-accent sm:text-2xl">
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
