import { Hero } from '@/components/home/Hero'
import { About } from '@/components/home/About'
import { BrandMarquee } from '@/components/home/BrandMarquee'
import { Work } from '@/components/home/Work'
import { Services } from '@/components/home/Services'
import { Testimonial } from '@/components/home/Testimonial'
import { Blog } from '@/components/home/Blog'
import { AiSection } from '@/components/home/AiSection'

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <BrandMarquee />
      <Work />
      <Services />
      <Testimonial />
      <Blog />
      <AiSection />
    </>
  )
}
