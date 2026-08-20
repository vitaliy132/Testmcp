import { Marquee } from '@/components/ui/Marquee'
import { SmartLink } from '@/components/ui/SmartLink'
import { brands, type Brand } from '@/features/home/data/brands'

const wordmarkClass =
  'whitespace-nowrap text-[15px] font-medium uppercase tracking-[0.22em] text-nd-ink/70 transition duration-300 group-hover:text-nd-ink dark:text-white/70 dark:group-hover:text-white sm:text-base'

function BrandItem({ brand, decorative }: { brand: Brand; decorative: boolean }) {
  const wordmark = <span className={wordmarkClass}>{brand.name}</span>
  const className = 'group flex h-12 shrink-0 items-center sm:h-14'

  if (brand.href && !decorative) {
    return (
      <SmartLink href={brand.href} className={className} aria-label={brand.name}>
        {wordmark}
      </SmartLink>
    )
  }

  return (
    <div className={className} aria-hidden={decorative || undefined}>
      {wordmark}
    </div>
  )
}

export function BrandMarquee() {
  const row = [...brands, ...brands]

  return (
    <section className="overflow-hidden border-y border-black/5 py-8 dark:border-white/10 lg:py-10" aria-label="Brand partners">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent dark:from-[#121212] sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent dark:from-[#121212] sm:w-24" />

        <Marquee className="items-center gap-10 sm:gap-14">
          {row.map((brand, i) => (
            <BrandItem key={`${brand.id}-${i}`} brand={brand} decorative={i >= brands.length} />
          ))}
        </Marquee>
      </div>
    </section>
  )
}
