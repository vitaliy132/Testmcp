import type { WorkChapter as WorkChapterType } from '@/features/work/types'
import { PageContainer } from '@/components/ui/PageContainer'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'

export function WorkChapter({ chapter }: { chapter: WorkChapterType }) {
  return (
    <section className="py-10 lg:py-16 xl:py-24">
      <PageContainer variant="about">
        <div className="flex w-full flex-wrap justify-between">
          <div className="relative mb-5 w-full lg:mb-0 lg:w-[38%] xl:w-[44%] lg:pr-8">
            <SectionEyebrow className="mb-3 inline-flex items-center gap-2 xl:absolute xl:top-3 xl:left-4">
              {chapter.eyebrow}
            </SectionEyebrow>
            <h2 className="text-2xl leading-none tracking-tight text-balance md:text-3xl xl:indent-32 xl:text-4xl">
              {chapter.heading}
            </h2>
          </div>
          <div className="w-full lg:w-1/2 xl:pr-10">
            <p className="text-base font-light leading-7 text-pretty text-nd-muted xl:text-lg dark:text-white/65">
              {chapter.body}
            </p>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
