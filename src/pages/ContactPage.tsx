import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { brand } from '@/config/brand'
import { external, routes } from '@/config/links'
import {
  buildContactMessage,
  buildContactSubject,
  contactContent,
  contactFaqs,
  hearAboutOptions,
  initialContactForm,
  type ContactFaq,
  type ContactFormData,
} from '@/data/contact'
import { submitWeb3Form } from '@/lib/web3forms'
import { FloatingField } from '@/components/planner/FloatingField'
import { StartProjectButton } from '@/components/ui/StartProjectButton'
import { GooeySubmitButton } from '@/components/ui/GooeyButton'

function ContactFaqCard({ item }: { item: ContactFaq }) {
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
                  ) : (
                    <>
                      - {bullet.text}
                    </>
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

const social = [
  { label: 'LinkedIn', href: external.social.linkedin },
  { label: 'X', href: external.social.x },
  { label: 'Instagram', href: external.social.instagram },
  { label: 'Behance', href: external.social.behance },
] as const

export function ContactPage() {
  const [data, setData] = useState<ContactFormData>(initialContactForm)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const patch = (partial: Partial<ContactFormData>) => {
    setData((prev) => ({ ...prev, ...partial }))
    setError(null)
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
      setError('Please fill in your name, email and message.')
      return
    }

    setSending(true)
    setError(null)
    try {
      await submitWeb3Form({
        subject: buildContactSubject(data),
        from_name: data.name.trim(),
        email: data.email.trim(),
        message: buildContactMessage(data),
        phone: data.phone.trim() || undefined,
        hear_about: data.hearAbout || undefined,
        newsletter: data.newsletter ? 'Yes' : 'No',
      })
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      {/* Hero + form */}
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
              {contactContent.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="mb-12 max-w-3xl text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-none tracking-tight text-balance lg:mb-16"
          >
            {contactContent.headline}
          </motion.h1>

          <div className="flex flex-wrap justify-between gap-12 lg:gap-16">
            {/* Left column */}
            <div className="w-full lg:w-[38%]">
              <p className="mb-8 text-base font-light leading-7 text-nd-muted lg:text-[1.05rem] dark:text-white/65">
                {contactContent.intro}
              </p>
              <div className="mb-10">
                <StartProjectButton href={routes.planner} label={contactContent.plannerCta} />
              </div>

              <p className="mb-2 text-sm font-light text-nd-muted dark:text-white/55">
                {contactContent.hateFormsLabel}
              </p>
              <a
                href={`mailto:${brand.email}`}
                className="text-lg tracking-tight text-nd-ink underline-offset-4 transition hover:underline dark:text-white"
              >
                {brand.email}
              </a>
            </div>

            {/* Form */}
            <div className="w-full lg:w-[54%]">
              {submitted ? (
                <div className="rounded-3xl bg-[#f5f5f5] p-8 lg:p-10 dark:bg-[#1a1a1a]">
                  <h2 className="mb-3 text-2xl tracking-tight">Thanks for getting in touch</h2>
                  <p className="mb-6 text-base font-light leading-7 text-nd-muted dark:text-white/65">
                    Your message has been sent. We’ll get back to you soon. If you need us sooner, email{' '}
                    <a href={`mailto:${brand.email}`} className="underline underline-offset-2">
                      {brand.email}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setData(initialContactForm)
                    }}
                    className="text-sm font-medium underline-offset-4 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4" noValidate>
                  <FloatingField
                    id="contact-name"
                    label="Name"
                    value={data.name}
                    onChange={(name) => patch({ name })}
                    required
                  />
                  <FloatingField
                    id="contact-email"
                    label="Email Address"
                    type="email"
                    value={data.email}
                    onChange={(email) => patch({ email })}
                    required
                  />
                  <FloatingField
                    id="contact-phone"
                    label="Phone (Optional)"
                    type="tel"
                    value={data.phone}
                    onChange={(phone) => patch({ phone })}
                    inputMode="tel"
                  />

                  <div className="relative w-full">
                    <select
                      id="contact-hear"
                      value={data.hearAbout}
                      onChange={(e) => patch({ hearAbout: e.target.value })}
                      className="peer w-full appearance-none rounded-xl border border-black/15 bg-transparent px-5 pt-6 pb-2.5 text-sm text-nd-ink outline-none transition focus:border-black/30 focus:ring-4 focus:ring-black/10 dark:border-white/20 dark:bg-[#1a1a1a] dark:text-white dark:focus:border-white/40 dark:focus:ring-white/10"
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      {hearAboutOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <label
                      htmlFor="contact-hear"
                      className="pointer-events-none absolute top-4 left-5 origin-bottom-left scale-75 -translate-y-2.5 text-nd-muted dark:text-white/55"
                    >
                      How did you hear about {brand.name}?
                    </label>
                  </div>

                  <div className="relative w-full">
                    <textarea
                      id="contact-message"
                      value={data.message}
                      onChange={(e) => patch({ message: e.target.value })}
                      required
                      rows={5}
                      placeholder=" "
                      className="peer w-full resize-y appearance-none rounded-xl border border-black/15 bg-transparent px-5 pt-7 pb-3 text-sm text-nd-ink outline-none transition focus:border-black/30 focus:ring-4 focus:ring-black/10 dark:border-white/20 dark:bg-[#1a1a1a] dark:text-white dark:focus:border-white/40 dark:focus:ring-white/10"
                    />
                    <label
                      htmlFor="contact-message"
                      className="pointer-events-none absolute top-4 left-5 origin-bottom-left text-nd-muted transition-transform duration-300 peer-focus:-translate-y-2.5 peer-focus:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-2.5 peer-[:not(:placeholder-shown)]:scale-75 dark:text-white/55"
                    >
                      Tell us about your project
                    </label>
                  </div>

                  <label className="flex cursor-pointer items-start gap-3 pt-2 text-sm font-light text-nd-muted dark:text-white/65">
                    <input
                      type="checkbox"
                      checked={data.newsletter}
                      onChange={(e) => patch({ newsletter: e.target.checked })}
                      className="mt-1 h-4 w-4 rounded border-black/20"
                    />
                    <span>{contactContent.newsletterText}</span>
                  </label>

                  <p className="text-sm font-light text-nd-muted dark:text-white/55">
                    By submitting this form I accept the{' '}
                    <Link to={routes.privacy} className="underline underline-offset-2">
                      Privacy Policy
                    </Link>{' '}
                    of this site.
                  </p>

                  {error ? <p className="text-sm text-red-600 dark:text-red-400">{error}</p> : null}

                  <div className="pt-2">
                    <GooeySubmitButton
                      label={sending ? 'Sending…' : contactContent.submitLabel}
                      disabled={sending}
                    />
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Studio */}
      <section className="border-t border-black/5 py-16 lg:py-24 dark:border-white/10">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
          <div className="flex flex-wrap justify-between gap-10 lg:gap-16">
            <div className="w-full lg:w-[42%]">
              <h2 className="mb-5 text-[clamp(1.75rem,3.5vw,2.75rem)] leading-none tracking-tight">
                {contactContent.studioTitle}
              </h2>
              <p className="mb-10 text-base font-light leading-7 text-nd-muted dark:text-white/65">
                {contactContent.studioDescription}
              </p>

              <div className="mb-8">
                <p className="mb-2 text-sm font-medium text-nd-muted dark:text-white/55">Studio Address</p>
                <p className="text-base font-light leading-7 text-nd-ink dark:text-white/85">
                  {brand.address.lines.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>

              <div className="mb-8">
                <p className="mb-3 text-sm font-medium text-nd-muted dark:text-white/55">Follow us</p>
                <div className="flex flex-wrap gap-3">
                  {social.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-black/[0.04] px-4 py-2 text-sm transition hover:bg-black/[0.08] dark:bg-white/[0.06] dark:hover:bg-white/[0.12]"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <a
                href={contactContent.directionsHref}
                target="_blank"
                rel="noreferrer"
                className="btn-lime inline-flex"
              >
                Get directions
              </a>
            </div>

            <div className="w-full overflow-hidden rounded-2xl lg:w-[50%] lg:rounded-3xl">
              <img
                src={contactContent.studioImage}
                alt={`${brand.name} studio`}
                className="aspect-[16/10] h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#f5f5f5] py-16 lg:py-24 dark:bg-[#171717]">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
          <div className="flex flex-wrap justify-between gap-10 lg:gap-0">
            <div className="w-full lg:w-[32%] xl:w-[30%]">
              <div className="flex flex-col items-start gap-4 lg:sticky lg:top-32 lg:gap-5">
                <div className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-nd-ink dark:bg-white" aria-hidden />
                  <span className="text-sm font-light text-nd-muted dark:text-white/70 lg:text-base">
                    {contactContent.faqsEyebrow}
                  </span>
                </div>
                <h2 className="max-w-lg text-[clamp(1.5rem,3vw,2.5rem)] leading-none tracking-tight">
                  {contactContent.faqsTitle}
                </h2>
                <Link
                  to={contactContent.viewAllFaqsHref}
                  className="text-sm font-medium underline-offset-4 transition hover:underline"
                >
                  {contactContent.viewAllFaqs}
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-[62%] xl:w-[58%]">
              {contactFaqs.map((item) => (
                <ContactFaqCard key={item.question} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
