import { Link } from 'react-router-dom'
import type { MenuLink } from '@/config/links'
import { ArrowIcon } from '@/components/layout/header/icons'

function isInternalPath(href: string) {
  return href.startsWith('/') && !href.startsWith('//')
}

export function DropdownLink({ item, onClick }: { item: MenuLink; onClick?: () => void }) {
  const className =
    'group flex w-full flex-col rounded-2xl px-4 py-2.5 transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.06]'

  const content = (
    <>
      <div className="flex items-center justify-between gap-3">
        <span className="text-base text-nd-ink dark:text-white">{item.label}</span>
        <span className="translate-x-[-0.35rem] translate-y-[0.35rem] opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowIcon />
        </span>
      </div>
      <span className="mt-0.5 text-sm font-light text-nd-muted dark:text-white/55">{item.description}</span>
    </>
  )

  if (isInternalPath(item.href)) {
    return (
      <Link to={item.href} onClick={onClick} className={className}>
        {content}
      </Link>
    )
  }

  return (
    <a href={item.href} onClick={onClick} className={className}>
      {content}
    </a>
  )
}
