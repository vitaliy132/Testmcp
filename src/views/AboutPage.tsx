import {
  AboutHero,
  AboutIntro,
  AboutShowreel,
  AwardLogos,
  AwardsMarquee,
  ReviewsCarousel,
  StatsCarousel,
} from '@/features/about'

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <AwardLogos />
      <AboutShowreel />
      <StatsCarousel />
      <ReviewsCarousel />
      <AwardsMarquee />
    </>
  )
}
