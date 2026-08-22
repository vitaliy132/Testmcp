import { brand } from '@/config/brand'
import { ContactFaqs, ContactHero, ContactStudio } from '@/features/contact'
import { usePageTitle } from '@/hooks/usePageTitle'

export function ContactPage() {
  usePageTitle(`Contact | ${brand.name}`)

  return (
    <>
      <ContactHero />
      <ContactStudio />
      <ContactFaqs />
    </>
  )
}
