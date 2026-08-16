import type { ReactNode } from 'react'

const tones = {
  ink: {
    dot: 'bg-nd-ink dark:bg-white',
    label: 'text-sm font-light text-nd-muted dark:text-white/70 lg:text-base',
  },
  muted: {
    dot: 'bg-nd-muted dark:bg-white/80',
    label: 'text-sm font-light text-nd-muted lg:text-base dark:text-white/80',
  },
  onDark: {
    dot: 'bg-white',
    label: 'text-sm font-light lg:text-base',
  },
  lime: {
    dot: 'bg-nd-lime',
    label: 'text-sm text-white/85 lg:text-base',
  },
} as const

export function SectionEyebrow({
  children,
  tone = 'ink',
  className = 'inline-flex items-center gap-2',
}: {
  children: ReactNode
  tone?: keyof typeof tones
  className?: string
}) {
  const styles = tones[tone]
  return (
    <div className={className}>
      <span className={`h-1.5 w-1.5 rounded-full ${styles.dot}`} aria-hidden />
      <span className={styles.label}>{children}</span>
    </div>
  )
}
