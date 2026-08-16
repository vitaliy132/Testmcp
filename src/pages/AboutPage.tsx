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

export function AboutPage() {
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
