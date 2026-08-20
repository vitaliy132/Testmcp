import type { WorkChapter as WorkChapterType } from '@/data/work'
import { PageContainer } from '@/components/ui/PageContainer'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'

export function WorkChapter({ chapter }: { chapter: WorkChapterType }) {
  return (
    <section className="py-10 lg:py-16 xl:py-24">
      <PageContainer variant="about">
        <div className="max-w-3xl">
          <SectionEyebrow className="mb-4 inline-flex items-center gap-2">
            {chapter.eyebrow}
          </SectionEyebrow>
          <h2 className="mb-5 text-2xl leading-[1.12] tracking-tight md:text-3xl xl:mb-6 xl:text-4xl">
            {chapter.heading}
          </h2>
          <p className="max-w-2xl text-base font-light leading-7 text-pretty text-nd-muted xl:text-lg dark:text-white/65">
            {chapter.body}
          </p>
        </div>
      </PageContainer>
    </section>
  )
}
