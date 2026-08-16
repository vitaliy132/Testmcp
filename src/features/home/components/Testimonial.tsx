import { motion } from 'framer-motion'
import { testimonialCopy } from '@/features/home/data/copy'
import { PageContainer } from '@/components/ui/PageContainer'

export function Testimonial() {
  return (
    <section id="home-testimonial" className="scroll-mt-28 py-16 lg:py-24">
      <PageContainer>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-[2rem]"
        >
          <img
            src={testimonialCopy.image}
            alt={testimonialCopy.imageAlt}
            className="aspect-[16/10] w-full object-cover sm:aspect-[21/9]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-14">
            <p className="max-w-[18ch] text-[clamp(1.6rem,4vw,3.4rem)] leading-[1.05] tracking-tight text-white">
              {testimonialCopy.quote}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <img
                src={testimonialCopy.portrait}
                alt={testimonialCopy.portraitAlt}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="text-white">
                <div className="font-medium">{testimonialCopy.name}</div>
                <div className="text-sm text-white/65">{testimonialCopy.role}</div>
              </div>
              <button
                type="button"
                className="ml-auto grid h-12 w-12 place-items-center rounded-full bg-white text-nd-ink"
                aria-label="Play testimonial"
              >
                ▶
              </button>
            </div>
          </div>
        </motion.div>
      </PageContainer>
    </section>
  )
}
