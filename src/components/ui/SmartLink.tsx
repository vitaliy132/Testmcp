import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { isInternalHref } from '@/lib/links'

export function SmartLink({
  href,
  className,
  children,
  onClick,
  newTab,
}: {
  href: string
  className?: string
  children: ReactNode
  onClick?: () => void
  newTab?: boolean
}) {
  if (isInternalHref(href)) {
    return (
      <Link to={href} className={className} onClick={onClick}>
        {children}
      </Link>
    )
  }

  return (
    <a
      href={href}
      className={className}
      onClick={onClick}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noreferrer' : undefined}
    >
      {children}
    </a>
  )
}
