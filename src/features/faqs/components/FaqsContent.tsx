import { motion } from 'framer-motion'
import { faqHero, faqSections } from '@/features/faqs/data'
import { AccordionFaq } from '@/components/ui/AccordionFaq'
import { FaqSectionLayout } from '@/components/ui/FaqSectionLayout'
import { PageContainer } from '@/components/ui/PageContainer'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { StartProjectButton } from '@/components/ui/StartProjectButton'
import { routes } from '@/config/routes'

export function FaqsContent() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      <PageContainer>
        <FaqSectionLayout
          intro={
            <>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
              >
                <SectionEyebrow>{faqHero.title}</SectionEyebrow>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.06 }}
                className="max-w-lg text-[clamp(1.75rem,4vw,3rem)] font-medium leading-none tracking-tight lg:max-w-none"
              >
                {faqHero.headline[0]}
                <br />
                {faqHero.headline[1]}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12 }}
              >
                <StartProjectButton href={routes.planner} label="Get in touch now" />
              </motion.div>
            </>
          }
        >
          {faqSections.map((section, sIdx) => (
            <div key={section.title} className={sIdx === 0 ? '' : 'mt-10 lg:mt-14'}>
              <h2 className="mb-3 text-xl tracking-tight lg:mb-5 lg:text-2xl">{section.title}</h2>
              <div>
                {section.items.map((item) => (
                  <AccordionFaq key={item.question} item={item} />
                ))}
              </div>
            </div>
          ))}
        </FaqSectionLayout>
      </PageContainer>
    </section>
  )
}
