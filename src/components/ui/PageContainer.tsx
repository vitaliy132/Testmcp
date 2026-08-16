import type { ReactNode } from 'react'

const variants = {
  home: 'mx-auto max-w-[1400px] px-5 lg:px-8',
  about: 'mx-auto w-full px-2 sm:px-6 xl:px-12 2xl:px-20',
  work: 'mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-8',
} as const

export function PageContainer({
  variant = 'home',
  className = '',
  children,
}: {
  variant?: keyof typeof variants
  className?: string
  children: ReactNode
}) {
  return <div className={`${variants[variant]} ${className}`.trim()}>{children}</div>
}
