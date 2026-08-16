import type { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-router-dom'
import { aboutLinks, servicesLinks, workCount } from '@/config/nav'
import { anchors, homeHash, routes } from '@/config/routes'
import { StartProjectButton } from '@/components/ui/StartProjectButton'
import { SmartLink } from '@/components/ui/SmartLink'
import type { OpenMenu } from '@/types/nav'

type MobileNavProps = {
  menuOpen: boolean
  mobileExpanded: OpenMenu
  setMobileExpanded: Dispatch<SetStateAction<OpenMenu>>
  closeAll: () => void
}

export function MobileNav({
  menuOpen,
  mobileExpanded,
  setMobileExpanded,
  closeAll,
}: MobileNavProps) {
  if (!menuOpen) return null

  return (
    <div className="w-full border-t border-black/5 px-3 py-5 md:hidden dark:border-white/10">
      <div className="flex flex-col gap-2">
        <button
          type="button"
          className="flex items-center justify-between py-2 text-left text-lg font-medium"
          onClick={() => setMobileExpanded((v) => (v === 'services' ? null : 'services'))}
        >
          <span className="inline-flex items-center gap-2">
            Services
            <span className="rounded-full bg-nd-soft px-1.5 py-px text-[11px] dark:bg-white/10">{workCount}</span>
          </span>
          <span className={`transition ${mobileExpanded === 'services' ? 'rotate-45' : ''}`}>+</span>
        </button>
        {mobileExpanded === 'services' && (
          <div className="mb-2 space-y-1 pl-2">
            {servicesLinks.map((item) => (
              <SmartLink
                key={item.label}
                href={item.href}
                className="block rounded-xl px-3 py-2.5 hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
                onClick={closeAll}
              >
                <div className="font-medium">{item.label}</div>
                <div className="text-sm text-nd-muted dark:text-white/55">{item.description}</div>
              </SmartLink>
            ))}
          </div>
        )}

        <SmartLink href={homeHash(anchors.work)} className="py-2 text-lg font-medium" onClick={closeAll}>
          Work
        </SmartLink>

        <button
          type="button"
          className="flex items-center justify-between py-2 text-left text-lg font-medium"
          onClick={() => setMobileExpanded((v) => (v === 'about' ? null : 'about'))}
        >
          About
          <span className={`transition ${mobileExpanded === 'about' ? 'rotate-45' : ''}`}>+</span>
        </button>
        {mobileExpanded === 'about' && (
          <div className="mb-2 space-y-1 pl-2">
            {aboutLinks.map((item) => (
              <SmartLink
                key={item.label}
                href={item.href}
                className="block rounded-xl px-3 py-2.5 hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
                onClick={closeAll}
              >
                <div className="font-medium">{item.label}</div>
                <div className="text-sm text-nd-muted dark:text-white/55">{item.description}</div>
              </SmartLink>
            ))}
          </div>
        )}

        <SmartLink href={homeHash(anchors.blog)} className="py-2 text-lg font-medium" onClick={closeAll}>
          Blog
        </SmartLink>
        <Link to={routes.contact} className="py-2 text-lg font-medium" onClick={closeAll}>
          Contact
        </Link>
        <StartProjectButton className="mt-3" onClick={closeAll} />
      </div>
    </div>
  )
}
