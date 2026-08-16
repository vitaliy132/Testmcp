import type { ServicePageContent } from '@/features/service/data/pages'
import { AccordionFaq } from '@/components/ui/AccordionFaq'
import { FaqSectionLayout } from '@/components/ui/FaqSectionLayout'
import { PageContainer } from '@/components/ui/PageContainer'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { StartProjectButton } from '@/components/ui/StartProjectButton'
import { routes } from '@/config/routes'

export function ServiceFaqs({ service }: { service: ServicePageContent }) {
  return (
    <section className="py-16 lg:py-24">
      <PageContainer>
        <FaqSectionLayout
          intro={
            <>
              <SectionEyebrow>FAQs</SectionEyebrow>
              <h2 className="max-w-lg text-[clamp(1.5rem,3vw,2.5rem)] leading-none tracking-tight">
                {service.faqsTitle}
              </h2>
              <StartProjectButton href={routes.planner} label="Get in touch" />
            </>
          }
        >
          {service.faqs.map((item) => (
            <AccordionFaq key={item.question} item={item} />
          ))}
        </FaqSectionLayout>
      </PageContainer>
    </section>
  )
}
