import type { ReactNode } from 'react'
import { PageContainer } from '@/components/ui/PageContainer'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { Reveal } from '@/components/ui/Reveal'

export function PageHero({
  eyebrow,
  title,
  intro,
  titleClassName = 'mb-6 max-w-3xl text-[clamp(2rem,5vw,4rem)] font-medium leading-none tracking-tight text-balance',
  children,
}: {
  eyebrow: string
  title: string
  intro?: string
  titleClassName?: string
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      <PageContainer>
        <Reveal className="mb-5">
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
        </Reveal>
        <Reveal as="h1" delay={0.06} y={20} duration={0.55} className={titleClassName}>
          {title}
        </Reveal>
        {intro ? (
          <Reveal
            as="p"
            delay={0.1}
            y={16}
            duration={0.5}
            className="mb-8 max-w-2xl text-base font-light leading-7 text-nd-muted lg:text-lg dark:text-white/65"
          >
            {intro}
          </Reveal>
        ) : null}
        {children ? (
          <Reveal delay={0.14} className="flex flex-wrap items-center gap-4">
            {children}
          </Reveal>
        ) : null}
      </PageContainer>
    </section>
  )
}
