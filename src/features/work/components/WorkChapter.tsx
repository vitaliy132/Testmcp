import type { WorkChapter as WorkChapterType } from '@/data/work'
import { PageContainer } from '@/components/ui/PageContainer'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'

export function WorkChapter({ chapter }: { chapter: WorkChapterType }) {
  return (
    <section className="py-10 lg:py-16 xl:py-24">
      <PageContainer variant="about">
        <div className="grid items-start gap-6 lg:grid-cols-12 lg:gap-10 xl:gap-16">
          <div className="lg:col-span-5">
            <div className="max-w-lg xl:grid xl:grid-cols-[auto_minmax(0,1fr)] xl:items-start xl:gap-x-5">
              <SectionEyebrow className="mb-3 inline-flex items-center gap-2 xl:mb-0 xl:mt-2.5">
                {chapter.eyebrow}
              </SectionEyebrow>
              <h2 className="text-2xl leading-[1.12] tracking-tight md:text-3xl xl:text-4xl">
                {chapter.heading}
              </h2>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="max-w-xl text-base font-light leading-7 text-pretty text-nd-muted xl:text-lg dark:text-white/65">
              {chapter.body}
            </p>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
