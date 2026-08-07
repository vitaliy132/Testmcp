import { motion } from 'framer-motion'
import { aiLinks } from '@/config/links'
import { IMG } from '@/data/assets'

const floatImgs = [IMG.studio1, IMG.studio2, IMG.studio3, IMG.studio4, IMG.studio5, IMG.studio6]

export function AiSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        {floatImgs.map((src, i) => {
          const positions = [
            'left-[6%] top-[12%]',
            'right-[8%] top-[8%]',
            'left-[10%] bottom-[18%]',
            'right-[12%] bottom-[14%]',
            'left-[42%] top-[6%]',
            'right-[38%] bottom-[8%]',
          ]
          return (
            <motion.img
              key={src}
              src={src}
              alt=""
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`absolute hidden h-20 w-28 rounded-2xl object-cover shadow-lg sm:block lg:h-28 lg:w-40 ${positions[i]}`}
            />
          )
        })}
      </div>

      <div className="relative mx-auto max-w-[900px] px-5 text-center lg:px-8">
        <p className="mb-3 text-sm font-medium text-nd-muted dark:text-white/55">Don’t believe the hype?</p>
        <h2 className="text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-tight">
          See what AI has
          <br />
          to say about us
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
