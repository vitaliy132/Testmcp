const brands = Array.from({ length: 8 }, (_, i) => ({ id: i + 1 }))

function BrandSlot() {
  return (
    <div
      className="flex h-12 w-28 shrink-0 items-center justify-center rounded-lg border border-dashed border-black/15 bg-black/[0.03] dark:border-white/20 dark:bg-white/[0.04] sm:h-14 sm:w-36"
      aria-hidden
    />
  )
}

export function BrandMarquee() {
  const row = [...brands, ...brands]

  return (
    <section className="overflow-hidden border-y border-black/5 py-8 dark:border-white/10 lg:py-10" aria-label="Brand partners">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent dark:from-[#121212] sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent dark:from-[#121212] sm:w-24" />

        <div className="animate-marquee flex w-max items-center gap-10 sm:gap-14">
          {row.map((brand, i) => (
            <BrandSlot key={`${brand.id}-${i}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
