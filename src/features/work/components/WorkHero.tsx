import { motion } from 'framer-motion'
import type { WorkCaseStudyItem } from '@/features/work/projects'
import { CornerFillet } from '@/components/ui/CornerFillet'
import { PageContainer } from '@/components/ui/PageContainer'

function TagPills({ tags }: { tags: string[] }) {
  return (
    <>
      {tags.map((tag) => (
        <span
          key={tag}
          className="mb-2 mr-2 inline-flex max-w-[9rem] truncate rounded-full bg-nd-soft px-3 py-1.5 text-sm leading-tight text-nd-ink sm:max-w-none sm:px-4 lg:mb-3 lg:mr-3 lg:text-base dark:bg-[#2a2a2a] dark:text-white"
        >
          {tag}
        </span>
      ))}
    </>
  )
}

export function WorkHero({ project }: { project: WorkCaseStudyItem }) {
  const visibleTags = project.tags.slice(0, 2)

  return (
    <section className="relative pt-28 lg:pt-40">
      <PageContainer variant="about">
        <div className="relative z-20 mb-0 flex flex-wrap items-start justify-between">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-2 hidden w-full flex-wrap items-center lg:mb-0 lg:flex lg:w-[37.5%]"
          >
            <TagPills tags={visibleTags} />
          </motion.div>

          <div className="w-full lg:w-[62.5%]">
            <div className="relative rounded-bl-2xl bg-white lg:rounded-bl-3xl lg:px-10 lg:pb-5 dark:bg-nd-dark">
              <CornerFillet className="absolute bottom-2 left-0 z-30 hidden h-10 w-10 -translate-x-full text-white lg:block lg:h-12 lg:w-12 dark:text-nd-dark" />
              <CornerFillet className="absolute right-0 bottom-0 z-30 hidden h-10 w-10 translate-y-full text-white lg:block lg:h-12 lg:w-12 dark:text-nd-dark" />

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mb-3 flex items-center gap-3 text-sm text-nd-muted lg:text-base xl:mb-5 dark:text-white/55"
              >
                <span className="font-light">{project.year}</span>
                <span className="relative -top-px h-1.5 w-1.5 rounded-full bg-nd-ink dark:bg-white/50" />
                <span className="font-light">{project.client}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.06 }}
                className="text-[clamp(1.75rem,4vw,3.75rem)] font-medium leading-none tracking-tight text-balance"
              >
                {project.caseStudy.headline}
              </motion.h1>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="relative lg:-mt-6"
        >
          <div className="absolute -top-px -right-px z-20 rounded-bl-3xl bg-white pb-3 pl-3 pt-px lg:hidden dark:bg-nd-dark">
            <CornerFillet className="absolute top-0 left-px h-10 w-10 -translate-x-full text-white dark:text-nd-dark" />
            <CornerFillet className="absolute right-0 bottom-px h-10 w-10 translate-y-full text-white dark:text-nd-dark" />
            <div className="relative z-10 -mb-2 -mr-2 flex max-w-[min(100%,16rem)] flex-wrap items-center sm:max-w-none">
              <TagPills tags={visibleTags} />
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-nd-soft lg:rounded-3xl dark:bg-[#1a1a1a]">
            <div className="aspect-[4/3] w-full overflow-hidden lg:aspect-[16/9]">
              <img
                src={project.image}
                alt={project.imageAlt}
                decoding="async"
                className="h-full w-full object-cover"
                style={{ objectPosition: project.imagePosition }}
              />
            </div>
          </div>
        </motion.div>
      </PageContainer>
    </section>
  )
}
