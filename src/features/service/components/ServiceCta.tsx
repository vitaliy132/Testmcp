import type { ServicePageContent } from '@/features/service/data/pages'
import { StartProjectButton } from '@/components/ui/StartProjectButton'
import { routes } from '@/config/routes'

export function ServiceCta({ service }: { service: ServicePageContent }) {
  return (
    <section className="px-3 pb-16 sm:px-5 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-[1600px] overflow-hidden rounded-2xl bg-[#1f1f1f] px-6 py-16 text-white lg:rounded-3xl lg:px-12 lg:py-24 dark:bg-[#171717]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-xl text-[clamp(1.75rem,4vw,3rem)] leading-none tracking-tight text-balance">
            {service.ctaHeadline}
          </h2>
          <StartProjectButton href={routes.planner} label="Start a project" />
        </div>
      </div>
    </section>
  )
}
