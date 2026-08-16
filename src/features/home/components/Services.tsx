import { useState } from 'react'
import { Link } from 'react-router-dom'
import { services } from '@/data/content'
import { IMG } from '@/data/assets'
import { StartProjectButton } from '@/components/ui/StartProjectButton'

export function Services() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="services" className="px-3 py-8 sm:px-5 lg:px-8 lg:py-12">
      {/* Original Shape pattern: inset rounded dark panel, not full-bleed */}
      <div className="mx-auto max-w-[1600px] overflow-hidden rounded-2xl bg-[#1f1f1f] py-16 text-white lg:rounded-3xl lg:py-24 xl:py-28 dark:bg-[#171717]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 xl:px-12 2xl:px-16">
          <div className="mb-10 flex flex-wrap justify-between lg:mb-20">
            <div className="mb-3 w-full lg:mb-0 lg:w-[30%]">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span className="text-sm font-light lg:text-base">Our Expertise</span>
              </div>
            </div>

            <div className="flex w-full flex-wrap lg:w-[68%]">
              <h2 className="mb-5 w-full max-w-xl text-[clamp(1.5rem,3vw,2.75rem)] leading-none tracking-tight text-balance lg:mb-0 lg:w-[58%] xl:indent-24">
                How we take your business to the next level
              </h2>
              <div className="w-full lg:w-[42%]">
                <p className="mb-6 max-w-md text-base font-light leading-7 text-white/70 xl:text-[1.05rem]">
                  We are a digital marketing agency with expertise, and we’re on a mission to help you take the next
                  step in your business.
                </p>
                <div className="flex flex-wrap items-center gap-5">
                  <StartProjectButton href="#services" label="See all services" />
                  <a href="#about" className="group flex items-center gap-3 text-sm">
                    <img
                      src={IMG.andy}
                      alt="Hear from Andy"
                      className="h-11 w-11 rounded-full object-cover"
                    />
                    <span className="leading-tight transition duration-500 group-hover:-translate-x-3">
                      <span className="block">Hear from Andy</span>
                      <span className="block font-light text-white/45">Co-founder of Northern Digital</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            {services.map((service, i) => {
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
                    className="group relative flex w-full items-center py-4 lg:py-6"
                    onMouseEnter={() => setActive(i)}
                    onMouseLeave={() => setActive(null)}
                  >
                    {/* Thumbnail: always visible on mobile; collapses to 0 on desktop until hover */}
                    <div
                      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white/10 transition-all duration-700 ease-out md:rounded-2xl ${
                        isActive
                          ? 'mr-4 h-16 w-20 md:mr-5 md:h-28 md:w-36'
                          : 'mr-4 h-16 w-20 md:mr-5 md:h-28 md:w-36 lg:mr-0 lg:w-0'
                      }`}
                    >
                      <img
                        src={service.image}
                        alt={service.name}
                        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
                          isActive ? 'opacity-100' : 'opacity-100 lg:opacity-0'
                        }`}
                      />
                    </div>

                    {/* Huge vw type + shift on hover (and always shifted on mobile) */}
                    <div
                      className={`relative inline-flex transition-transform duration-300 ease-out ${
                        isActive ? 'translate-x-6 delay-0' : 'translate-x-6 delay-100 lg:translate-x-0'
                      }`}
                    >
                      <span className="text-[8vw] leading-[0.92] tracking-tight text-balance lg:text-[7vw] xl:text-[6.5vw]">
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
