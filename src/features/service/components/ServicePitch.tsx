import type { ServicePageContent } from '@/features/service/data/pages'
import { PageContainer } from '@/components/ui/PageContainer'

export function ServicePitch({ service }: { service: ServicePageContent }) {
  return (
    <section className="border-t border-black/5 py-16 lg:py-24 dark:border-white/10">
      <PageContainer className="flex flex-wrap justify-between gap-10 lg:gap-16">
        <div className="w-full lg:w-[38%]">
          <h2 className="max-w-md text-[clamp(1.5rem,3vw,2.5rem)] leading-none tracking-tight text-balance">
            {service.pitchTitle}
          </h2>
        </div>
        <div className="w-full lg:w-[52%]">
          <p className="mb-8 text-base font-light leading-7 text-nd-muted lg:text-[1.05rem] dark:text-white/65">
            {service.pitchBody}
          </p>
          <ul className="space-y-3">
            {service.trustPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-base font-light text-nd-ink dark:text-white/85">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-nd-ink dark:bg-white" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </PageContainer>
    </section>
  )
}
