import { Link } from 'react-router-dom'
import { brand } from '@/config/brand'
import { external, footerCols, routes } from '@/config/links'
import { IMG } from '@/data/assets'
import { StartProjectButton } from '@/components/ui/StartProjectButton'

function isInternalHref(href: string) {
  return href.startsWith('/') && !href.startsWith('//')
}

function FooterLink({ href, label }: { href: string; label: string }) {
  if (isInternalHref(href)) {
    return (
      <Link to={href} className="text-white/85 transition hover:text-nd-lime">
        {label}
      </Link>
    )
  }

  return (
    <a href={href} className="text-white/85 transition hover:text-nd-lime">
      {label}
    </a>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-nd-darker text-white">
      <div className="overflow-hidden border-b border-white/10 py-6">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap text-[clamp(2.5rem,8vw,6rem)] font-medium tracking-tight text-white/90">
          <span>Let’s work together · Crafting since 2010 ·</span>
          <span>Let’s work together · Crafting since 2010 ·</span>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
          <h2 className="max-w-[12ch] text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05] tracking-tight">
            Do you like what you see?
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <StartProjectButton />
            <img src={IMG.googleBadgeWhite} alt="Google reviews" className="h-12 w-auto opacity-90" />
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(footerCols).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 text-sm font-medium text-white/45">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href} label={link.label} />
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
              <p className="pt-3 text-sm text-white/55">
                {brand.address.lines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              <a
                href={brand.address.what3wordsHref}
                target="_blank"
                rel="noreferrer"
                className="inline-block pt-1 text-sm text-nd-lime"
              >
                {brand.address.what3words}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-4 border-t border-white/10 pt-8 text-sm text-white/45">
          <span>Crafting since 2010</span>
          <span>
            © {brand.legalName} {year}
          </span>
          <span>Company Reg Number {brand.companyReg}</span>
          <Link to={routes.privacy} className="hover:text-white">
            Privacy Policy
          </Link>
          <div className="ml-auto flex gap-4">
            <a href={external.social.linkedin} className="hover:text-white">
              LinkedIn
            </a>
            <a href={external.social.x} className="hover:text-white">
              X
            </a>
            <a href={external.social.instagram} className="hover:text-white">
              Instagram
            </a>
            <a href={external.social.behance} className="hover:text-white">
              Behance
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
