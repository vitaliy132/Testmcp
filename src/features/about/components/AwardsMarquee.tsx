import { Link } from 'react-router-dom'
import { aboutAwards, aboutAwardsCopy } from '@/features/about/data'
import { routes } from '@/config/routes'
import { Marquee } from '@/components/ui/Marquee'
import { PageContainer } from '@/components/ui/PageContainer'

export function AwardsMarquee() {
  return (
    <section className="overflow-hidden py-16 lg:py-24">
      <PageContainer variant="about">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-medium text-nd-muted dark:text-white/55">
              {aboutAwardsCopy.eyebrow}
            </p>
            <h2 className="max-w-[18ch] text-[clamp(1.8rem,3.5vw,3rem)] leading-[1.1] tracking-tight">
              {aboutAwardsCopy.heading}
            </h2>
          </div>
          <Link to={routes.planner} className="btn-lime">
            {aboutAwardsCopy.cta}
          </Link>
        </div>
      </PageContainer>
      <div className="relative mt-4">
        <Marquee className="gap-6 px-5">
          {[...aboutAwards, ...aboutAwards].map((src, i) => (
            <img
              key={`${src}-${i}`}
              src={src}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-28 w-auto shrink-0 rounded-xl bg-nd-soft object-contain p-2 dark:bg-[#1a1a1a] sm:h-36"
            />
          ))}
        </Marquee>
      </div>
    </section>
  )
}
