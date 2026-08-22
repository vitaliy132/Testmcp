import { FaqsPage } from '@/views/FaqsPage'
import { JsonLd } from '@/components/seo/JsonLd'
import { allFaqItems, faqPageJsonLd, faqsMeta } from '@/lib/seo'

export const metadata = faqsMeta

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(allFaqItems())} />
      <FaqsPage />
    </>
  )
}
