import { aboutTeamCopy } from '@/features/about/data'
import { external } from '@/config/external'
import { InfiniteTeamCarousel } from '@/features/about/components/TeamCarousel'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'

export function TeamSection() {
  return (
    <section id="team" className="scroll-mt-28 bg-white pb-20 lg:pb-24 dark:bg-[#121212]">
      <div className="mb-0 flex w-full flex-wrap justify-center px-2 sm:px-6 xl:px-12 2xl:px-20">
        <div className="flex w-full flex-col items-center space-y-3 text-center lg:space-y-5">
          <SectionEyebrow tone="muted">{aboutTeamCopy.eyebrow}</SectionEyebrow>
          <h2 className="max-w-[16ch] text-2xl leading-none tracking-tight text-balance text-nd-muted md:text-3xl xl:text-4xl dark:text-white/90">
            {aboutTeamCopy.heading[0]}
            <br />
            {aboutTeamCopy.heading[1]}
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
          {aboutTeamCopy.cta}
        </a>
      </div>
    </section>
  )
}
