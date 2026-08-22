import { brand } from '@/config/brand'
import { Hero, About, BrandMarquee, Work, Services, BlogTeaser, AiSection } from '@/features/home'
import { usePageTitle } from '@/hooks/usePageTitle'

export function HomePage() {
  usePageTitle(brand.title)

  return (
    <>
      <Hero />
      <About />
      <BrandMarquee />
      <Work />
      <Services />
      <BlogTeaser />
      <AiSection />
    </>
  )
}
