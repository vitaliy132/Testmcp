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

export type GooeyTone = 'lime' | 'ink'

const gooeyTones: Record<GooeyTone, { pill: string; icon: string; arrow: string }> = {
  lime: {
    pill: 'bg-nd-lime text-nd-ink',
    icon: 'bg-nd-lime',
    arrow: 'text-nd-ink',
  },
  ink: {
    pill: 'bg-nd-ink text-white dark:bg-[#2a2a2a] dark:text-white',
    icon: 'bg-nd-ink dark:bg-[#2a2a2a]',
    arrow: 'text-white',
  },
}

function GooeyVisual({ label, tone = 'lime' }: { label: string; tone?: GooeyTone }) {
  const colors = gooeyTones[tone]

  return (
    <>
      <span
        className={`relative inline-flex items-center justify-center overflow-hidden rounded-full px-5 py-2 text-sm font-medium leading-tight ${colors.pill}`}
      >
        <span className="relative top-px">{label}</span>
      </span>
      <span
        className={`relative -ml-1 flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full transition-transform duration-300 ease-out group-hover:translate-x-3 group-hover:rotate-45 ${colors.icon}`}
      >
        <span className={`relative h-3 w-3 overflow-hidden ${colors.arrow}`}>
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
  tone?: GooeyTone
}

/** Anchor / Link style shell used by StartProjectButton */
export function GooeyLink({
  href,
  label,
  className = '',
  onClick,
  external,
  tone = 'lime',
}: GooeyLinkProps) {
  const classes = `${gooeyClass} ${className}`
  const style = { filter: 'url(#buttonFilter)' } as const
  const visual = <GooeyVisual label={label} tone={tone} />

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
  tone?: GooeyTone
} & Omit<ComponentPropsWithoutRef<'button'>, 'type' | 'children'>

export function GooeySubmitButton({
  label,
  disabled,
  className = '',
  tone = 'lime',
  ...rest
}: GooeySubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`${gooeyClass} disabled:opacity-50 ${className}`}
      style={{ filter: 'url(#buttonFilter)' }}
      {...rest}
    >
      <GooeyVisual label={label} tone={tone} />
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

/** Mounted next to the hero h1 so url(#heroGoo) resolves on the same element tree */
export function HeroGooFilter() {
  return (
    <svg width="0" height="0" className="absolute hidden" aria-hidden colorInterpolationFilters="sRGB">
      <defs>
        <filter id="heroGoo" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  )
}
