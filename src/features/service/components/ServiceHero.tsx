import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { ServicePageContent } from '@/features/service/data/pages'
import { StartProjectButton } from '@/components/ui/StartProjectButton'
import { PageContainer } from '@/components/ui/PageContainer'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { homeHash, routes, anchors } from '@/config/routes'

export function ServiceHero({ service }: { service: ServicePageContent }) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      <PageContainer>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-5"
        >
          <SectionEyebrow>{service.eyebrow}</SectionEyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.06 }}
          className="mb-6 max-w-3xl text-[clamp(2rem,5vw,4rem)] font-medium leading-none tracking-tight text-balance"
        >
          {service.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 max-w-2xl text-base font-light leading-7 text-nd-muted lg:text-lg dark:text-white/65"
        >
          {service.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.14 }}
          className="flex flex-wrap items-center gap-4"
        >
          <StartProjectButton href={routes.planner} label="Start a project" />
          <Link
            to={homeHash(anchors.work)}
            className="text-sm font-light text-nd-muted underline-offset-4 transition hover:text-nd-ink hover:underline dark:text-white/60 dark:hover:text-white"
          >
            View our work
          </Link>
        </motion.div>
      </PageContainer>
    </section>
  )
}
