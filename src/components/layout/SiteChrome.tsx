'use client'

import { usePathname } from 'next/navigation'
import { useEffect, type ReactNode } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ButtonGooFilter } from '@/components/ui/GooeyButton'
import { scrollToHash } from '@/lib/scroll'

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    const run = () => {
      if (window.location.hash) return scrollToHash(window.location.hash)
      window.scrollTo(0, 0)
    }

    run()
    window.addEventListener('hashchange', run)
    return () => window.removeEventListener('hashchange', run)
  }, [pathname])

  return (
    <div className="min-h-screen bg-white text-nd-ink transition-colors duration-300 dark:bg-nd-dark dark:text-white">
      <ButtonGooFilter />
      <Header />
      <main className="relative z-0 isolate">{children}</main>
      <Footer />
    </div>
  )
}
