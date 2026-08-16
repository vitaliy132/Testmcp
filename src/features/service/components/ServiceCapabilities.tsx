import type { ServicePageContent } from '@/features/service/data/pages'
import { StartProjectButton } from '@/components/ui/StartProjectButton'
import { PageContainer } from '@/components/ui/PageContainer'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { routes } from '@/config/routes'

export function ServiceCapabilities({ service }: { service: ServicePageContent }) {
  return (
    <section className="bg-[#f5f5f5] py-16 lg:py-24 dark:bg-[#171717]">
      <PageContainer>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 lg:mb-14">
          <div>
            <div className="mb-3">
              <SectionEyebrow>Capabilities</SectionEyebrow>
            </div>
            <h2 className="max-w-xl text-[clamp(1.5rem,3vw,2.5rem)] leading-none tracking-tight text-balance">
              {service.capabilitiesTitle}
            </h2>
          </div>
          <StartProjectButton href={routes.planner} label="Get in touch today" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {service.capabilities.map((capability) => (
            <div
              key={capability.name}
              className="rounded-2xl bg-white p-6 lg:rounded-3xl lg:p-8 dark:bg-[#1f1f1f]"
            >
              <h3 className="mb-3 text-xl tracking-tight lg:text-2xl">{capability.name}</h3>
              <p className="text-base font-light leading-7 text-nd-muted dark:text-white/65">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
