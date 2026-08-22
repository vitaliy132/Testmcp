'use client'

import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { aboutIntro } from '@/features/about/data'
import { PageContainer } from '@/components/ui/PageContainer'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { SmartLink } from '@/components/ui/SmartLink'

const linkClassName =
  'rounded-md bg-nd-soft px-1 py-0.5 underline decoration-transparent transition duration-500 hover:bg-nd-lime dark:bg-white/10 dark:hover:bg-nd-lime dark:hover:text-nd-ink'

function IntroLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <SmartLink href={href} className={linkClassName} newTab={!href.startsWith('/')}>
      {children}
    </SmartLink>
  )
}

export function AboutIntro() {
  return (
    <section id="about-intro" className="scroll-mt-28 py-16 lg:py-24">
      <PageContainer variant="about">
        <div className="flex w-full flex-wrap">
          <div className="relative mb-8 w-full lg:mb-0 lg:w-[56%] lg:pr-10 xl:pr-16">
            <SectionEyebrow
              tone="muted"
              className="mb-3 inline-flex items-center gap-2 xl:absolute xl:left-4 xl:top-2"
            >
              {aboutIntro.eyebrow}
            </SectionEyebrow>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5 }}
              className="relative text-pretty text-2xl leading-none tracking-tight text-nd-ink md:text-3xl xl:indent-48 xl:text-4xl dark:text-white"
            >
              {aboutIntro.heading}
            </motion.h2>
          </div>
          <div className="w-full lg:w-[44%] xl:pr-10">
            <div className="space-y-6 text-base font-light leading-7 text-nd-muted xl:text-lg dark:text-white/65">
              <p>
                {aboutIntro.lead.before}
                <IntroLink href={aboutIntro.lead.branding.href}>
                  {aboutIntro.lead.branding.label}
                </IntroLink>
                {aboutIntro.lead.mid}
                <IntroLink href={aboutIntro.lead.webDesign.href}>
                  {aboutIntro.lead.webDesign.label}
                </IntroLink>
                {aboutIntro.lead.mid2}
                <IntroLink href={aboutIntro.lead.ecommerce.href}>
                  {aboutIntro.lead.ecommerce.label}
                </IntroLink>
                {aboutIntro.lead.mid3}
                <IntroLink href={aboutIntro.lead.seo.href}>{aboutIntro.lead.seo.label}</IntroLink>
                {aboutIntro.lead.after}
              </p>
              {aboutIntro.paragraphs.map((p) =>
                typeof p === 'string' ? (
                  <p key={p.slice(0, 40)}>{p}</p>
                ) : (
                  <p key={p.before.slice(0, 40)}>
                    {p.before}
                    <IntroLink href={p.link.href}>{p.link.label}</IntroLink>
                    {p.after}
                  </p>
                ),
              )}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
