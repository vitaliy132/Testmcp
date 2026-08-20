import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { anchors } from '@/config/routes'
import { heroCopy } from '@/features/home/data/copy'
import { HeroReel } from '@/features/home/components/HeroReel'
import { PageContainer } from '@/components/ui/PageContainer'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      <PageContainer>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="hero-reel-frame relative w-full overflow-hidden bg-[#1a1a1a] aspect-[9/16] sm:aspect-square lg:aspect-video"
        >
          <HeroReel />

          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

          <a
            href={anchors.about}
            className="absolute right-4 top-4 z-30 flex max-w-[min(100%,18rem)] items-center gap-3 rounded-full bg-white/95 py-1.5 pl-1.5 pr-5 backdrop-blur transition hover:scale-[1.02] dark:bg-[#1a1a1a]/95 lg:right-8 lg:top-6"
          >
            <img
              src={heroCopy.andy.image}
              alt="Andy"
              decoding="async"
              className="h-12 w-12 rounded-full object-cover lg:h-14 lg:w-14"
            />
            <div className="text-left leading-tight">
              <div className="text-sm font-medium">{heroCopy.andy.title}</div>
              <div className="text-xs text-nd-muted dark:text-white/60">{heroCopy.andy.subtitle}</div>
            </div>
          </a>

          <div className="absolute inset-0 z-20 flex flex-col items-start justify-end p-5 pb-8 sm:justify-center sm:p-8 lg:p-12 xl:p-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 text-sm text-white/85 lg:text-base"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-nd-lime" aria-hidden />
              <span>{heroCopy.eyebrow}</span>
              <span className="animate-wave text-xl" aria-hidden>
                👋
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="hero-overlay-title max-w-[14ch] text-[clamp(2.1rem,6.5vw,5.5rem)] leading-[0.95] tracking-tight text-white"
            >
              {heroCopy.headline[0]}
              <br />
              {heroCopy.headline[1]}
              <br />
              {heroCopy.headline[2]}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-7 flex flex-wrap items-center gap-3 lg:gap-5"
            >
              <a href={anchors.work} className="btn-soft">
                {heroCopy.workCta}
              </a>
              <Link to={anchors.team} className="btn-ghost text-white">
                {heroCopy.teamCta}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </PageContainer>
    </section>
  )
}
