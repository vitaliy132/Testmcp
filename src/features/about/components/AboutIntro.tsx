import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { aboutIntro } from '@/data/about'

function isInternalPath(href: string) {
  return href.startsWith('/') && !href.startsWith('//')
}

const linkClassName =
  'rounded-md bg-nd-soft px-1 py-0.5 underline decoration-transparent transition duration-500 hover:bg-nd-lime dark:bg-white/10 dark:hover:bg-nd-lime dark:hover:text-nd-ink'

function IntroLink({ href, children }: { href: string; children: ReactNode }) {
  if (isInternalPath(href)) {
    return (
      <Link to={href} className={linkClassName}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className={linkClassName}>
      {children}
    </a>
  )
}

export function AboutIntro() {
  return (
    <section id="about-intro" className="scroll-mt-28 py-16 lg:py-24">
      <div className="mx-auto w-full px-2 sm:px-6 xl:px-12 2xl:px-20">
        <div className="flex w-full flex-wrap">
          <div className="relative mb-8 w-full lg:mb-0 lg:w-[56%] lg:pr-10 xl:pr-16">
            <div className="mb-3 inline-flex items-center gap-2 xl:absolute xl:left-4 xl:top-2">
              <span className="h-1.5 w-1.5 rounded-full bg-nd-muted dark:bg-white/80" />
              <span className="text-sm font-light text-nd-muted lg:text-base dark:text-white/80">
                {aboutIntro.eyebrow}
              </span>
            </div>
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
      </div>
    </section>
  )
}
