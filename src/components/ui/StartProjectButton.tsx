import { routes } from '@/config/routes'
import { GooeyLink } from '@/components/ui/GooeyButton'
import { isInternalHref } from '@/lib/links'

type StartProjectButtonProps = {
  href?: string
  className?: string
  onClick?: () => void
  label?: string
}

export function StartProjectButton({
  href = routes.planner,
  className = '',
  onClick,
  label = 'Start a project',
}: StartProjectButtonProps) {
  const external = !isInternalHref(href)

  return (
    <GooeyLink
      href={href}
      label={label}
      className={className}
      onClick={onClick}
      external={external}
    />
  )
}
