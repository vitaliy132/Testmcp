import type { ChangeEvent, RefObject } from 'react'
import {
  PLANNER_SERVICE_OPTIONS,
  type PlannerFormData,
  type PlannerService,
} from '@/features/planner/data'
import { FloatingField, FloatingTextarea } from '@/components/ui/FloatingField'

export function PlannerStepFields({
  step,
  data,
  formId,
  fileRef,
  patch,
  toggleService,
  onBriefChange,
}: {
  step: number
  data: PlannerFormData
  formId: string
  fileRef: RefObject<HTMLInputElement | null>
  patch: (partial: Partial<PlannerFormData>) => void
  toggleService: (service: PlannerService) => void
  onBriefChange: (e: ChangeEvent<HTMLInputElement>) => void
}) {
  if (step === 1) {
    return (
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
    )
  }

  if (step === 2) {
    return (
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
    )
  }

  if (step === 3) {
    return (
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
    )
  }

  return (
    <div className="space-y-5">
      <FloatingTextarea
        id={`${formId}-summary`}
        label="Please provide a summary of your project"
        value={data.summary}
        onChange={(summary) => patch({ summary })}
        required
      />

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
  )
}
