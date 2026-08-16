import {
  useId,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from 'react'
import { Link } from 'react-router-dom'
import {
  PLANNER_SERVICE_OPTIONS,
  PLANNER_TOTAL_STEPS,
  buildPlannerMessage,
  buildPlannerSubject,
  initialPlannerForm,
  plannerSteps,
  validatePlannerStep,
  type PlannerFormData,
  type PlannerService,
} from '@/data/planner'
import { routes } from '@/config/links'
import { submitWeb3Form } from '@/lib/web3forms'
import { FloatingField } from '@/components/planner/FloatingField'
import { GooeySubmitButton } from '@/components/ui/GooeyButton'

const MAX_BRIEF_BYTES = 10 * 1024 * 1024

export function PlannerForm() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<PlannerFormData>(initialPlannerForm)
  const [error, setError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)
  const formId = useId()

  const meta = plannerSteps[step - 1]

  const patch = (partial: Partial<PlannerFormData>) => {
    setData((prev) => ({ ...prev, ...partial }))
    setError(null)
  }

  const toggleService = (service: PlannerService) => {
    setData((prev) => {
      const has = prev.services.includes(service)
      if (service === 'I want it all!') {
        return {
          ...prev,
          services: has ? [] : [...PLANNER_SERVICE_OPTIONS],
        }
      }
      const next = has ? prev.services.filter((s) => s !== service) : [...prev.services, service]
      const withoutAll = next.filter((s) => s !== 'I want it all!')
      const allCore = PLANNER_SERVICE_OPTIONS.filter((s) => s !== 'I want it all!')
      const allSelected = allCore.every((s) => withoutAll.includes(s))
      return {
        ...prev,
        services: allSelected ? [...PLANNER_SERVICE_OPTIONS] : withoutAll,
      }
    })
    setError(null)
  }

  const onBriefChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) {
      patch({ briefFileName: null })
      return
    }
    const okType =
      file.type === 'application/pdf' ||
      file.name.toLowerCase().endsWith('.pdf') ||
      file.name.toLowerCase().endsWith('.docx') ||
      file.name.toLowerCase().endsWith('.doc')
    if (!okType) {
      setError('Please upload a PDF or DOCX file.')
      e.target.value = ''
      return
    }
    if (file.size > MAX_BRIEF_BYTES) {
      setError('File must be 10 MB or smaller.')
      e.target.value = ''
      return
    }
    patch({ briefFileName: file.name })
  }

  const goBack = () => {
    setError(null)
    setStep((s) => Math.max(1, s - 1))
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const err = validatePlannerStep(step, data)
    if (err) {
      setError(err)
      return
    }
    if (step < PLANNER_TOTAL_STEPS) {
      setStep((s) => s + 1)
      return
    }

    setSending(true)
    setError(null)
    try {
      await submitWeb3Form({
        subject: buildPlannerSubject(data),
        from_name: data.fullName.trim(),
        email: data.emailAddress.trim(),
        message: buildPlannerMessage(data),
        company: data.company.trim(),
        launch_date: data.date.trim(),
        budget: `£${data.priceFrom} – £${data.priceTo}`,
        services: data.services.join(', '),
        brief_file: data.briefFileName || undefined,
        newsletter: data.newsletter ? 'Yes' : 'No',
      })
      setSubmitted(true)
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : 'Something went wrong. Please try again.',
      )
    } finally {
      setSending(false)
    }
  }

  if (submitted) {
    return (
      <section className="px-4 pt-28 pb-16 sm:px-6 xl:px-12 2xl:px-20">
        <div className="mx-auto max-w-2xl rounded-3xl border border-black/10 px-8 py-16 text-center dark:border-white/15">
          <p className="text-sm text-nd-muted dark:text-white/55">Project planner</p>
          <h1 className="mt-3 text-3xl font-medium tracking-tight xl:text-4xl">Thanks — we’ve got it.</h1>
          <p className="mt-4 text-nd-muted dark:text-white/65">
            Your project details have been sent. We’ll be in touch soon.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to={routes.home}
              className="inline-flex rounded-full bg-nd-lime px-5 py-2.5 text-sm font-medium text-nd-ink"
            >
              Back home
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full pt-20 pb-10 lg:pt-32 lg:pb-16 xl:pt-40">
      <div className="px-2 sm:px-6 xl:px-12 2xl:px-20">
        <form onSubmit={onSubmit} className="relative flex w-full flex-wrap" noValidate>
          <div className="order-2 w-full px-2 md:order-1 md:w-[37.5%] lg:w-[31.25%] lg:px-4">
            <div className="relative aspect-[9/14] w-full overflow-hidden rounded-2xl bg-nd-soft group lg:rounded-3xl dark:bg-[#1a1a1a]">
              <img
                src={meta.mediaImage}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 z-20 w-full bg-black/80 px-3 py-2 text-center text-xs text-white lg:text-sm">
                {meta.mediaCaption}
              </div>
            </div>
          </div>

          <div className="order-1 mb-5 flex w-full flex-wrap px-2 md:order-2 md:mb-0 md:w-[62.5%] lg:ml-[6.25%] lg:w-[56.25%] lg:px-4 xl:w-1/2 2xl:ml-[12.5%] 2xl:w-[43.75%]">
            <div className="relative flex w-full flex-wrap items-center rounded-2xl border border-black/10 px-5 pt-20 pb-2 lg:rounded-none lg:border-none lg:p-0 lg:pt-20 xl:py-28 dark:border-white/15">
              <div className="absolute top-5 left-0 w-full px-5 lg:top-10 lg:px-2">
                <div className="h-2 w-full rounded-full bg-nd-soft dark:bg-white/10">
                  <div
                    className="h-2 rounded-full bg-nd-ink transition-all duration-500 dark:bg-white"
                    style={{ width: `${meta.progress}%` }}
                  />
                </div>
                <div className="mt-2 text-sm font-light text-nd-muted xl:mt-3 xl:text-base dark:text-white/55">
                  Step {step} of {PLANNER_TOTAL_STEPS}
                </div>
              </div>

              <div className="w-full">
                <div className="mb-4 text-lg leading-tight lg:text-xl xl:text-2xl dark:text-white">
                  {meta.heading}
                </div>

                {step === 1 && (
                  <div className="space-y-4">
                    <FloatingField
                      id={`${formId}-name`}
                      label="Name"
                      value={data.fullName}
                      onChange={(v) => patch({ fullName: v })}
                      required
                    />
                    <FloatingField
                      id={`${formId}-email`}
                      label="Email"
                      type="email"
                      value={data.emailAddress}
                      onChange={(v) => patch({ emailAddress: v })}
                      required
                    />
                    <FloatingField
                      id={`${formId}-company`}
                      label="Company"
                      value={data.company}
                      onChange={(v) => patch({ company: v })}
                      required
                    />
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-5">
                    <div>
                      <p className="mb-3 text-sm text-nd-muted dark:text-white/55">
                        I want to launch my project on:
                      </p>
                      <FloatingField
                        id={`${formId}-date`}
                        label="DD/MM/YYYY"
                        type="tel"
                        inputMode="numeric"
                        value={data.date}
                        onChange={(v) => patch({ date: v })}
                        required
                      />
                    </div>
                    <div>
                      <p className="mb-3 text-sm text-nd-muted dark:text-white/55">My budget is between</p>
                      <div className="grid grid-cols-2 gap-3">
                        <FloatingField
                          id={`${formId}-from`}
                          label="From (£)"
                          type="tel"
                          inputMode="numeric"
                          value={data.priceFrom}
                          onChange={(v) => patch({ priceFrom: v })}
                          required
                        />
                        <FloatingField
                          id={`${formId}-to`}
                          label="To (£)"
                          type="tel"
                          inputMode="numeric"
                          value={data.priceTo}
                          onChange={(v) => patch({ priceTo: v })}
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="flex flex-wrap gap-2">
                    {PLANNER_SERVICE_OPTIONS.map((service) => {
                      const selected = data.services.includes(service)
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          aria-pressed={selected}
                          className={`rounded-full border px-4 py-2 text-sm transition ${
                            selected
                              ? 'border-nd-ink bg-nd-ink text-white dark:border-white dark:bg-white dark:text-nd-ink'
                              : 'border-black/15 text-nd-ink hover:border-black/30 dark:border-white/20 dark:text-white dark:hover:border-white/40'
                          }`}
                        >
                          {service}
                        </button>
                      )
                    })}
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-5">
                    <div className="relative w-full">
                      <textarea
                        id={`${formId}-summary`}
                        value={data.summary}
                        onChange={(e) => patch({ summary: e.target.value })}
                        required
                        placeholder=" "
                        rows={5}
                        className="peer w-full appearance-none rounded-xl border border-black/15 bg-transparent px-5 pt-7 pb-3 text-sm text-nd-ink outline-none transition focus:border-black/30 focus:ring-4 focus:ring-black/10 dark:border-white/20 dark:bg-[#1a1a1a] dark:text-white dark:focus:border-white/40 dark:focus:ring-white/10"
                      />
                      <label
                        htmlFor={`${formId}-summary`}
                        className="pointer-events-none absolute top-4 left-5 origin-bottom-left text-nd-muted transition-transform duration-300 peer-focus:-translate-y-2.5 peer-focus:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-2.5 peer-[:not(:placeholder-shown)]:scale-75 dark:text-white/55"
                      >
                        Please provide a summary of your project
                      </label>
                    </div>

                    <div>
                      <p className="mb-2 text-sm text-nd-muted dark:text-white/55">Or upload a project brief</p>
                      <button
                        type="button"
                        onClick={() => fileRef.current?.click()}
                        className="flex h-40 w-full flex-col items-center justify-center rounded-xl border border-dashed border-black/20 bg-nd-soft/60 px-6 text-center transition hover:border-black/35 dark:border-white/25 dark:bg-[#1a1a1a] dark:hover:border-white/40"
                      >
                        <span className="text-sm font-medium">
                          {data.briefFileName ?? 'Drop or choose a file'}
                        </span>
                        <span className="mt-1 text-xs text-nd-muted dark:text-white/50">
                          File size PDF, docx, max. 10 MB
                        </span>
                      </button>
                      <input
                        ref={fileRef}
                        type="file"
                        accept=".pdf,.doc,.docx,application/pdf"
                        className="hidden"
                        onChange={onBriefChange}
                      />
                    </div>

                    <label className="flex cursor-pointer items-start gap-3 text-sm dark:text-white/85">
                      <input
                        type="checkbox"
                        checked={data.newsletter}
                        onChange={(e) => patch({ newsletter: e.target.checked })}
                        className="mt-1 h-4 w-4 rounded border-black/25 accent-nd-lime"
                      />
                      <span>Subscribe to our newsletter for all the latest Northern Digital goss!</span>
                    </label>
                  </div>
                )}

                {error && (
                  <p className="mt-4 text-sm text-red-600 dark:text-red-400" role="alert">
                    {error}
                  </p>
                )}

                <div className="mt-6 flex items-center gap-4">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={goBack}
                      className="text-sm font-medium text-nd-ink underline-offset-4 hover:underline dark:text-white"
                    >
                      Back
                    </button>
                  )}
                  <GooeySubmitButton
                    label={
                      step === PLANNER_TOTAL_STEPS
                        ? sending
                          ? 'Sending…'
                          : 'Submit'
                        : 'Next Step'
                    }
                    disabled={sending}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
