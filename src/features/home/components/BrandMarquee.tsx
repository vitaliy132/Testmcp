import { Marquee } from '@/components/ui/Marquee'
import { SmartLink } from '@/components/ui/SmartLink'
import { partnerBrands, type PartnerBrand, type PartnerLockup } from '@/features/home/data/brands'

const partnerNames = partnerBrands.map((brand) => brand.name).join(', ')

function Lockup({ type }: { type: PartnerLockup }) {
  if (type === 'forma') {
    return <span className="whitespace-nowrap text-[20px] font-semibold leading-none tracking-[0.28em]">FORMA</span>
  }

  if (type === 'noramble') {
    return (
      <span className="flex items-center gap-1.5 whitespace-nowrap text-[20px] font-medium leading-none tracking-[0.04em]">
        <svg className="h-5 w-5 shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path
            d="M2 11.5c2.2-4.5 3.4 4 6.2-.2C10.8 7.2 12.2 4 14 4.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
        noramble
      </span>
    )
  }

  if (type === 'skew') {
    return <span className="-skew-x-[12deg] whitespace-nowrap text-[20px] font-semibold leading-none tracking-[0.22em]">SKEW</span>
  }

  if (type === 'crystal') {
    return (
      <span className="flex items-center gap-1.5 whitespace-nowrap font-serif text-[20px] leading-none tracking-[0.16em]">
        <svg className="h-5 w-5 shrink-0" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
          <path d="M8 1.2 14.4 8 8 14.8 1.6 8 8 1.2Z" />
        </svg>
        CRYSTAL
      </span>
    )
  }

  return <span className="whitespace-nowrap font-serif text-[20px] italic leading-none tracking-[0.12em]">Relevé</span>
}

function BrandLogo({ brand }: { brand: PartnerBrand }) {
  if (brand.src) {
    return (
      <img
        src={brand.src}
        alt=""
        className="h-full w-full object-contain object-center brightness-0 dark:invert"
      />
    )
  }

  if (brand.lockup) return <Lockup type={brand.lockup} />

  return <span className="text-[20px] font-medium leading-none tracking-wide">{brand.name}</span>
}

function BrandItem({ brand, duplicate }: { brand: PartnerBrand; duplicate: boolean }) {
  const className =
    'flex h-10 w-36 shrink-0 items-center justify-center opacity-50 transition-opacity duration-300 hover:opacity-100'

  if (brand.href) {
    return (
      <SmartLink
        href={brand.href}
        aria-label={duplicate ? undefined : brand.name}
        aria-hidden={duplicate || undefined}
        tabIndex={duplicate ? -1 : undefined}
        className={className}
      >
        <BrandLogo brand={brand} />
      </SmartLink>
    )
  }

  return (
    <div className={className} aria-hidden={duplicate || undefined}>
      <BrandLogo brand={brand} />
    </div>
  )
}

export function BrandMarquee() {
  return (
    <section
      className="overflow-hidden border-y border-black/5 py-8 dark:border-white/10 lg:py-10"
      aria-label={`Brand partners: ${partnerNames}`}
    >
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent dark:from-[#121212] sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent dark:from-[#121212] sm:w-24" />

        <Marquee className="items-center gap-12 sm:gap-16">
          {[false, true].flatMap((duplicate) =>
            partnerBrands.map((brand) => (
              <BrandItem key={`${brand.name}-${duplicate ? 'b' : 'a'}`} brand={brand} duplicate={duplicate} />
            )),
          )}
        </Marquee>
      </div>
    </section>
  )
}
