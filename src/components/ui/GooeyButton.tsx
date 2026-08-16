import type { ComponentPropsWithoutRef } from 'react'
import { Link } from 'react-router-dom'
import { isInternalHref } from '@/lib/links'

export function ArrowIcon({ className = 'h-3 w-3' }: { className?: string }) {
  return (
    <svg className={`${className} fill-current`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden>
      <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
    </svg>
  )
}

function GooeyVisual({ label }: { label: string }) {
  return (
    <>
      <span className="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-nd-lime px-5 py-2 text-sm font-medium leading-tight text-nd-ink">
        <span className="relative top-px">{label}</span>
      </span>
      <span className="relative -ml-1 flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-nd-lime transition-transform duration-300 ease-out group-hover:translate-x-3 group-hover:rotate-45">
        <span className="relative h-3 w-3 overflow-hidden text-nd-ink">
          <span className="absolute inset-0 transition-transform duration-300 ease-out group-hover:-translate-y-full group-hover:translate-x-full">
            <ArrowIcon />
          </span>
          <span className="absolute inset-0 translate-y-full -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0">
            <ArrowIcon />
          </span>
        </span>
      </span>
    </>
  )
}

const gooeyClass =
  'group relative inline-flex items-center outline-none focus:outline-none'

type GooeyLinkProps = {
  href: string
  label: string
  className?: string
  onClick?: () => void
  external?: boolean
}

/** Anchor / Link style shell used by StartProjectButton */
export function GooeyLink({ href, label, className = '', onClick, external }: GooeyLinkProps) {
  const classes = `${gooeyClass} ${className}`
  const style = { filter: 'url(#buttonFilter)' } as const
  const visual = <GooeyVisual label={label} />

  if (external || !isInternalHref(href)) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={classes}
        style={style}
        {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {visual}
      </a>
    )
  }

  return (
    <Link to={href} onClick={onClick} className={classes} style={style}>
      {visual}
    </Link>
  )
}

type GooeySubmitButtonProps = {
  label: string
  disabled?: boolean
} & Omit<ComponentPropsWithoutRef<'button'>, 'type' | 'children'>

export function GooeySubmitButton({ label, disabled, className = '', ...rest }: GooeySubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`${gooeyClass} disabled:opacity-50 ${className}`}
      style={{ filter: 'url(#buttonFilter)' }}
      {...rest}
    >
      <GooeyVisual label={label} />
    </button>
  )
}

/** SVG goo filter used by gooey buttons — mount once near root */
export function ButtonGooFilter() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden colorInterpolationFilters="sRGB">
      <defs>
        <filter id="buttonFilter">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="buttonFilter"
          />
          <feComposite in="SourceGraphic" in2="buttonFilter" operator="atop" />
          <feBlend in="SourceGraphic" in2="buttonFilter" />
        </filter>
      </defs>
    </svg>
  )
}
