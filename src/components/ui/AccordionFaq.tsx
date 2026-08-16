import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { FaqItem } from '@/types/faq'

function FaqArrow() {
  return (
    <svg className="h-3 w-3 fill-current" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
    </svg>
  )
}

export function AccordionFaq({
  item,
  dashPlainBullets = false,
}: {
  item: FaqItem
  dashPlainBullets?: boolean
}) {
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
          <FaqArrow />
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
              <p className="mb-4 text-base font-light leading-7 text-nd-muted last:mb-0 dark:text-white/65">
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
                  ) : dashPlainBullets ? (
                    <>- {bullet.text}</>
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
