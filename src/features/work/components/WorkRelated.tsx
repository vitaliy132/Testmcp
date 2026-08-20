import { getRelatedWork, type WorkCaseStudyItem, type WorkItem } from '@/data/work'
import { workPageCopy } from '@/features/work/data'
import { anchors, homeHash } from '@/config/routes'
import { CornerFillet } from '@/components/ui/CornerFillet'
import { PageContainer } from '@/components/ui/PageContainer'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { SmartLink } from '@/components/ui/SmartLink'

function RelatedCard({ project }: { project: WorkItem }) {
  const visibleTags = project.tags.slice(0, 2)

  return (
    <SmartLink href={project.href} className="group flex w-full flex-col items-start">
      <div className="relative mb-5 w-full overflow-hidden">
        <div className="absolute -top-px -right-px z-20 rounded-bl-3xl bg-white pb-3 pl-3 pt-px dark:bg-[#121212]">
          <CornerFillet className="absolute top-0 left-px h-8 w-8 -translate-x-full text-white dark:text-[#121212]" />
          <CornerFillet className="absolute right-0 bottom-px h-8 w-8 translate-y-full text-white dark:text-[#121212]" />
          <div className="relative z-10 -mb-2 -mr-2 flex flex-wrap items-center">
            {visibleTags.map((tag) => (
              <span
                key={tag}
                className="mb-2 mr-2 inline-flex rounded-full bg-nd-soft px-3 py-1 text-sm leading-tight text-nd-ink dark:bg-[#2a2a2a] dark:text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl bg-nd-soft lg:rounded-3xl dark:bg-[#1a1a1a]">
          <div className="aspect-[4/3] w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
              decoding="async"
              className="h-full w-full origin-center scale-105 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              style={{ objectPosition: project.imagePosition }}
            />
          </div>
        </div>
      </div>

      <div className="mb-2 flex items-center gap-3 text-sm text-nd-muted dark:text-white/55">
        <span className="font-light">{project.year}</span>
        <span className="relative -top-px h-1.5 w-1.5 rounded-full bg-nd-ink dark:bg-white/50" />
        <span className="font-light">{project.client}</span>
      </div>

      <h3 className="max-w-sm text-lg leading-tight tracking-tight xl:text-xl">
        {project.caseStudy?.headline ?? project.title}
      </h3>
    </SmartLink>
  )
}

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
            <RelatedCard key={item.id} project={item} />
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
