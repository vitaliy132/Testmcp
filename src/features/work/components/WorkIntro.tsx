import type { WorkCaseStudyItem } from '@/data/work'
import { workPageCopy } from '@/features/work/data'
import { PageContainer } from '@/components/ui/PageContainer'

export function WorkIntro({ project }: { project: WorkCaseStudyItem }) {
  const { caseStudy } = project
  const meta = [
    { label: workPageCopy.meta.client, value: project.client },
    { label: workPageCopy.meta.industry, value: caseStudy.industry },
    { label: workPageCopy.meta.duration, value: caseStudy.duration },
  ]

  return (
    <section className="py-10 lg:py-16 xl:py-24">
      <PageContainer variant="about">
        <div className="flex flex-wrap items-start justify-between gap-8 lg:gap-0">
          <h2 className="w-full max-w-xl text-[clamp(1.5rem,3vw,2.5rem)] leading-none tracking-tight text-balance lg:w-[56%] lg:pr-16">
            {caseStudy.dek}
          </h2>

          <div className="w-full lg:w-[44%] xl:pr-10">
            <p className="text-base font-light leading-7 text-pretty text-nd-muted xl:text-lg dark:text-white/65">
              {caseStudy.body}
            </p>

            <dl className="mt-6 flex max-w-2xl flex-wrap justify-between gap-6 pr-6 lg:mt-10 lg:pr-0">
              {meta.map((item) => (
                <div key={item.label} className="min-w-[6rem] pr-4">
                  <dt className="mb-1 text-sm font-light text-nd-muted dark:text-white/45">{item.label}</dt>
                  <dd className="text-lg tracking-tight lg:text-xl">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
