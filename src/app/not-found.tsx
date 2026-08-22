import { GooeyLink } from '@/components/ui/GooeyButton'
import { routes } from '@/config/routes'

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
      <p className="mb-4 text-sm font-medium text-nd-muted dark:text-white/55">404</p>
      <h1 className="mb-6 max-w-lg text-[clamp(1.75rem,4vw,3rem)] font-medium leading-none tracking-tight">
        We couldn’t find that page.
      </h1>
      <GooeyLink href={routes.home} label="Back home" />
    </section>
  )
}
