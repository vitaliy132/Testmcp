import { Marquee } from '@/components/ui/Marquee'
import { careersContent } from '@/features/careers/data'

export function CareersGallery() {
  const row = [...careersContent.gallery, ...careersContent.gallery]

  return (
    <section className="overflow-hidden pb-8 lg:pb-12" aria-label="Life in the studio">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent dark:from-nd-dark sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent dark:from-nd-dark sm:w-16" />

        <Marquee className="items-center gap-3 sm:gap-4">
          {row.map((src, i) => (
            <img
              key={`${src}-${i}`}
              src={src}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-40 w-52 shrink-0 rounded-2xl object-cover sm:h-52 sm:w-72 lg:h-64 lg:w-[22rem] lg:rounded-3xl"
            />
          ))}
        </Marquee>
      </div>
    </section>
  )
}
