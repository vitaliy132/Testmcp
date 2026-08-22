import { work } from '@/features/work/data'
import { routes } from '@/config/routes'
import { workCopy } from '@/features/home/data/copy'
import { WorkCard } from '@/features/work/components/WorkCard'
import { StartProjectButton } from '@/components/ui/StartProjectButton'
import { PageContainer } from '@/components/ui/PageContainer'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'

function WorkCta() {
  return (
    <div className="flex w-full flex-col items-center justify-center text-center">
      <h3 className="mb-5 text-[clamp(1.5rem,3vw,2.75rem)] leading-none tracking-tight">
        {workCopy.ctaHeading[0]}
        <br />
        {workCopy.ctaHeading[1]}
      </h3>
      <StartProjectButton href={routes.contact} label={workCopy.ctaLabel} />
    </div>
  )
}

export function Work() {
  const firstPair = work.slice(0, 2)
  const secondPair = work.slice(2)

  return (
    <section id="work" className="scroll-mt-28 py-16 lg:py-24">
      <PageContainer variant="work">
        <div className="mb-10 flex flex-col items-start gap-3 lg:mb-16 lg:gap-5">
          <SectionEyebrow>{workCopy.eyebrow}</SectionEyebrow>
          <h2 className="max-w-sm text-[clamp(1.75rem,4vw,3.75rem)] leading-none tracking-tight text-balance">
            {workCopy.heading}
          </h2>
        </div>

        <div className="-mb-16 flex flex-wrap">
          {firstPair.map((project, i) => (
            <WorkCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="mb-16 hidden justify-center lg:mb-20 lg:flex">
          <WorkCta />
        </div>

        <div className="-mb-16 flex flex-wrap">
          {secondPair.map((project, i) => (
            <WorkCard key={project.id} project={project} index={i + 2} />
          ))}
        </div>

        <div className="mt-4 flex justify-center lg:hidden">
          <WorkCta />
        </div>
      </PageContainer>
    </section>
  )
}
