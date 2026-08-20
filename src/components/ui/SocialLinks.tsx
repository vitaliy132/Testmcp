import { socialLinks } from '@/config/external'

export function SocialLinks({ className = 'flex flex-wrap gap-3' }: { className?: string }) {
  return (
    <div className={className}>
      {socialLinks.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-black/[0.04] px-4 py-2 text-sm transition hover:bg-black/[0.08] dark:bg-white/[0.06] dark:hover:bg-white/[0.12]"
        >
          {item.label}
        </a>
      ))}
    </div>
  )
}
