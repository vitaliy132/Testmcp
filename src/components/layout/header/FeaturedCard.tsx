import { ArrowIcon } from '@/components/layout/header/icons'
import { SmartLink } from '@/components/ui/SmartLink'

export function FeaturedCard({
  title,
  description,
  href,
  image,
  onClick,
}: {
  title: string
  description: string
  href: string
  image: string
  onClick?: () => void
}) {
  return (
    <SmartLink
      href={href}
      onClick={onClick}
      className="group flex h-full w-full flex-col justify-between rounded-2xl bg-black/[0.04] p-5 transition-colors hover:bg-black/[0.06] dark:bg-white/[0.06] dark:hover:bg-white/[0.1]"
    >
      <div>
        <div className="mb-2 flex items-center justify-between gap-3">
          <span className="text-base leading-tight text-nd-ink dark:text-white">{title}</span>
          <span className="translate-x-[-0.35rem] translate-y-[0.35rem] opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowIcon className="h-4 w-4" />
          </span>
        </div>
        <p className="mb-5 text-sm font-light text-nd-muted dark:text-white/55">{description}</p>
      </div>
      <div className="overflow-hidden rounded-xl">
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />
      </div>
    </SmartLink>
  )
}
