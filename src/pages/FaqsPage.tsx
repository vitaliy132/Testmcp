import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqHero, faqSections, type FaqItem } from '@/data/faqs'
import { StartProjectButton } from '@/components/ui/StartProjectButton'
import { routes } from '@/config/links'

function FaqCard({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="mb-3 overflow-hidden rounded-2xl bg-[#f5f5f5] lg:mb-4 lg:rounded-3xl dark:bg-[#1a1a1a]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full cursor-pointer items-center justify-between p-5 text-left focus:outline-none sm:p-6"
        aria-expanded={open}
      >
        <h3 className="max-w-[90%] pr-6 text-lg leading-tight tracking-tight lg:text-xl">
          {item.question}
        </h3>
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
              <p className="mb-4 text-base font-light leading-7 text-nd-muted dark:text-white/65">
                {item.answer}
              </p>
              {item.bullets?.map((bullet) => (
                <p
                  key={`${bullet.strong ?? ''}${bullet.text}`}
                  className="mb-3 text-base font-light leading-7 text-nd-muted last:mb-0 dark:text-white/65"
                >
                  {bullet.strong ? (
                    <>
                      - <strong className="font-medium text-nd-ink dark:text-white">{bullet.strong}</strong>
                      {bullet.text}
                    </>
                  ) : (
                    bullet.text
                  )}
                </p>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export function FaqsPage() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="flex flex-wrap justify-between gap-10 lg:gap-0">
          {/* Sticky left column — MadeByShape FAQ intro pattern */}
          <div className="w-full lg:w-[32%] xl:w-[30%]">
            <div className="flex flex-col items-start gap-4 lg:sticky lg:top-32 lg:gap-5">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="inline-flex items-center gap-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-nd-ink dark:bg-white" aria-hidden />
                <span className="text-sm font-light text-nd-muted dark:text-white/70 lg:text-base">
                  {faqHero.title}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.06 }}
                className="max-w-lg text-[clamp(1.75rem,4vw,3rem)] font-medium leading-none tracking-tight lg:max-w-none"
              >
                The answers to
                <br />
                your questions.
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12 }}
              >
                <StartProjectButton href={routes.planner} label="Get in touch now" />
              </motion.div>
            </div>
          </div>

          {/* Right column — soft gray accordion cards */}
          <div className="w-full lg:w-[62%] xl:w-[58%]">
            {faqSections.map((section, sIdx) => (
              <div key={section.title} className={sIdx === 0 ? '' : 'mt-10 lg:mt-14'}>
                <h2 className="mb-3 text-xl tracking-tight lg:mb-5 lg:text-2xl">{section.title}</h2>
                <div>
                  {section.items.map((item) => (
                    <FaqCard key={item.question} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
