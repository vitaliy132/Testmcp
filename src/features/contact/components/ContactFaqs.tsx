import { Link } from 'react-router-dom'
import { contactContent, contactFaqs } from '@/features/contact/data'
import { AccordionFaq } from '@/components/ui/AccordionFaq'
import { FaqSectionLayout } from '@/components/ui/FaqSectionLayout'
import { PageContainer } from '@/components/ui/PageContainer'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'

export function ContactFaqs() {
  return (
    <section className="bg-[#f5f5f5] py-16 lg:py-24 dark:bg-[#171717]">
      <PageContainer>
        <FaqSectionLayout
          intro={
            <>
              <SectionEyebrow>{contactContent.faqsEyebrow}</SectionEyebrow>
              <h2 className="max-w-lg text-[clamp(1.5rem,3vw,2.5rem)] leading-none tracking-tight">
                {contactContent.faqsTitle}
              </h2>
              <Link
                to={contactContent.viewAllFaqsHref}
                className="text-sm font-medium underline-offset-4 transition hover:underline"
              >
                {contactContent.viewAllFaqs}
              </Link>
            </>
          }
        >
          {contactFaqs.map((item) => (
            <AccordionFaq key={item.question} item={item} dashPlainBullets />
          ))}
        </FaqSectionLayout>
      </PageContainer>
    </section>
  )
}
