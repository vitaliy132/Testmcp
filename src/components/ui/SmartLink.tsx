import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { isInternalHref } from '@/lib/links'

type SmartLinkProps = {
  href: string
  children: ReactNode
  newTab?: boolean
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>

export function SmartLink({ href, children, newTab, ...rest }: SmartLinkProps) {
  if (isInternalHref(href)) {
    return (
      <Link to={href} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <a
      href={href}
      {...rest}
      target={newTab ? '_blank' : rest.target}
      rel={newTab ? 'noreferrer' : rest.rel}
    >
      {children}
    </a>
  )
}
