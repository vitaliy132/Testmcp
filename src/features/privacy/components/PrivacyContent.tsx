import { motion } from 'framer-motion'
import { privacyContent } from '@/features/privacy/data'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'

export function PrivacyContent() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="mx-auto max-w-[900px] px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-5"
        >
          <SectionEyebrow>{privacyContent.eyebrow}</SectionEyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.06 }}
          className="mb-4 text-[clamp(2rem,5vw,3.5rem)] font-medium leading-none tracking-tight"
        >
          {privacyContent.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 text-xl font-light tracking-tight text-nd-muted lg:mb-16 lg:text-2xl dark:text-white/65"
        >
          {privacyContent.subtitle}
        </motion.p>

        <ol className="space-y-6">
          {privacyContent.clauses.map((clause, index) => (
            <li
              key={clause.slice(0, 48)}
              className="flex gap-4 text-base font-light leading-7 text-nd-muted dark:text-white/65"
            >
              <span className="shrink-0 font-medium text-nd-ink dark:text-white">{index + 1}.</span>
              <span>{clause}</span>
            </li>
          ))}
        </ol>

        <div className="mt-14 border-t border-black/10 pt-10 dark:border-white/10">
          <h2 className="mb-4 text-2xl tracking-tight lg:text-3xl">{privacyContent.cookiesTitle}</h2>
          <p className="text-base font-light leading-7 text-nd-muted dark:text-white/65">
            {privacyContent.cookiesBody}
          </p>
        </div>
      </div>
    </section>
  )
}
