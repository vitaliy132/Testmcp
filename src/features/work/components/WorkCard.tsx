import { motion } from 'framer-motion'
import type { WorkItem } from '@/data/work'
import { CornerFillet } from '@/components/ui/CornerFillet'
import { SmartLink } from '@/components/ui/SmartLink'

function TagPills({
  tags,
  extra,
  compact,
}: {
  tags: string[]
  extra: number
  compact?: boolean
}) {
  return (
    <div className="relative z-10 -mb-2 -mr-2 flex max-w-[min(100%,16rem)] flex-wrap items-center sm:max-w-none">
      {tags.map((tag) => (
        <span
          key={tag}
          className={`mb-2 mr-2 inline-flex max-w-[9rem] truncate rounded-full bg-nd-soft px-3 text-sm leading-tight text-nd-ink sm:max-w-none dark:bg-[#2a2a2a] dark:text-white ${
            compact ? 'py-1' : 'py-1.5 sm:px-4 lg:mb-3 lg:mr-3'
          }`}
        >
          {tag}
        </span>
      ))}
      {extra > 0 ? (
        <span className="mb-2 mr-2 inline-flex pr-6 text-sm text-nd-muted lg:hidden dark:text-white/55">
          + {extra}
        </span>
      ) : null}
      {compact
        ? null
        : tags.length
          ? null
          : null}
    </div>
  )
}

function WorkCardTags({
  project,
  variant,
}: {
  project: WorkItem
  variant: 'home' | 'related'
}) {
  const visibleTags = project.tags.slice(0, 2)
  const extraTags = project.tags.length - visibleTags.length
  const related = variant === 'related'

  return (
    <div
      className={`absolute -top-px -right-px z-20 rounded-bl-3xl bg-white pb-3 pl-3 pt-px dark:bg-nd-dark ${
        related
          ? ''
          : 'transition-transform duration-300 xl:-translate-y-full xl:group-hover:translate-y-0'
      }`}
    >
      <CornerFillet
        className={`absolute top-0 left-px -translate-x-full text-white dark:text-nd-dark ${
          related ? 'h-8 w-8' : 'h-10 w-10'
        }`}
      />
      <CornerFillet
        className={`absolute right-0 bottom-px translate-y-full text-white dark:text-nd-dark ${
          related ? 'h-8 w-8' : 'h-10 w-10'
        }`}
      />
      <div className="relative z-10 -mb-2 -mr-2 flex max-w-[min(100%,16rem)] flex-wrap items-center sm:max-w-none">
        {visibleTags.map((tag) => (
          <span
            key={tag}
            className={`mb-2 mr-2 inline-flex max-w-[9rem] truncate rounded-full bg-nd-soft px-3 text-sm leading-tight text-nd-ink sm:max-w-none dark:bg-[#2a2a2a] dark:text-white ${
              related ? 'py-1' : 'py-1.5 sm:px-4 lg:mb-3 lg:mr-3'
            }`}
          >
            {tag}
          </span>
        ))}
        {related || extraTags <= 0 ? null : (
          <span className="mb-2 mr-2 inline-flex pr-6 text-sm text-nd-muted lg:hidden dark:text-white/55">
            + {extraTags}
          </span>
        )}
        {related
          ? null
          : project.tags.slice(2).map((tag) => (
              <span
                key={tag}
                className="mb-2 mr-2 hidden rounded-full bg-nd-soft px-4 py-1.5 text-sm leading-tight text-nd-ink lg:mb-3 lg:mr-3 lg:inline-flex dark:bg-[#2a2a2a] dark:text-white"
              >
                {tag}
              </span>
            ))}
      </div>
    </div>
  )
}

function WorkCardBody({
  project,
  variant,
}: {
  project: WorkItem
  variant: 'home' | 'related'
}) {
  const related = variant === 'related'
  const title = related ? (project.caseStudy?.headline ?? project.title) : project.title

  return (
    <SmartLink
      href={project.href}
      className={`group flex w-full flex-col items-start ${related ? '' : 'relative'}`}
    >
      <div className={`relative w-full overflow-hidden ${related ? 'mb-5' : 'mb-6'}`}>
        <WorkCardTags project={project} variant={variant} />
        <div className="relative w-full overflow-hidden rounded-2xl bg-nd-soft lg:rounded-3xl dark:bg-[#1a1a1a]">
          <div className="aspect-[4/3] w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.imageAlt}
              width={1200}
              height={900}
              sizes={related ? '(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw' : '(min-width: 768px) 50vw, 100vw'}
              loading="lazy"
              decoding="async"
              className={`h-full w-full origin-center scale-105 object-cover transition-transform duration-500 ease-out ${
                related ? 'group-hover:scale-110' : 'xl:group-hover:scale-110'
              }`}
              style={{ objectPosition: project.imagePosition }}
            />
          </div>
        </div>
      </div>

      <div
        className={`mb-2 flex items-center gap-3 text-sm text-nd-muted dark:text-white/55 ${
          related ? '' : 'lg:text-base'
        }`}
      >
        <span className="font-light">{project.year}</span>
        <span className="relative -top-px h-1.5 w-1.5 rounded-full bg-nd-ink dark:bg-white/50" />
        <span className="font-light">{project.client}</span>
      </div>

      <h3
        className={
          related
            ? 'max-w-sm text-lg leading-tight tracking-tight xl:text-xl'
            : 'max-w-md pr-10 text-xl leading-tight tracking-tight xl:text-2xl'
        }
      >
        {title}
      </h3>
    </SmartLink>
  )
}

export function WorkCard({
  project,
  variant = 'home',
  index = 0,
}: {
  project: WorkItem
  variant?: 'home' | 'related'
  index?: number
}) {
  if (variant === 'related') {
    return <WorkCardBody project={project} variant="related" />
  }

  const stagger = index % 2 === 0
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: (index % 2) * 0.06 }}
      className={`mb-16 w-full px-2 md:mb-28 md:w-1/2 lg:px-3 xl:px-4 ${stagger ? 'md:mt-20' : ''}`}
    >
      <WorkCardBody project={project} variant="home" />
    </motion.div>
  )
}
