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
    <section className="py-16 lg:py-24">
      <PageContainer>
        <div className="mb-12 flex flex-wrap justify-between gap-10 lg:mb-16 lg:gap-16">
          <h2 className="w-full max-w-md text-[clamp(1.5rem,3vw,2.5rem)] leading-none tracking-tight text-balance lg:w-[38%]">
            {caseStudy.dek}
          </h2>
          <p className="w-full text-base font-light leading-7 text-nd-muted lg:w-[52%] lg:text-[1.05rem] dark:text-white/65">
            {caseStudy.body}
          </p>
        </div>

        <dl className="grid gap-8 border-t border-black/5 pt-8 sm:grid-cols-3 dark:border-white/10">
          {meta.map((item) => (
            <div key={item.label}>
              <dt className="mb-1 text-sm font-light text-nd-muted dark:text-white/45">{item.label}</dt>
              <dd className="text-lg tracking-tight">{item.value}</dd>
            </div>
          ))}
        </dl>
      </PageContainer>
    </section>
  )
}
