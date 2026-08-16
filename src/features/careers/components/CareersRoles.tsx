import { careersContent, openRoles } from '@/features/careers/data'
import { PageContainer } from '@/components/ui/PageContainer'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { SmartLink } from '@/components/ui/SmartLink'

export function CareersRoles() {
  return (
    <section
      id="open-positions"
      className="scroll-mt-28 border-t border-black/5 py-16 lg:py-24 dark:border-white/10"
    >
      <PageContainer>
        <div className="mb-10 lg:mb-14">
          <div className="mb-4">
            <SectionEyebrow>{careersContent.rolesEyebrow}</SectionEyebrow>
          </div>
          <h2 className="max-w-xl text-[clamp(1.75rem,3.5vw,2.75rem)] leading-none tracking-tight">
            {careersContent.rolesHeading}
          </h2>
        </div>

        {openRoles.length > 0 ? (
          <ul className="divide-y divide-black/10 dark:divide-white/10">
            {openRoles.map((role) => (
              <li key={role.title}>
                <SmartLink
                  href={role.href}
                  className="flex flex-wrap items-center justify-between gap-3 py-6 transition hover:text-nd-muted dark:hover:text-white/70"
                >
                  <span className="text-xl tracking-tight lg:text-2xl">{role.title}</span>
                  <span className="text-sm font-light text-nd-muted dark:text-white/55">{role.type}</span>
                </SmartLink>
              </li>
            ))}
          </ul>
        ) : (
          <div className="rounded-2xl bg-[#f5f5f5] px-6 py-14 text-center sm:px-10 lg:rounded-3xl lg:py-20 dark:bg-[#171717]">
            <p className="mb-3 text-sm font-medium text-nd-muted dark:text-white/55">No vacancies</p>
            <h3 className="mb-4 text-[clamp(1.5rem,3vw,2.25rem)] leading-none tracking-tight">
              {careersContent.emptyTitle}
            </h3>
            <p className="mx-auto mb-8 max-w-xl text-base font-light leading-7 text-nd-muted dark:text-white/65">
              {careersContent.emptyBody}
            </p>
            <a href={careersContent.speculativeEmailHref} className="btn-lime">
              {careersContent.speculativeCta}
            </a>
          </div>
        )}
      </PageContainer>
    </section>
  )
}
