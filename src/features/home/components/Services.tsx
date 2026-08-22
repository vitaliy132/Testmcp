import { useState } from 'react'
import { Link } from 'react-router-dom'
import { homeServices } from '@/features/service/data/registry'
import { servicesCopy } from '@/features/home/data/copy'
import { IMG } from '@/config/assets'
import { anchors } from '@/config/routes'
import { StartProjectButton } from '@/components/ui/StartProjectButton'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'

export function Services() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="services" className="scroll-mt-28 px-4 py-8 sm:px-5 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1600px] overflow-hidden rounded-2xl bg-[#1f1f1f] py-16 text-white lg:rounded-3xl lg:py-24 xl:py-28 dark:bg-[#171717]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 xl:px-12 2xl:px-16">
          <div className="mb-10 flex flex-wrap justify-between lg:mb-20">
            <div className="mb-3 w-full lg:mb-0 lg:w-[30%]">
              <SectionEyebrow tone="onDark">{servicesCopy.eyebrow}</SectionEyebrow>
            </div>

            <div className="flex w-full flex-wrap lg:w-[68%]">
              <h2 className="mb-5 w-full max-w-xl text-[clamp(1.5rem,3vw,2.75rem)] leading-none tracking-tight text-balance lg:mb-0 lg:w-[58%] xl:indent-24">
                {servicesCopy.heading}
              </h2>
              <div className="w-full lg:w-[42%]">
                <p className="mb-6 max-w-md text-base font-light leading-7 text-white/70 xl:text-[1.05rem]">
                  {servicesCopy.body}
                </p>
                <div className="flex flex-wrap items-center gap-5">
                  <StartProjectButton href={anchors.services} label={servicesCopy.cta} />
                  <a href={servicesCopy.andy.href} className="group flex items-center gap-3 text-sm">
                    <img
                      src={IMG.andy}
                      alt={servicesCopy.andy.title}
                      loading="lazy"
                      decoding="async"
                      className="h-11 w-11 rounded-full object-cover"
                    />
                    <span className="leading-tight transition duration-500 group-hover:-translate-x-3">
                      <span className="block">{servicesCopy.andy.title}</span>
                      <span className="block font-light text-white/45">{servicesCopy.andy.subtitle}</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            {homeServices.map((service, i) => {
              const isActive = active === i
              const dimmed = active !== null && !isActive

              return (
                <div
                  key={service.name}
                  className={`w-full border-b border-solid border-white/35 transition-opacity duration-300 ${
                    dimmed ? 'lg:opacity-30' : 'opacity-100'
                  }`}
                >
                  <Link
                    to={service.url}
                    className="group relative flex w-full min-w-0 items-center py-4 lg:py-6"
                    onMouseEnter={() => setActive(i)}
                    onMouseLeave={() => setActive(null)}
                  >
                    <div
                      className={`relative h-14 w-[4.5rem] shrink-0 overflow-hidden rounded-xl bg-white/10 transition-[width,margin] duration-700 ease-out sm:h-16 sm:w-20 md:h-28 md:w-36 md:rounded-2xl ${
                        isActive ? 'mr-3 sm:mr-4 md:mr-5' : 'mr-3 sm:mr-4 md:mr-5 lg:mr-0 lg:w-0'
                      }`}
                    >
                      <img
                        src={service.image}
                        alt={service.name}
                        loading="lazy"
                        decoding="async"
                        className={`absolute inset-y-0 left-0 h-full w-[4.5rem] max-w-none object-cover transition-opacity duration-300 sm:w-20 md:w-36 ${
                          isActive ? 'opacity-100' : 'opacity-100 lg:opacity-0'
                        }`}
                      />
                    </div>

                    <div
                      className={`relative min-w-0 flex-1 transition-transform duration-300 ease-out ${
                        isActive ? 'translate-x-0 delay-0 md:translate-x-6' : 'translate-x-0 delay-100 lg:translate-x-0'
                      }`}
                    >
                      <span className="block text-[clamp(1.75rem,7.5vw,3.25rem)] leading-[0.92] tracking-tight text-balance lg:text-[min(7vw,4.25rem)] xl:text-[min(6.5vw,4.5rem)]">
                        {service.name}
                      </span>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
