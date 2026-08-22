import { brand } from '@/config/brand'
import { FaqsContent } from '@/features/faqs'
import { usePageTitle } from '@/hooks/usePageTitle'

export function FaqsPage() {
  usePageTitle(`Frequently Asked Questions | ${brand.name}`)

  return <FaqsContent />
}
