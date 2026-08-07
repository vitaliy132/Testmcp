import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AboutHero } from '@/components/about/AboutHero'
import { AboutIntro } from '@/components/about/AboutIntro'
import { AboutShowreel } from '@/components/about/AboutShowreel'
import { InfiniteTeamCarousel } from '@/components/about/TeamCarousel'
import { StatsCarousel } from '@/components/about/StatsCarousel'
import { ReviewsCarousel } from '@/components/about/ReviewsCarousel'
import { aboutAwardLogos, aboutAwards } from '@/data/about'
import { external, routes } from '@/config/links'
import { scrollToHash } from '@/lib/scroll'

export function AboutPage() {
  useEffect(() => {
    scrollToHash()
  }, [])

  return (
    <>
      <AboutHero />

      <AboutIntro />

      {/* Award logos under intro */}
      <section className="py-10 lg:py-16 2xl:py-24" aria-label="Awards">
        <div className="mx-auto w-full px-2 sm:px-6 xl:px-12 2xl:px-20">
          <div className="flex w-full flex-wrap items-center justify-center md:justify-between lg:-mb-0">
            {aboutAwardLogos.map((logo) => (
              <div
                key={logo.src}
                className="mb-8 inline-flex w-1/3 items-center justify-center px-2 md:mb-14 md:w-36 lg:mb-0 xl:w-56 xl:px-4 2xl:w-60"
              >
                <div className="relative px-4 lg:px-0">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-16 w-auto object-contain dark:invert xl:h-24"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showreel under awards */}
      <section className="pb-20 lg:pb-24 2xl:pb-32">
        <div className="mx-auto w-full px-2 sm:px-6 xl:px-12 2xl:px-20">
          <AboutShowreel />
        </div>
      </section>

      {/* Team — centered header, infinite carousel, CTA below (MadeByShape layout) */}
      <section id="team" className="scroll-mt-28 bg-white pb-20 lg:pb-24 dark:bg-[#121212]">
        <div className="mb-0 flex w-full flex-wrap justify-center px-2 sm:px-6 xl:px-12 2xl:px-20">
          <div className="flex w-full flex-col items-center space-y-3 text-center lg:space-y-5">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-nd-muted dark:bg-white/80" />
              <span className="text-sm font-light text-nd-muted lg:text-base dark:text-white/80">
                Our Team
              </span>
            </div>
            <h2 className="max-w-[16ch] text-2xl leading-none tracking-tight text-balance text-nd-muted md:text-3xl xl:text-4xl dark:text-white/90">
              Multiple personalities,
              <br />
              No egos.
            </h2>
          </div>
        </div>

        <InfiniteTeamCarousel />

        <div className="mt-10 flex w-full justify-center px-2 lg:mt-16 lg:px-3 xl:px-4">
          <a
            href={external.meetTheTeam}
            target="_blank"
            rel="noreferrer"
            className="btn-lime"
          >
            Meet the whole Team
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-20 lg:pb-24">
        <div className="mx-auto w-full px-2 sm:px-6 xl:px-12 2xl:px-20">
          <StatsCarousel />
        </div>
      </section>

      <ReviewsCarousel />

      {/* Awards */}
      <section className="overflow-hidden py-16 lg:py-24">
        <div className="mx-auto w-full px-2 sm:px-6 xl:px-12 2xl:px-20">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-medium text-nd-muted dark:text-white/55">
                We don’t pay for awards
              </p>
              <h2 className="max-w-[18ch] text-[clamp(1.8rem,3.5vw,3rem)] leading-[1.1] tracking-tight">
                We win awards and get recognised for our work
              </h2>
            </div>
            <Link to={routes.planner} className="btn-lime">
              You could be next
            </Link>
          </div>
        </div>
        <div className="relative mt-4">
          <div className="animate-marquee flex w-max gap-6 px-5">
            {[...aboutAwards, ...aboutAwards].map((src, i) => (
              <img
                key={`${src}-${i}`}
                src={src}
                alt=""
                className="h-28 w-auto shrink-0 rounded-xl bg-nd-soft object-contain p-2 dark:bg-[#1a1a1a] sm:h-36"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
