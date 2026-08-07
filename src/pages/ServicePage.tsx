import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { servicePages, type ServiceFaq, type ServiceKey } from '@/data/services'
import { StartProjectButton } from '@/components/ui/StartProjectButton'
import { routes } from '@/config/links'

function ServiceFaqCard({ item }: { item: ServiceFaq }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="mb-3 overflow-hidden rounded-2xl bg-[#f5f5f5] lg:mb-4 lg:rounded-3xl dark:bg-[#1a1a1a]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full cursor-pointer items-center justify-between p-5 text-left focus:outline-none sm:p-6"
        aria-expanded={open}
      >
        <h3 className="max-w-[90%] pr-6 text-lg leading-tight tracking-tight lg:text-xl">{item.question}</h3>
        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-nd-ink text-white transition-transform duration-300 dark:bg-[#2a2a2a] ${
            open ? 'rotate-180' : ''
          }`}
          aria-hidden
        >
          <svg className="h-3 w-3 fill-current" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-6 sm:px-6 lg:pr-28">
              <p className="text-base font-light leading-7 text-nd-muted dark:text-white/65">{item.answer}</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export function ServicePage({ serviceKey }: { serviceKey: ServiceKey }) {
  const service = servicePages[serviceKey]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-5 inline-flex items-center gap-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-nd-ink dark:bg-white" aria-hidden />
            <span className="text-sm font-light text-nd-muted dark:text-white/70 lg:text-base">
              {service.eyebrow}
            </span>
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
              to="/#work"
              className="text-sm font-light text-nd-muted underline-offset-4 transition hover:text-nd-ink hover:underline dark:text-white/60 dark:hover:text-white"
            >
              View our work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pitch */}
      <section className="border-t border-black/5 py-16 lg:py-24 dark:border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-wrap justify-between gap-10 px-5 lg:gap-16 lg:px-8">
          <div className="w-full lg:w-[38%]">
            <h2 className="max-w-md text-[clamp(1.5rem,3vw,2.5rem)] leading-none tracking-tight text-balance">
              {service.pitchTitle}
            </h2>
          </div>
          <div className="w-full lg:w-[52%]">
            <p className="mb-8 text-base font-light leading-7 text-nd-muted lg:text-[1.05rem] dark:text-white/65">
              {service.pitchBody}
            </p>
            <ul className="space-y-3">
              {service.trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-base font-light text-nd-ink dark:text-white/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-nd-ink dark:bg-white" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-[#f5f5f5] py-16 lg:py-24 dark:bg-[#171717]">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6 lg:mb-14">
            <div>
              <div className="mb-3 inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-nd-ink dark:bg-white" aria-hidden />
                <span className="text-sm font-light text-nd-muted dark:text-white/70 lg:text-base">
                  Capabilities
                </span>
              </div>
              <h2 className="max-w-xl text-[clamp(1.5rem,3vw,2.5rem)] leading-none tracking-tight text-balance">
                {service.capabilitiesTitle}
              </h2>
            </div>
            <StartProjectButton href={routes.planner} label="Get in touch today" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {service.capabilities.map((capability) => (
              <div
                key={capability.name}
                className="rounded-2xl bg-white p-6 lg:rounded-3xl lg:p-8 dark:bg-[#1f1f1f]"
              >
                <h3 className="mb-3 text-xl tracking-tight lg:text-2xl">{capability.name}</h3>
                <p className="text-base font-light leading-7 text-nd-muted dark:text-white/65">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
          <div className="flex flex-wrap justify-between gap-10 lg:gap-0">
            <div className="w-full lg:w-[32%] xl:w-[30%]">
              <div className="flex flex-col items-start gap-4 lg:sticky lg:top-32 lg:gap-5">
                <div className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-nd-ink dark:bg-white" aria-hidden />
                  <span className="text-sm font-light text-nd-muted dark:text-white/70 lg:text-base">FAQs</span>
                </div>
                <h2 className="max-w-lg text-[clamp(1.5rem,3vw,2.5rem)] leading-none tracking-tight">
                  {service.faqsTitle}
                </h2>
                <StartProjectButton href={routes.planner} label="Get in touch" />
              </div>
            </div>

            <div className="w-full lg:w-[62%] xl:w-[58%]">
              {service.faqs.map((item) => (
                <ServiceFaqCard key={item.question} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-3 pb-16 sm:px-5 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-[1600px] overflow-hidden rounded-2xl bg-[#1f1f1f] px-6 py-16 text-white lg:rounded-3xl lg:px-12 lg:py-24 dark:bg-[#171717]">
          <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-xl text-[clamp(1.75rem,4vw,3rem)] leading-none tracking-tight text-balance">
              {service.ctaHeadline}
            </h2>
            <StartProjectButton href={routes.planner} label="Start a project" />
          </div>
        </div>
      </section>
    </>
  )
}
