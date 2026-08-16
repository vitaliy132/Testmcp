import { routes } from '@/config/routes'
import { GooeyLink } from '@/components/ui/GooeyButton'

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
  const external = href.startsWith('http') || href.startsWith('#')

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

export { ButtonGooFilter } from '@/components/ui/GooeyButton'
