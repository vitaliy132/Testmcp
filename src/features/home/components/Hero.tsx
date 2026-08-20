import { useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { anchors } from '@/config/routes'
import { heroCopy } from '@/features/home/data/copy'
import { HeroReel } from '@/features/home/components/HeroReel'
import { PageContainer } from '@/components/ui/PageContainer'
import { GooeyLink, HeroGooFilter } from '@/components/ui/GooeyButton'
import { ArrowIcon } from '@/components/ui/ArrowIcon'
import { VideoPlayNotch } from '@/components/ui/VideoPlayNotch'
import { useInViewVideo } from '@/hooks/useInViewVideo'

const HERO_REEL_SRC = '/videos/hero-reel.mp4'
const HERO_REEL_POSTER = '/videos/posters/hero-reel.jpg'

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
  const reduceMotion = useReducedMotion() ?? false
  const videoRef = useRef<HTMLVideoElement>(null)
  const [failed, setFailed] = useState(false)
  const showPoster = reduceMotion || failed
  const { playing, togglePlay } = useInViewVideo(videoRef, {
    enabled: !showPoster,
    src: HERO_REEL_SRC,
  })

  return (
    <section className="relative pt-20 pb-16 lg:pt-24 lg:pb-24">
      <PageContainer>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.04, ease: blobEase }}
            className="px-2 lg:px-3 xl:px-4"
          >
            <div className="hero-reel-frame relative z-0 aspect-[4/5] w-full overflow-hidden bg-white md:aspect-[16/10] lg:aspect-video dark:bg-nd-dark">
              <HeroReel
                videoRef={videoRef}
                showPoster={showPoster}
                src={HERO_REEL_SRC}
                poster={HERO_REEL_POSTER}
                onError={() => setFailed(true)}
              />

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

              {showPoster ? null : (
                <VideoPlayNotch
                  playing={playing}
                  onToggle={togglePlay}
                  label={playing ? 'Pause showreel' : 'Play showreel'}
                />
              )}

              <div
                aria-hidden
                className="pointer-events-none absolute -top-1 -left-1 z-[15] h-14 w-14 rounded-tl-[1.5rem] bg-white lg:h-16 lg:w-16 lg:rounded-tl-[2rem] dark:bg-nd-dark"
              />

              <div className="pointer-events-none absolute -top-1 -left-1 right-0 bottom-0 z-20 flex w-auto max-w-[calc(100%-7rem)] flex-col items-start sm:max-w-[min(100%,42rem)]">
                <div className="pointer-events-auto relative flex w-auto flex-col items-start">
                  <div className="hero-gooey-wrap relative w-auto">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.1, ease: blobEase }}
                      className="hero-gooey-cluster relative flex w-auto flex-col items-start"
                      style={{ filter: 'url(#heroGoo)' }}
                    >
                      <div className="hero-gooey-chip relative mb-3 w-full bg-white dark:bg-nd-dark">
                        <div className="relative z-20 inline-flex items-center gap-2 px-3 text-sm font-light text-nd-muted lg:px-6 lg:text-base dark:text-white/80">
                          <span className="h-1.5 w-1.5 rounded-full bg-nd-muted dark:bg-white/50" aria-hidden />
                          <span>{heroCopy.eyebrow}</span>
                          <span className="animate-wave text-2xl lg:text-3xl" aria-hidden>
                            👋
                          </span>
                        </div>
                      </div>

                      <h1 className="hero-gooey hero-gooey-chip relative -mt-[1.125rem] bg-white py-2 text-4xl leading-none tracking-tight text-nd-ink md:text-5xl lg:py-3 xl:text-6xl 2xl:text-7xl dark:bg-nd-dark dark:text-white">
                        {heroCopy.headline.map((line, i) => (
                          <span
                            key={line}
                            className="relative inline shrink-0 truncate pl-3 lg:pl-5"
                            style={{ zIndex: heroCopy.headline.length - 1 - i }}
                          >
                            {line}
                            {'\u00a0\u00a0'}
                            <br />
                          </span>
                        ))}
                      </h1>

                      <div className="hero-gooey-chip relative -mt-2 inline-flex rounded-b-[1.5rem] bg-white px-3 pt-1 pb-5 lg:rounded-b-[2rem] lg:px-5 lg:pt-3 lg:pr-8 lg:pb-7 dark:bg-nd-dark">
                        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-7">
                          <GooeyLink href={anchors.work} label={heroCopy.workCta} tone="ink" />
                          <MeetTheTeamLink />
                        </div>
                      </div>
                    </motion.div>
                    <HeroGooFilter />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  )
}
