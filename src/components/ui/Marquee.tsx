import type { ReactNode } from 'react'

export function Marquee({
  className = '',
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return <div className={`animate-marquee flex w-max ${className}`.trim()}>{children}</div>
}
