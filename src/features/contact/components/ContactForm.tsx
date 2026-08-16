import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { brand } from '@/config/brand'
import { routes } from '@/config/routes'
import {
  buildContactMessage,
  buildContactSubject,
  contactContent,
  hearAboutOptions,
  initialContactForm,
  type ContactFormData,
} from '@/features/contact/data'
import { submitWeb3Form } from '@/lib/web3forms'
import { FloatingField, FloatingSelect, FloatingTextarea } from '@/components/ui/FloatingField'
import { GooeySubmitButton } from '@/components/ui/GooeyButton'

export function ContactForm() {
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

  if (submitted) {
    return (
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
    )
  }

  return (
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

      <FloatingSelect
        id="contact-hear"
        label={`How did you hear about ${brand.name}?`}
        value={data.hearAbout}
        onChange={(hearAbout) => patch({ hearAbout })}
      >
        <option value="" disabled>
          Select an option
        </option>
        {hearAboutOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </FloatingSelect>

      <FloatingTextarea
        id="contact-message"
        label="Tell us about your project"
        value={data.message}
        onChange={(message) => patch({ message })}
        required
      />

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
  )
}
