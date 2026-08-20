import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { anchors } from '@/config/routes'
import { heroCopy } from '@/features/home/data/copy'
import { HeroReel } from '@/features/home/components/HeroReel'
import { PageContainer } from '@/components/ui/PageContainer'
import { CornerFillet } from '@/components/ui/CornerFillet'
import { ArrowIcon, GooeyLink } from '@/components/ui/GooeyButton'

const pageFill = 'text-white dark:text-[#121212]'
const filletClass = `pointer-events-none absolute z-30 h-10 w-10 ${pageFill}`
const blobEase = [0.16, 1, 0.3, 1] as const

function MeetTheTeamLink() {
  return (
    <Link
      to={anchors.team}
      className="group relative inline-flex items-center py-1 pr-3 text-nd-ink dark:text-white"
    >
      <span className="relative top-px font-medium leading-tight">{heroCopy.teamCta}</span>
      <span className="relative ml-1 h-3 w-3 overflow-hidden">
        <span className="absolute inset-0 transition-transform duration-300 ease-out group-hover:-translate-y-full group-hover:translate-x-full">
          <ArrowIcon />
        </span>
        <span className="absolute inset-0 translate-y-full -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0">
          <ArrowIcon />
        </span>
      </span>
    </Link>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      <PageContainer>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.04, ease: blobEase }}
            className="px-2 lg:px-3 xl:px-4"
          >
            <div className="hero-reel-frame relative aspect-[4/5] w-full overflow-hidden bg-[#1a1a1a] md:aspect-[16/10] lg:aspect-video">
              <HeroReel />

              <a
                href={anchors.about}
                className="absolute top-5 right-5 z-30 flex max-w-[min(calc(100%-4rem),16rem)] items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-3 text-nd-ink shadow-sm transition hover:scale-[1.02] sm:top-6 sm:right-6 sm:max-w-[min(calc(100%-3rem),18rem)] sm:gap-3 sm:pr-5 lg:top-8 lg:right-10"
              >
                <img
                  src={heroCopy.andy.image}
                  alt="Andy"
                  decoding="async"
                  className="h-10 w-10 shrink-0 rounded-full object-cover sm:h-12 sm:w-12 lg:h-14 lg:w-14"
                />
                <div className="min-w-0 text-left leading-tight">
                  <div className="text-sm font-medium">{heroCopy.andy.title}</div>
                  <div className="mt-0.5 hidden text-pretty text-xs text-nd-muted sm:block">
                    {heroCopy.andy.subtitle}
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          <div className="pointer-events-none absolute top-0 left-0 z-20 flex w-auto max-w-[calc(100%-7rem)] flex-col items-start px-2 pb-8 sm:max-w-[min(100%,42rem)] lg:left-8 lg:px-3 xl:left-16 xl:px-4">
            <div className="pointer-events-auto relative flex w-auto flex-col items-start">
              <div className="absolute top-0 left-5 z-10 h-40 w-20 -translate-x-full bg-white lg:w-44 dark:bg-[#121212]" />
              <CornerFillet className={`${filletClass} top-40 left-3 -mt-px -translate-x-full`} />
              <CornerFillet
                fill="top-left"
                className={`${filletClass} top-40 -left-16 -mt-px xl:-left-36`}
              />

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.12, ease: blobEase }}
                className="relative flex w-auto flex-col items-start"
              >
                <div className="hero-copy-goo relative flex w-auto flex-col items-start">
                  <div className="relative w-full bg-white dark:bg-[#121212]">
                    <div className="relative z-20 mt-px inline-flex items-center gap-2 px-3 pt-1 pb-2 text-sm font-light text-nd-muted lg:px-6 lg:text-base dark:text-white/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-nd-muted dark:bg-white/50" aria-hidden />
                      <span>{heroCopy.eyebrow}</span>
                      <span className="animate-wave text-2xl lg:text-3xl" aria-hidden>
                        👋
                      </span>
                    </div>
                  </div>

                  <h1 className="rounded-br-3xl bg-white pt-1 pb-5 pl-3 pr-5 text-4xl leading-none tracking-tight text-nd-ink md:text-5xl lg:pl-5 lg:pr-8 xl:text-6xl 2xl:text-7xl dark:bg-[#121212] dark:text-white">
                    {heroCopy.headline[0]}
                    <br />
                    {heroCopy.headline[1]}
                    <br />
                    {heroCopy.headline[2]}
                  </h1>
                </div>

                <div className="relative -mt-3 inline-flex rounded-br-2xl bg-white px-3 pt-4 pb-4 lg:rounded-br-3xl lg:px-5 lg:pt-5 lg:pb-5 dark:bg-[#121212]">
                  <CornerFillet
                    fill="top-left"
                    className={`${filletClass} top-3 right-px translate-x-full lg:top-4`}
                  />
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-7">
                    <GooeyLink href={anchors.work} label={heroCopy.workCta} tone="ink" />
                    <MeetTheTeamLink />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
