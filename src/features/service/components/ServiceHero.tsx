import Link from 'next/link'
import type { ServicePageContent } from '@/features/service/data/pages'
import { StartProjectButton } from '@/components/ui/StartProjectButton'
import { PageHero } from '@/components/ui/PageHero'
import { homeHash, routes, anchors } from '@/config/routes'

export function ServiceHero({ service }: { service: ServicePageContent }) {
  return (
    <PageHero eyebrow={service.eyebrow} title={service.headline} intro={service.intro}>
      <StartProjectButton href={routes.planner} label="Start a project" />
      <Link
        href={homeHash(anchors.work)}
        className="text-sm font-light text-nd-muted underline-offset-4 transition hover:text-nd-ink hover:underline dark:text-white/60 dark:hover:text-white"
      >
        View our work
      </Link>
    </PageHero>
  )
}
