import { Link } from 'react-router-dom'
import { brand } from '@/config/brand'
import { footerCols } from '@/config/nav'
import { routes } from '@/config/routes'
import { StartProjectButton } from '@/components/ui/StartProjectButton'
import { Marquee } from '@/components/ui/Marquee'
import { SmartLink } from '@/components/ui/SmartLink'
import { PageContainer } from '@/components/ui/PageContainer'
import { BrandAddress } from '@/components/ui/BrandAddress'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-nd-darker text-white pb-[env(safe-area-inset-bottom)]">
      <Link
        to={routes.contact}
        className="block overflow-hidden border-b border-white/10 py-6 text-inherit no-underline"
      >
        <Marquee className="gap-10 whitespace-nowrap text-[clamp(2.5rem,8vw,6rem)] font-medium tracking-tight text-white/90">
          <span>Let’s work together ·</span>
          <span>Let’s work together ·</span>
        </Marquee>
      </Link>

      <PageContainer className="py-16 lg:py-20">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
          <h2 className="max-w-[12ch] text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05] tracking-tight">
            Do you like what you see?
          </h2>
          <StartProjectButton />
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(footerCols).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 text-sm font-medium text-white/45">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <SmartLink href={link.href} className="text-white/85 transition hover:text-nd-lime">
                      {link.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="mb-4 text-sm font-medium text-white/45">Get in touch</h3>
            <div className="space-y-2 text-white/85">
              <a href={brand.phoneHref} className="block hover:text-nd-lime">
                {brand.phone}
              </a>
              <a href={`mailto:${brand.email}`} className="block hover:text-nd-lime">
                {brand.email}
              </a>
              <BrandAddress className="pt-3 text-sm text-white/55" />
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-4 border-t border-white/10 pt-8 text-sm text-white/45">
          <span>
            © {brand.legalName} {year}
          </span>
          <Link to={routes.privacy} className="hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </PageContainer>
    </footer>
  )
}
