import { careersContent } from '@/features/careers/data'
import { StartProjectButton } from '@/components/ui/StartProjectButton'
import { PageHero } from '@/components/ui/PageHero'

export function CareersHero() {
  return (
    <PageHero
      eyebrow={careersContent.eyebrow}
      title={careersContent.headline}
      intro={careersContent.intro}
      titleClassName="mb-6 max-w-4xl text-[clamp(2.25rem,6vw,5rem)] font-medium leading-none tracking-tight text-balance"
    >
      <StartProjectButton href={careersContent.positionsAnchor} label={careersContent.cta} />
    </PageHero>
  )
}
