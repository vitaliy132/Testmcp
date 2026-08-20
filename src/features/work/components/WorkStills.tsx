import type { WorkCaseStudyItem } from '@/features/work/types'
import { PageContainer } from '@/components/ui/PageContainer'

export function WorkStills({ project }: { project: WorkCaseStudyItem }) {
  const stills = project.caseStudy.stills
  if (stills.length === 0) return null

  const [first, ...rest] = stills
  if (!first) return null

  return (
    <section className="pb-16 lg:pb-24">
      <PageContainer variant="about">
        <div className="flex flex-col gap-3 lg:gap-4">
          <div className="overflow-hidden rounded-2xl bg-nd-soft lg:rounded-3xl dark:bg-[#1a1a1a]">
            <div className="aspect-[4/3] w-full overflow-hidden lg:aspect-[16/9]">
              <img
                src={first.src}
                alt={first.alt}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {rest.length > 0 ? (
            <div className={`grid gap-3 lg:gap-4 ${rest.length > 1 ? 'sm:grid-cols-2' : ''}`}>
              {rest.map((still) => (
                <div
                  key={still.src}
                  className="overflow-hidden rounded-2xl bg-nd-soft lg:rounded-3xl dark:bg-[#1a1a1a]"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={still.src}
                      alt={still.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </PageContainer>
    </section>
  )
}
