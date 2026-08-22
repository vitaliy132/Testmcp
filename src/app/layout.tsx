import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import Script from 'next/script'
import { preload } from 'react-dom'
import { brand } from '@/config/brand'
import { SiteChrome } from '@/components/layout/SiteChrome'
import { JsonLd } from '@/components/seo/JsonLd'
import { localBusinessJsonLd, SITE_URL } from '@/lib/seo'
import '@/index.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: brand.title,
    template: `%s | ${brand.name}`,
  },
  description: brand.description,
  applicationName: brand.name,
  icons: { icon: '/logo.svg' },
  openGraph: {
    siteName: brand.name,
    locale: 'en_GB',
    type: 'website',
  },
}

const themeScript = `(() => {
  try {
    const saved = localStorage.getItem(${JSON.stringify(brand.themeKey)})
    const dark =
      saved === 'dark' ||
      (saved !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList.toggle('dark', dark)
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light'
  } catch {}
})()`

export default function RootLayout({ children }: { children: ReactNode }) {
  preload('/videos/posters/hero-reel.jpg', { as: 'image', fetchPriority: 'high' })

  return (
    <html lang="en" className={spaceGrotesk.variable} suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <Script id="nd-theme" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <JsonLd data={localBusinessJsonLd()} />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  )
}

