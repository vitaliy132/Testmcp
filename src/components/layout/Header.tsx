'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { brand } from '@/config/brand'
import { routes } from '@/config/routes'
import { StartProjectButton } from '@/components/ui/StartProjectButton'
import { DesktopNav } from '@/components/layout/header/DesktopNav'
import { MobileNav } from '@/components/layout/header/MobileNav'
import { ThemeToggle } from '@/components/layout/header/ThemeToggle'
import { useHeaderScroll } from '@/components/layout/header/useHeaderScroll'
import type { OpenMenu } from '@/types/nav'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null)
  const [mobileExpanded, setMobileExpanded] = useState<OpenMenu>(null)
  const closeTimer = useRef<number | null>(null)
  const { headerSmall, headerHidden, setHeaderHidden, barWidth } = useHeaderScroll(
    menuOpen || openMenu !== null,
  )

  const open = (menu: OpenMenu) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    setOpenMenu(menu)
    setHeaderHidden(false)
  }

  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 120)
  }

  const closeAll = () => {
    setOpenMenu(null)
    setMenuOpen(false)
    setMobileExpanded(null)
  }

  useEffect(() => {
    if (!menuOpen) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [menuOpen])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = () => {
      if (!mq.matches) return
      setOpenMenu(null)
      setMenuOpen(false)
      setMobileExpanded(null)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const pillActive = headerSmall || menuOpen || openMenu !== null

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] isolate flex transform-gpu justify-center px-2 pb-2 pt-[max(0.5rem,env(safe-area-inset-top))] lg:pb-3 lg:pt-[max(0.75rem,env(safe-area-inset-top))]"
    >
      <div
        className={`pointer-events-auto w-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          headerHidden ? '-translate-y-20 lg:-translate-y-28' : 'translate-y-0'
        }`}
      >
        <header
          className={`relative mx-auto flex flex-col transition-[width,border-radius,background-color,box-shadow,padding] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            menuOpen ? 'w-full rounded-2xl' : 'w-full rounded-3xl lg:w-[98vw] lg:rounded-full'
          } ${
            pillActive
              ? 'bg-white/90 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-md dark:bg-[#1a1a1a]/90 dark:shadow-[0_12px_40px_rgba(0,0,0,0.35)]'
              : 'bg-white/70 backdrop-blur-sm dark:bg-[#1a1a1a]/70'
          } ${headerSmall ? 'py-2 pr-2 pl-3 lg:p-2' : 'py-3 pr-3 pl-3 lg:p-4'}`}
          style={{
            maxWidth: '1400px',
            ...(menuOpen ? { width: '100%' } : headerSmall ? { width: barWidth } : {}),
          }}
          onMouseLeave={scheduleClose}
        >
          <div className="flex w-full flex-nowrap items-center justify-between gap-2">
            <Link
              href={routes.home}
              className="group relative z-10 ml-1 min-w-0 shrink font-medium tracking-tight text-nd-ink transition hover:opacity-80 dark:text-white lg:ml-4"
              aria-label={`${brand.name} home`}
              onClick={closeAll}
            >
              <span
                className={`block truncate leading-none transition-all duration-500 ${
                  headerSmall ? 'text-base lg:text-lg' : 'text-lg lg:text-xl'
                }`}
              >
                {brand.name}
                <span
                  className="ml-0.5 inline-block h-1.5 w-1.5 translate-y-[-0.15em] rounded-[2px] bg-current transition group-hover:bg-nd-lime"
                  aria-hidden
                />
              </span>
            </Link>

            <DesktopNav
              openMenu={openMenu}
              open={open}
              scheduleClose={scheduleClose}
              closeAll={closeAll}
            />

            <div className="relative z-10 flex shrink-0 items-center gap-2 sm:gap-3">
              <ThemeToggle />
              <span className="hidden lg:inline-flex" onMouseEnter={scheduleClose}>
                <StartProjectButton />
              </span>
              <button
                type="button"
                className="grid h-10 w-10 place-items-center rounded-full bg-nd-soft transition hover:scale-105 lg:hidden dark:bg-[#2a2a2a]"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                onClick={() => {
                  setMenuOpen((v) => !v)
                  setHeaderHidden(false)
                }}
              >
                {menuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>

          <MobileNav
            menuOpen={menuOpen}
            mobileExpanded={mobileExpanded}
            setMobileExpanded={setMobileExpanded}
            closeAll={closeAll}
          />
        </header>
      </div>
    </div>
  )
}
