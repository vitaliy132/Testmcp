import type { MenuLink } from '@/types/nav'
import { ArrowIcon } from '@/components/ui/ArrowIcon'
import { SmartLink } from '@/components/ui/SmartLink'

export function DropdownLink({ item, onClick }: { item: MenuLink; onClick?: () => void }) {
  return (
    <SmartLink
      href={item.href}
      onClick={onClick}
      className="group flex w-full flex-col rounded-2xl px-4 py-2.5 transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-base text-nd-ink dark:text-white">{item.label}</span>
        <span className="translate-x-[-0.35rem] translate-y-[0.35rem] opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowIcon className="h-3.5 w-3.5" />
        </span>
      </div>
      <span className="mt-0.5 text-sm font-light text-nd-muted dark:text-white/55">{item.description}</span>
    </SmartLink>
  )
}
