import { motion } from 'framer-motion'
import { work, type WorkItem } from '@/data/work'
import { routes } from '@/config/routes'
import { workCopy } from '@/features/home/data/copy'
import { StartProjectButton } from '@/components/ui/StartProjectButton'
import { CornerFillet } from '@/components/ui/CornerFillet'
import { PageContainer } from '@/components/ui/PageContainer'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { SmartLink } from '@/components/ui/SmartLink'

function CornerFillets() {
  return (
    <>
      <CornerFillet className="absolute top-0 left-px h-10 w-10 -translate-x-full text-white dark:text-[#121212]" />
      <CornerFillet className="absolute right-0 bottom-px h-10 w-10 translate-y-full text-white dark:text-[#121212]" />
    </>
  )
}

function WorkCta() {
  return (
    <div className="flex w-full flex-col items-center justify-center text-center">
      <h3 className="mb-5 text-[clamp(1.5rem,3vw,2.75rem)] leading-none tracking-tight">
        {workCopy.ctaHeading[0]}
        <br />
        {workCopy.ctaHeading[1]}
      </h3>
      <StartProjectButton href={routes.contact} label={workCopy.ctaLabel} />
    </div>
  )
}

function WorkCard({ project, index }: { project: WorkItem; index: number }) {
  const visibleTags = project.tags.slice(0, 2)
  const extraTags = project.tags.length - visibleTags.length
  const stagger = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: (index % 2) * 0.06 }}
      className={`mb-16 w-full px-2 md:mb-28 md:w-1/2 lg:px-3 xl:px-4 ${stagger ? 'md:mt-20' : ''}`}
    >
      <SmartLink href={project.href} className="group relative flex w-full flex-col items-start">
        <div className="relative mb-6 w-full overflow-hidden">
          {/* Top-right cutout: tags + fillets; hidden until hover on xl+ */}
          <div className="absolute -top-px -right-px z-20 rounded-bl-3xl bg-white pb-3 pl-3 pt-px transition-transform duration-300 xl:-translate-y-full xl:group-hover:translate-y-0 dark:bg-[#121212]">
            <CornerFillets />
            <div className="relative z-10 -mb-2 -mr-2 flex flex-wrap items-center">
              {visibleTags.map((tag) => (
                <span
                  key={tag}
                  className="mb-2 mr-2 inline-flex rounded-full bg-nd-soft px-4 py-1.5 text-sm leading-tight text-nd-ink dark:bg-[#2a2a2a] dark:text-white lg:mb-3 lg:mr-3"
                >
                  {tag}
                </span>
              ))}
              {extraTags > 0 ? (
                <span className="mb-2 mr-2 inline-flex pr-6 text-sm text-nd-muted lg:hidden dark:text-white/55">
                  + {extraTags}
                </span>
              ) : null}
              {project.tags.slice(2).map((tag) => (
                <span
                  key={tag}
                  className="mb-2 mr-2 hidden rounded-full bg-nd-soft px-4 py-1.5 text-sm leading-tight text-nd-ink lg:mb-3 lg:mr-3 lg:inline-flex dark:bg-[#2a2a2a] dark:text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative w-full overflow-hidden rounded-2xl bg-nd-soft lg:rounded-3xl dark:bg-[#1a1a1a]">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.imageAlt}
                loading="lazy"
                decoding="async"
                className="h-full w-full origin-center scale-105 object-cover transition-transform duration-500 ease-out xl:group-hover:scale-110"
                style={{ objectPosition: project.imagePosition }}
              />
            </div>
          </div>
        </div>

        <div className="mb-2 flex items-center gap-3 text-sm text-nd-muted lg:text-base dark:text-white/55">
          <span className="font-light">{project.year}</span>
          <span className="relative -top-px h-1.5 w-1.5 rounded-full bg-nd-ink dark:bg-white/50" />
          <span className="font-light">{project.client}</span>
        </div>

        <h3 className="max-w-md pr-10 text-xl leading-tight tracking-tight xl:text-2xl">
          {project.title}
        </h3>
      </SmartLink>
    </motion.div>
  )
}

export function Work() {
  const firstPair = work.slice(0, 2)
  const secondPair = work.slice(2)

  return (
    <section id="work" className="py-16 lg:py-24">
      <PageContainer variant="work">
        <div className="mb-10 flex flex-col items-start gap-3 lg:mb-16 lg:gap-5">
          <SectionEyebrow>{workCopy.eyebrow}</SectionEyebrow>
          <h2 className="max-w-sm text-[clamp(1.75rem,4vw,3.75rem)] leading-none tracking-tight text-balance">
            {workCopy.heading}
          </h2>
        </div>

        {/* First staggered pair */}
        <div className="-mb-16 flex flex-wrap">
          {firstPair.map((project, i) => (
            <WorkCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Mid CTA — desktop */}
        <div className="mb-16 hidden justify-center lg:mb-20 lg:flex">
          <WorkCta />
        </div>

        {/* Second staggered pair */}
        <div className="-mb-16 flex flex-wrap">
          {secondPair.map((project, i) => (
            <WorkCard key={project.id} project={project} index={i + 2} />
          ))}
        </div>

        {/* CTA — mobile */}
        <div className="mt-4 flex justify-center lg:hidden">
          <WorkCta />
        </div>
      </PageContainer>
    </section>
  )
}
