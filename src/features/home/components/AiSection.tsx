import { motion } from 'framer-motion'
import { aiLinks } from '@/config/external'
import { aiCopy } from '@/features/home/data/copy'
import { IMG } from '@/data/assets'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'

/** Positions and crops match the MadeByShape homepage AI block. */
const floatImgs = [
  {
    src: IMG.studio1,
    alt: 'Studio session',
    className: 'top-[62%] -left-10 hidden w-24 md:block md:w-40 xl:w-56',
    aspect: 'aspect-[3/2]',
  },
  {
    src: IMG.studio2,
    alt: 'Designers collaborating',
    className: 'left-3 top-8 w-16 sm:left-4 sm:top-10 sm:w-20 md:w-52 lg:left-20 lg:top-20 xl:w-72',
    aspect: 'aspect-[3/2]',
  },
  {
    src: IMG.studio3,
    alt: 'Creative review',
    className: 'bottom-0 left-1/3 hidden w-24 lg:block xl:w-40',
    aspect: 'aspect-[3/2]',
  },
  {
    src: IMG.studio4,
    alt: 'Studio portrait',
    className: 'right-1/3 bottom-10 hidden w-28 md:block md:w-40 lg:top-0 lg:right-40 lg:bottom-auto xl:w-56',
    aspect: 'aspect-[3/2]',
  },
  {
    src: IMG.studio5,
    alt: 'Team in the studio',
    className: 'right-3 bottom-0 w-16 sm:right-4 sm:w-20 md:w-40 lg:right-10 xl:w-52',
    aspect: 'aspect-[3/2]',
  },
  {
    src: IMG.studio6,
    alt: 'Meeting room',
    className: 'right-4 -top-8 hidden w-20 md:block md:w-28 lg:top-auto lg:right-56 lg:bottom-20 xl:w-36',
    aspect: 'aspect-[2/3]',
  },
] as const

export function AiSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-36">
      <div className="pointer-events-none absolute inset-0">
        {floatImgs.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className={`absolute overflow-hidden rounded-xl bg-nd-soft shadow-lg lg:rounded-2xl dark:bg-[#1a1a1a] ${img.className}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              className={`w-full object-cover ${img.aspect}`}
            />
          </motion.div>
        ))}
      </div>

      <div className="relative mx-auto flex min-h-[22rem] max-w-[900px] flex-col items-center justify-center px-5 text-center lg:min-h-[28rem] lg:px-8">
        <SectionEyebrow className="mb-3 inline-flex items-center gap-2">{aiCopy.eyebrow}</SectionEyebrow>
        <h2 className="text-[clamp(2rem,5vw,4.4rem)] leading-[1.02] tracking-tight">
          {aiCopy.heading[0]}
          <br />
          {aiCopy.heading[1]}
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {aiLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="btn-soft">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
