import { careersContent } from '@/features/careers/data'
import { PageContainer } from '@/components/ui/PageContainer'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { SmartLink } from '@/components/ui/SmartLink'

export function CareersSpeculative() {
  const { andy } = careersContent

  return (
    <section className="py-16 lg:py-24">
      <PageContainer>
        <div className="flex flex-wrap items-end justify-between gap-10 lg:gap-16">
          <div className="w-full max-w-xl lg:w-[52%]">
            <div className="mb-4">
              <SectionEyebrow>{careersContent.speculativeEyebrow}</SectionEyebrow>
            </div>
            <h2 className="mb-6 text-[clamp(1.75rem,3.5vw,2.75rem)] leading-none tracking-tight text-balance">
              {careersContent.speculativeHeading}
            </h2>
            <p className="mb-8 text-base font-light leading-7 text-nd-muted dark:text-white/65">
              {careersContent.speculativeBody}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href={careersContent.speculativeEmailHref} className="btn-lime">
                {careersContent.speculativeCta}
              </a>
              <SmartLink href={careersContent.meetTeamHref} className="btn-soft">
                {careersContent.meetTeamCta}
              </SmartLink>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <img
              src={andy.image}
              alt={andy.name}
              className="h-20 w-20 rounded-2xl object-cover lg:h-24 lg:w-24"
            />
            <div>
              <p className="tracking-tight">{andy.name}</p>
              <p className="text-sm font-light text-nd-muted dark:text-white/55">{andy.role}</p>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
