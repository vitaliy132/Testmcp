import { faqHero, faqSections } from '@/features/faqs/data'
import { AccordionFaq } from '@/components/ui/AccordionFaq'
import { FaqSectionLayout } from '@/components/ui/FaqSectionLayout'
import { PageContainer } from '@/components/ui/PageContainer'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { StartProjectButton } from '@/components/ui/StartProjectButton'
import { Reveal } from '@/components/ui/Reveal'
import { routes } from '@/config/routes'

export function FaqsContent() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      <PageContainer>
        <FaqSectionLayout
          intro={
            <>
              <Reveal>
                <SectionEyebrow>{faqHero.title}</SectionEyebrow>
              </Reveal>

              <Reveal
                as="h1"
                delay={0.06}
                y={20}
                duration={0.55}
                className="max-w-lg text-[clamp(1.75rem,4vw,3rem)] font-medium leading-none tracking-tight lg:max-w-none"
              >
                {faqHero.headline[0]}
                <br />
                {faqHero.headline[1]}
              </Reveal>

              <Reveal delay={0.12}>
                <StartProjectButton href={routes.planner} label="Get in touch now" />
              </Reveal>
            </>
          }
        >
          {faqSections.map((section, sIdx) => (
            <div key={section.title} className={sIdx === 0 ? '' : 'mt-10 lg:mt-14'}>
              <h2 className="mb-3 text-xl tracking-tight lg:mb-5 lg:text-2xl">{section.title}</h2>
              <div>
                {section.items.map((item) => (
                  <AccordionFaq key={item.id ?? item.question} item={item} />
                ))}
              </div>
            </div>
          ))}
        </FaqSectionLayout>
      </PageContainer>
    </section>
  )
}
