import { aboutAwardLogos } from '@/features/about/data'
import { PageContainer } from '@/components/ui/PageContainer'

export function AwardLogos() {
  return (
    <section className="py-10 lg:py-16 2xl:py-24" aria-label="Awards">
      <PageContainer variant="about">
        <div className="flex w-full flex-wrap items-center justify-center md:justify-between lg:-mb-0">
          {aboutAwardLogos.map((logo) => (
            <div
              key={logo.src}
              className="mb-8 inline-flex w-1/3 items-center justify-center px-2 md:mb-14 md:w-36 lg:mb-0 xl:w-56 xl:px-4 2xl:w-60"
            >
              <div className="relative px-4 lg:px-0">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 w-auto object-contain dark:invert xl:h-24"
                />
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
