import type { HTMLAttributes, ReactNode } from 'react'

export const floatingControlClass =
  'peer w-full appearance-none rounded-xl border border-black/15 bg-transparent px-5 pt-6 pb-2.5 text-sm text-nd-ink outline-none transition focus:border-black/30 focus:ring-4 focus:ring-black/10 dark:border-white/20 dark:bg-[#1a1a1a] dark:text-white dark:focus:border-white/40 dark:focus:ring-white/10'

const floatingLabelClass =
  'pointer-events-none absolute top-4 left-5 origin-bottom-left text-nd-muted transition-transform duration-300 peer-focus:-translate-y-2.5 peer-focus:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-2.5 peer-[:not(:placeholder-shown)]:scale-75 dark:text-white/55'

export function FloatingField({
  id,
  label,
  type = 'text',
  value,
  onChange,
  required,
  inputMode,
}: {
  id: string
  label: string
  type?: string
  value: string
  onChange: (value: string) => void
  required?: boolean
  inputMode?: HTMLAttributes<HTMLInputElement>['inputMode']
}) {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        inputMode={inputMode}
        placeholder=" "
        autoComplete="one-time-code"
        className={floatingControlClass}
      />
      <label htmlFor={id} className={floatingLabelClass}>
        {label}
      </label>
    </div>
  )
}

export function FloatingSelect({
  id,
  label,
  value,
  onChange,
  children,
}: {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  children: ReactNode
}) {
  return (
    <div className="relative w-full">
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={floatingControlClass}
      >
        {children}
      </select>
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-4 left-5 origin-bottom-left scale-75 -translate-y-2.5 text-nd-muted dark:text-white/55"
      >
        {label}
      </label>
    </div>
  )
}

export function FloatingTextarea({
  id,
  label,
  value,
  onChange,
  required,
  rows = 5,
}: {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  required?: boolean
  rows?: number
}) {
  return (
    <div className="relative w-full">
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        rows={rows}
        placeholder=" "
        className="peer w-full resize-y appearance-none rounded-xl border border-black/15 bg-transparent px-5 pt-7 pb-3 text-sm text-nd-ink outline-none transition focus:border-black/30 focus:ring-4 focus:ring-black/10 dark:border-white/20 dark:bg-[#1a1a1a] dark:text-white dark:focus:border-white/40 dark:focus:ring-white/10"
      />
      <label htmlFor={id} className={floatingLabelClass}>
        {label}
      </label>
    </div>
  )
}

