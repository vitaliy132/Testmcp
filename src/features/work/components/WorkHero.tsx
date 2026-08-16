import { motion } from 'framer-motion'
import type { WorkCaseStudyItem } from '@/data/work'
import { workPageCopy } from '@/features/work/data'
import { PageContainer } from '@/components/ui/PageContainer'
import { StartProjectButton } from '@/components/ui/StartProjectButton'

export function WorkHero({ project }: { project: WorkCaseStudyItem }) {
  const visibleTags = project.tags.slice(0, 2)

  return (
    <section className="relative overflow-hidden pt-28 pb-8 lg:pt-36 lg:pb-12">
      <PageContainer>
        <div className="mb-8 flex flex-wrap items-start justify-between gap-6 lg:mb-12">
          <div className="min-w-0 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-5 flex flex-wrap items-center gap-2"
            >
              {visibleTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex rounded-full bg-nd-soft px-4 py-1.5 text-sm leading-tight text-nd-ink dark:bg-[#2a2a2a] dark:text-white"
                >
                  {tag}
                </span>
              ))}
              <span className="px-2 text-sm font-light text-nd-muted dark:text-white/55">{project.year}</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.04 }}
              className="mb-3 text-lg font-medium tracking-tight lg:text-xl"
            >
              {project.client}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-[clamp(2.25rem,6vw,5rem)] font-medium leading-none tracking-tight text-balance"
            >
              {project.caseStudy.headline}
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="shrink-0"
          >
            <StartProjectButton href={project.liveUrl} label={workPageCopy.liveCta} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.14 }}
          className="overflow-hidden rounded-2xl bg-nd-soft lg:rounded-3xl dark:bg-[#1a1a1a]"
        >
          <div className="aspect-[4/3] w-full overflow-hidden lg:aspect-[16/9]">
            <img
              src={project.image}
              alt={project.imageAlt}
              className="h-full w-full object-cover"
              style={{ objectPosition: project.imagePosition }}
            />
          </div>
        </motion.div>
      </PageContainer>
    </section>
  )
}
