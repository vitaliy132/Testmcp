import { useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { anchors, routes } from '@/config/routes'
import { heroCopy } from '@/features/home/data/copy'
import { HeroReel } from '@/features/home/components/HeroReel'
import { PageContainer } from '@/components/ui/PageContainer'
import { GooeyLink } from '@/components/ui/GooeyButton'
import { ArrowIcon } from '@/components/ui/ArrowIcon'
import { VideoPlayNotch } from '@/components/ui/VideoPlayNotch'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { Reveal } from '@/components/ui/Reveal'
import { useInViewVideo } from '@/hooks/useInViewVideo'

const HERO_REEL_SRC = '/videos/hero-reel.mp4'
const HERO_REEL_POSTER = '/videos/posters/hero-reel.jpg'

function AboutLink() {
  return (
    <Link
      to={routes.about}
      className="group relative inline-flex items-center py-1 pr-3 text-nd-ink dark:text-white"
    >
      <span className="relative top-px font-medium leading-tight">{heroCopy.aboutCta}</span>
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
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24">
      <PageContainer>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-8 xl:gap-12">
          <div className="w-full lg:w-[40%] lg:shrink-0 xl:w-[38%]">
            <Reveal className="mb-4 inline-flex items-center gap-2 lg:mb-5">
              <SectionEyebrow tone="muted">{heroCopy.eyebrow}</SectionEyebrow>
              <span className="animate-wave text-2xl lg:text-3xl" aria-hidden>
                👋
              </span>
            </Reveal>

            <Reveal
              as="h1"
              delay={0.06}
              y={20}
              duration={0.55}
              className="text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[0.95] tracking-tight"
            >
              {heroCopy.headline[0]}
              <br />
              {heroCopy.headline[1]}
              <br />
              {heroCopy.headline[2]}
            </Reveal>

            <Reveal delay={0.14} className="mt-8 flex flex-wrap items-center gap-4 lg:mt-10 lg:gap-6">
              <GooeyLink href={anchors.work} label={heroCopy.workCta} />
              <AboutLink />
            </Reveal>
          </div>

          <Reveal delay={0.1} y={24} duration={0.6} className="w-full min-w-0 lg:flex-1">
            <div className="hero-reel-frame relative isolate aspect-[4/3] w-full overflow-hidden bg-[#1a1a1a] sm:aspect-[16/10]">
              <HeroReel
                videoRef={videoRef}
                showPoster={showPoster}
                src={HERO_REEL_SRC}
                poster={HERO_REEL_POSTER}
                onError={() => setFailed(true)}
              />

              <a
                href={anchors.about}
                className="absolute top-3 right-3 z-30 flex max-w-[min(calc(100%-3.5rem),16rem)] items-center gap-2 rounded-full bg-white py-1 pl-1 pr-2.5 text-nd-ink shadow-sm transition hover:scale-[1.02] sm:top-5 sm:right-5 sm:max-w-[min(calc(100%-3rem),18rem)] sm:gap-3 sm:py-1.5 sm:pl-1.5 sm:pr-4 lg:top-6 lg:right-6"
              >
                <img
                  src={heroCopy.andy.image}
                  alt="Andy"
                  decoding="async"
                  className="h-9 w-9 shrink-0 rounded-full object-cover sm:h-11 sm:w-11 lg:h-12 lg:w-12"
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
            </div>
          </Reveal>
        </div>
      </PageContainer>
    </section>
  )
}
