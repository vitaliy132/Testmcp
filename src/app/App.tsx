import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ButtonGooFilter } from '@/components/ui/GooeyButton'
import { scrollToHash } from '@/lib/scroll'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const t = window.setTimeout(() => scrollToHash(location.hash), 80)
      return () => window.clearTimeout(t)
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return (
    <div className="min-h-screen bg-white text-nd-ink transition-colors duration-300 dark:bg-[#121212] dark:text-white">
      <ButtonGooFilter />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
