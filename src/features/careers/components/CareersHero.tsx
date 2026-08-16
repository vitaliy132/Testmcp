import { motion } from 'framer-motion'
import { careersContent } from '@/features/careers/data'
import { PageContainer } from '@/components/ui/PageContainer'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { StartProjectButton } from '@/components/ui/StartProjectButton'

export function CareersHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      <PageContainer>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-5"
        >
          <SectionEyebrow>{careersContent.eyebrow}</SectionEyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.06 }}
          className="mb-6 max-w-4xl text-[clamp(2.25rem,6vw,5rem)] font-medium leading-none tracking-tight text-balance"
        >
          {careersContent.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 max-w-2xl text-base font-light leading-7 text-nd-muted lg:text-lg dark:text-white/65"
        >
          {careersContent.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.14 }}
        >
          <StartProjectButton href={careersContent.positionsAnchor} label={careersContent.cta} />
        </motion.div>
      </PageContainer>
    </section>
  )
}
