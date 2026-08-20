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
} from '@/features/planner/data'
import { routes } from '@/config/routes'
import { submitWeb3Form } from '@/lib/web3forms'
import { GooeySubmitButton } from '@/components/ui/GooeyButton'
import { PlannerStepMedia } from '@/features/planner/components/PlannerStepMedia'
import { PlannerStepFields } from '@/features/planner/components/PlannerStepFields'

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
  if (!meta) return null

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
      <div className="px-4 sm:px-6 xl:px-12 2xl:px-20">
        <form onSubmit={onSubmit} className="relative flex w-full flex-wrap" noValidate>
          <PlannerStepMedia meta={meta} />

          <div className="order-1 mb-5 flex w-full flex-wrap px-1 md:order-2 md:mb-0 md:w-[62.5%] lg:ml-[6.25%] lg:w-[56.25%] lg:px-4 xl:w-1/2 2xl:ml-[12.5%] 2xl:w-[43.75%]">
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

                <PlannerStepFields
                  step={step}
                  data={data}
                  formId={formId}
                  fileRef={fileRef}
                  patch={patch}
                  toggleService={toggleService}
                  onBriefChange={onBriefChange}
                />

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
