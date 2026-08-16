import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { anchors, routes } from '@/config/links'
import { brand } from '@/config/brand'

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr] lg:gap-16">
          <p className="text-sm font-medium text-nd-muted dark:text-white/55">Who are we?</p>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="max-w-[22ch] text-[clamp(1.6rem,3.2vw,2.7rem)] leading-[1.15] tracking-tight"
            >
              An independent{' '}
              <a href={anchors.services} className="underline decoration-nd-lime decoration-4 underline-offset-4">
                web design
              </a>{' '}
              and{' '}
              <a href={anchors.services} className="underline decoration-nd-lime decoration-4 underline-offset-4">
                branding agency
              </a>{' '}
              in Leeds set up in 2010 who care, build relationships, have industry experience, and win awards.
            </motion.h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={routes.about} className="btn-lime">
                About {brand.name}
              </Link>
              <Link to={anchors.team} className="btn-soft">
                Meet the Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
