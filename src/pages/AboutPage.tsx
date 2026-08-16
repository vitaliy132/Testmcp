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
import { PageContainer } from '@/components/ui/PageContainer'

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <AwardLogos />
      <section className="pb-20 lg:pb-24 2xl:pb-32">
        <PageContainer variant="about">
          <AboutShowreel />
        </PageContainer>
      </section>
      <TeamSection />
      <section className="pb-20 lg:pb-24">
        <PageContainer variant="about">
          <StatsCarousel />
        </PageContainer>
      </section>
      <ReviewsCarousel />
      <AwardsMarquee />
    </>
  )
}
