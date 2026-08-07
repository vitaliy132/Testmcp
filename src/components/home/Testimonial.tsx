import { motion } from 'framer-motion'
import { IMG } from '@/data/assets'

export function Testimonial() {
  return (
    <section id="testimonials" className="scroll-mt-28 py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-[2rem]"
        >
          <img
            src={IMG.stoneletters}
            alt="Stoneletters testimonial"
            className="aspect-[16/10] w-full object-cover sm:aspect-[21/9]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-14">
            <p className="max-w-[18ch] text-[clamp(1.6rem,4vw,3.4rem)] leading-[1.05] tracking-tight text-white">
              Northern Digital created something better than I ever could have imagined
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <img src={IMG.hannah} alt="Hannah Wessel" className="h-12 w-12 rounded-full object-cover" />
              <div className="text-white">
                <div className="font-medium">Hannah Wessel</div>
                <div className="text-sm text-white/65">Co-Founder, Stoneletters</div>
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
      </div>
    </section>
  )
}
