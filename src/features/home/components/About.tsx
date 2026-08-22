'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { brand } from '@/config/brand'
import { anchors, routes } from '@/config/routes'
import { aboutTeaser } from '@/features/home/data/copy'
import { PageContainer } from '@/components/ui/PageContainer'

export function About() {
  return (
    <section id="about" className="scroll-mt-28 py-16 lg:py-24">
      <PageContainer>
        <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr] lg:gap-16">
          <p className="text-sm font-medium text-nd-muted dark:text-white/55">{aboutTeaser.eyebrow}</p>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="max-w-[22ch] text-[clamp(1.6rem,3.2vw,2.7rem)] leading-[1.15] tracking-tight"
            >
              {aboutTeaser.before}{' '}
              <a href={anchors.services} className="underline decoration-nd-lime decoration-4 underline-offset-4">
                {aboutTeaser.webDesign}
              </a>{' '}
              {aboutTeaser.and}{' '}
              <a href={anchors.services} className="underline decoration-nd-lime decoration-4 underline-offset-4">
                {aboutTeaser.branding}
              </a>{' '}
              {aboutTeaser.after}
            </motion.h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={routes.about} className="btn-lime">
                About {brand.name}
              </Link>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
