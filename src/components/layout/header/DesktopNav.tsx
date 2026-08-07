import { Link } from 'react-router-dom'
import { DropdownLink } from '@/components/layout/header/DropdownLink'
import { FeaturedCard } from '@/components/layout/header/FeaturedCard'
import { aboutLinks, anchors, routes, servicesLinks } from '@/config/links'
import { IMG } from '@/data/assets'

export type OpenMenu = 'services' | 'about' | null

type DesktopNavProps = {
  openMenu: OpenMenu
  open: (menu: OpenMenu) => void
  scheduleClose: () => void
  closeAll: () => void
}

export function DesktopNav({ openMenu, open, scheduleClose, closeAll }: DesktopNavProps) {
  return (
    <nav className="relative z-10 hidden items-center gap-0.5 md:flex lg:gap-1">
      <div className="relative" onMouseEnter={() => open('services')}>
        <a
          href={anchors.services}
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition ${
            openMenu === 'services'
              ? 'bg-black/[0.05] text-nd-ink dark:bg-white/10 dark:text-white'
              : 'text-nd-ink/80 hover:bg-black/[0.04] hover:text-nd-ink dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white'
          }`}
          aria-expanded={openMenu === 'services'}
          aria-haspopup="true"
        >
          Services
          <span className="rounded-full bg-nd-soft px-1.5 py-px text-[11px] leading-tight tracking-tight text-nd-ink/70 dark:bg-white/10 dark:text-white/70">
            13
          </span>
        </a>

        <div
          className={`absolute left-1/2 top-full z-50 pt-4 transition duration-200 ${
            openMenu === 'services'
              ? 'pointer-events-auto translate-y-0 opacity-100'
              : 'pointer-events-none -translate-y-2 opacity-0'
          }`}
          onMouseEnter={() => open('services')}
        >
          <div className="relative w-[44rem] max-w-[calc(100vw-2rem)] -translate-x-1/3 rounded-3xl bg-white p-8 shadow-[0_24px_80px_rgba(0,0,0,0.12)] dark:bg-[#1a1a1a]">
            <div className="absolute -top-1.5 left-1/3 h-3 w-3 -translate-x-full rotate-45 rounded-sm bg-white dark:bg-[#1a1a1a]" />
            <div className="flex gap-2">
              <div className="flex w-[58%] flex-col items-start pr-2">
                {servicesLinks.map((item) => (
                  <DropdownLink key={item.label} item={item} onClick={closeAll} />
                ))}
              </div>
              <div className="w-[42%] pl-2">
                <FeaturedCard
                  title="View all Services"
                  description="We don’t stop there, check out all the services we offer here at Northern Digital"
                  href={anchors.services}
                  image={IMG.servicesDropdown}
                  onClick={closeAll}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href={anchors.work}
        className="rounded-full px-3 py-2 text-sm font-medium text-nd-ink/80 transition hover:bg-black/[0.04] hover:text-nd-ink dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white"
        onMouseEnter={scheduleClose}
      >
        Work
      </a>

      <div className="relative" onMouseEnter={() => open('about')}>
        <Link
          to={routes.about}
          className={`inline-flex items-center rounded-full px-3 py-2 text-sm font-medium transition ${
            openMenu === 'about'
              ? 'bg-black/[0.05] text-nd-ink dark:bg-white/10 dark:text-white'
              : 'text-nd-ink/80 hover:bg-black/[0.04] hover:text-nd-ink dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white'
          }`}
          aria-expanded={openMenu === 'about'}
          aria-haspopup="true"
          onClick={scheduleClose}
        >
          About
        </Link>

        <div
          className={`absolute left-1/2 top-full z-50 pt-4 transition duration-200 ${
            openMenu === 'about'
              ? 'pointer-events-auto translate-y-0 opacity-100'
              : 'pointer-events-none -translate-y-2 opacity-0'
          }`}
          onMouseEnter={() => open('about')}
        >
          <div className="relative w-[40rem] max-w-[calc(100vw-2rem)] -translate-x-1/3 rounded-3xl bg-white p-8 shadow-[0_24px_80px_rgba(0,0,0,0.12)] dark:bg-[#1a1a1a]">
            <div className="absolute -top-1.5 left-1/3 h-3 w-3 -translate-x-full rotate-45 rounded-sm bg-white dark:bg-[#1a1a1a]" />
            <div className="flex gap-2">
              <div className="flex w-[55%] flex-col items-start pr-2">
                {aboutLinks.map((item) => (
                  <DropdownLink key={item.label} item={item} onClick={closeAll} />
                ))}
              </div>
              <div className="w-[45%] pl-2">
                <FeaturedCard
                  title="Watch our Showreel"
                  description="Want a snippet of our work in under a minute? We’ve got just the thing for ya..."
                  href={anchors.work}
                  image={IMG.sketch}
                  onClick={closeAll}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href={anchors.blog}
        className="rounded-full px-3 py-2 text-sm font-medium text-nd-ink/80 transition hover:bg-black/[0.04] hover:text-nd-ink dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white"
        onMouseEnter={scheduleClose}
      >
        Blog
      </a>
      <Link
        to={routes.contact}
        className="rounded-full px-3 py-2 text-sm font-medium text-nd-ink/80 transition hover:bg-black/[0.04] hover:text-nd-ink dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white"
        onMouseEnter={scheduleClose}
        onClick={scheduleClose}
      >
        Contact
      </Link>
    </nav>
  )
}
