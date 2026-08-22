import { brand } from '@/config/brand'
import { routes } from '@/config/routes'
import { contactContent } from '@/features/contact/data'
import { StartProjectButton } from '@/components/ui/StartProjectButton'
import { PageContainer } from '@/components/ui/PageContainer'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { Reveal } from '@/components/ui/Reveal'
import { ContactForm } from '@/features/contact/components/ContactForm'

export function ContactHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      <PageContainer>
        <Reveal className="mb-5">
          <SectionEyebrow>{contactContent.eyebrow}</SectionEyebrow>
        </Reveal>

        <Reveal
          as="h1"
          delay={0.06}
          y={20}
          duration={0.55}
          className="mb-12 max-w-3xl text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-none tracking-tight text-balance lg:mb-16"
        >
          {contactContent.headline}
        </Reveal>

        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-16">
          <div className="w-full lg:w-[38%] lg:shrink-0">
            <p className="mb-8 text-base font-light leading-7 text-nd-muted lg:text-[1.05rem] dark:text-white/65">
              {contactContent.intro}
            </p>
            <div className="mb-10">
              <StartProjectButton href={routes.planner} label={contactContent.plannerCta} />
            </div>

            <p className="mb-2 text-sm font-light text-nd-muted dark:text-white/55">
              {contactContent.hateFormsLabel}
            </p>
            <a
              href={`mailto:${brand.email}`}
              className="text-lg tracking-tight text-nd-ink underline-offset-4 transition hover:underline dark:text-white"
            >
              {brand.email}
            </a>
          </div>

          <div className="w-full min-w-0 lg:flex-1">
            <ContactForm />
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
