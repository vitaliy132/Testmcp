import { brand } from '@/config/brand'
import { contactContent } from '@/features/contact/data'
import { PageContainer } from '@/components/ui/PageContainer'
import { SocialLinks } from '@/components/ui/SocialLinks'

export function ContactStudio() {
  return (
    <section className="border-t border-black/5 py-16 lg:py-24 dark:border-white/10">
      <PageContainer>
        <div className="flex flex-wrap justify-between gap-10 lg:gap-16">
          <div className="w-full lg:w-[42%]">
            <h2 className="mb-5 text-[clamp(1.75rem,3.5vw,2.75rem)] leading-none tracking-tight">
              {contactContent.studioTitle}
            </h2>
            <p className="mb-10 text-base font-light leading-7 text-nd-muted dark:text-white/65">
              {contactContent.studioDescription}
            </p>

            <div className="mb-8">
              <p className="mb-2 text-sm font-medium text-nd-muted dark:text-white/55">Studio Address</p>
              <p className="text-base font-light leading-7 text-nd-ink dark:text-white/85">
                {brand.address.lines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>

            <div className="mb-8">
              <p className="mb-3 text-sm font-medium text-nd-muted dark:text-white/55">Follow us</p>
              <SocialLinks variant="pills" />
            </div>

            <a
              href={contactContent.directionsHref}
              target="_blank"
              rel="noreferrer"
              className="btn-lime inline-flex"
            >
              Get directions
            </a>
          </div>

          <div className="w-full overflow-hidden rounded-2xl lg:w-[50%] lg:rounded-3xl">
            <img
              src={contactContent.studioImage}
              alt={`${brand.name} studio`}
              className="aspect-[16/10] h-full w-full object-cover"
            />
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
