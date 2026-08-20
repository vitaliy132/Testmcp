import { getRelatedWork } from '@/features/work/projects'
import type { WorkCaseStudyItem } from '@/features/work/types'
import { workPageCopy } from '@/features/work/data'
import { WorkCard } from '@/features/work/components/WorkCard'
import { anchors, homeHash } from '@/config/routes'
import { PageContainer } from '@/components/ui/PageContainer'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { SmartLink } from '@/components/ui/SmartLink'

export function WorkRelated({ project }: { project: WorkCaseStudyItem }) {
  const related = getRelatedWork(project.id)

  return (
    <section className="border-t border-black/5 py-16 lg:py-24 dark:border-white/10">
      <PageContainer variant="about">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 lg:mb-14">
          <div className="flex flex-col items-start gap-3">
            <SectionEyebrow>{workPageCopy.relatedEyebrow}</SectionEyebrow>
            <h2 className="text-[clamp(1.75rem,4vw,3.5rem)] leading-none tracking-tight">{workPageCopy.relatedHeading}</h2>
          </div>
          <SmartLink
            href={homeHash(anchors.work)}
            className="text-sm font-medium underline-offset-4 transition hover:underline"
          >
            {workPageCopy.relatedCta}
          </SmartLink>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {related.map((item) => (
            <WorkCard key={item.id} project={item} variant="related" />
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
