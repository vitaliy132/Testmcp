import { brand } from '@/config/brand'
import {
  AboutHero,
  AboutIntro,
  AboutShowreel,
  AwardLogos,
  AwardsMarquee,
  ReviewsCarousel,
  StatsCarousel,
  TeamSection,
} from '@/features/about'
import { usePageTitle } from '@/hooks/usePageTitle'

export function AboutPage() {
  usePageTitle(`About | ${brand.name}`)

  return (
    <>
      <AboutHero />
      <AboutIntro />
      <AwardLogos />
      <AboutShowreel />
      <TeamSection />
      <StatsCarousel />
      <ReviewsCarousel />
      <AwardsMarquee />
    </>
  )
}
