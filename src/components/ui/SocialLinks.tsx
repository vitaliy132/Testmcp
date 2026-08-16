import { socialLinks } from '@/config/external'

const variants = {
  footer: 'hover:text-white',
  pills:
    'rounded-full bg-black/[0.04] px-4 py-2 text-sm transition hover:bg-black/[0.08] dark:bg-white/[0.06] dark:hover:bg-white/[0.12]',
} as const

export function SocialLinks({
  variant,
  className = '',
}: {
  variant: keyof typeof variants
  className?: string
}) {
  const linkClass = variants[variant]

  return (
    <div className={className || (variant === 'pills' ? 'flex flex-wrap gap-3' : 'ml-auto flex gap-4')}>
      {socialLinks.map((item) =>
        variant === 'pills' ? (
          <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className={linkClass}>
            {item.label}
          </a>
        ) : (
          <a key={item.label} href={item.href} className={linkClass}>
            {item.label}
          </a>
        ),
      )}
    </div>
  )
}
