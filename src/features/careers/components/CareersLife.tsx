import { careersContent } from '@/features/careers/data'
import { PageContainer } from '@/components/ui/PageContainer'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'

export function CareersLife() {
  return (
    <section className="border-t border-black/5 py-16 lg:py-24 dark:border-white/10">
      <PageContainer className="flex flex-wrap justify-between gap-10 lg:gap-16">
        <div className="w-full lg:w-[38%]">
          <div className="mb-4">
            <SectionEyebrow>{careersContent.lifeEyebrow}</SectionEyebrow>
          </div>
          <h2 className="max-w-md text-[clamp(1.5rem,3vw,2.5rem)] leading-none tracking-tight text-balance">
            {careersContent.lifeHeading}
          </h2>
        </div>
        <div className="w-full space-y-6 lg:w-[52%]">
          {careersContent.lifeParagraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="text-base font-light leading-7 text-nd-muted lg:text-[1.05rem] dark:text-white/65"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
