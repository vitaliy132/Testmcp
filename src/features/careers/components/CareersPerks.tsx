import { careersContent } from '@/features/careers/data'
import { PageContainer } from '@/components/ui/PageContainer'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'

export function CareersPerks() {
  return (
    <section className="bg-[#f5f5f5] py-16 lg:py-24 dark:bg-[#171717]">
      <PageContainer>
        <div className="mb-10 lg:mb-14">
          <div className="mb-4">
            <SectionEyebrow>{careersContent.perksEyebrow}</SectionEyebrow>
          </div>
          <h2 className="max-w-xl text-[clamp(1.5rem,3vw,2.5rem)] leading-none tracking-tight text-balance">
            {careersContent.perksHeading}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {careersContent.perks.map((perk) => (
            <div
              key={perk.title}
              className="rounded-2xl bg-white p-6 lg:rounded-3xl lg:p-8 dark:bg-[#1f1f1f]"
            >
              <h3 className="mb-3 text-xl tracking-tight lg:text-2xl">{perk.title}</h3>
              <p className="text-base font-light leading-7 text-nd-muted dark:text-white/65">{perk.body}</p>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
