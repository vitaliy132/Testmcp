import { Outlet, useLocation } from 'react-router-dom'
import { Suspense, useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ButtonGooFilter } from '@/components/ui/GooeyButton'
import { PageFallback } from '@/components/ui/PageFallback'
import { scrollToHash } from '@/lib/scroll'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) return scrollToHash(location.hash)
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return (
    <div className="min-h-screen bg-white text-nd-ink transition-colors duration-300 dark:bg-nd-dark dark:text-white">
      <ButtonGooFilter />
      <Header />
      <main>
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
