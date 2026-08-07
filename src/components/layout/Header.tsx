import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { brand } from '@/config/brand'
import { routes } from '@/config/links'
import { StartProjectButton } from '@/components/ui/StartProjectButton'
import { DesktopNav, type OpenMenu } from '@/components/layout/header/DesktopNav'
import { MobileNav } from '@/components/layout/header/MobileNav'
import { ThemeToggle } from '@/components/layout/header/ThemeToggle'

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n))
}

export function Header() {
  const [headerSmall, setHeaderSmall] = useState(false)
  const [headerHidden, setHeaderHidden] = useState(false)
  const [barWidth, setBarWidth] = useState('98vw')
  const [menuOpen, setMenuOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null)
  const [mobileExpanded, setMobileExpanded] = useState<OpenMenu>(null)
  const closeTimer = useRef<number | null>(null)
  const lastY = useRef(0)
  const direction = useRef<'up' | 'down'>('up')

  useEffect(() => {
    const update = () => {
      const y = window.scrollY
      const delta = y - lastY.current

      if (Math.abs(delta) > 4) {
        direction.current = delta > 0 ? 'down' : 'up'
        lastY.current = y
      }

      const small = y > 80
      setHeaderSmall(small)

      // Match Shape: shrink width as you scroll, then settle
      const progress = clamp(y / 280, 0, 1)
      const width = 98 - progress * 18 // 98vw → ~80vw
      setBarWidth(small ? `${width.toFixed(2)}vw` : '98vw')

      // Hide when scrolling down past 400px; show when scrolling up or near top
      const shouldHide = direction.current === 'down' && y > 400 && !menuOpen && !openMenu
      setHeaderHidden(shouldHide)
    }

    lastY.current = window.scrollY
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [menuOpen, openMenu])

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

  const pillActive = headerSmall || menuOpen || openMenu !== null

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-2 py-2 lg:py-3 ${
        headerHidden ? 'pointer-events-none' : 'pointer-events-none'
      }`}
    >
      <div
        className={`pointer-events-auto w-full transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          headerHidden ? '-translate-y-20 lg:-translate-y-28' : 'translate-y-0'
        }`}
      >
        <header
          className={`relative mx-auto flex flex-wrap items-center justify-between pl-3 transition-[width,border-radius,background-color,box-shadow,padding] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            menuOpen ? 'rounded-2xl' : 'rounded-3xl lg:rounded-full'
          } ${
            pillActive
              ? 'bg-white/90 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-md dark:bg-[#1a1a1a]/90 dark:shadow-[0_12px_40px_rgba(0,0,0,0.35)]'
              : 'bg-white/70 backdrop-blur-sm dark:bg-[#1a1a1a]/70'
          } ${headerSmall ? 'py-2 pr-2 lg:p-2 lg:pr-2' : 'py-3 pr-3 lg:p-4'}`}
          style={{ width: menuOpen ? 'min(98vw, 100%)' : barWidth, maxWidth: '1400px' }}
          onMouseLeave={scheduleClose}
        >
          <Link
            to={routes.home}
            className="group relative z-10 ml-1 shrink-0 font-medium tracking-tight text-nd-ink transition hover:opacity-80 dark:text-white lg:ml-4"
            aria-label={`${brand.name} home`}
            onClick={closeAll}
          >
            <span className={`leading-none transition-all duration-500 ${headerSmall ? 'text-base lg:text-lg' : 'text-lg lg:text-xl'}`}>
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

          <div className="relative z-10 flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <span className="hidden sm:inline-flex" onMouseEnter={scheduleClose}>
              <StartProjectButton />
            </span>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full bg-nd-soft transition hover:scale-105 md:hidden dark:bg-[#2a2a2a]"
              aria-label="Toggle menu"
              onClick={() => {
                setMenuOpen((v) => !v)
                setHeaderHidden(false)
              }}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
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
