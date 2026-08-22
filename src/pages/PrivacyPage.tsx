import { brand } from '@/config/brand'
import { PrivacyContent } from '@/features/privacy'
import { usePageTitle } from '@/hooks/usePageTitle'

export function PrivacyPage() {
  usePageTitle(`Privacy Policy | ${brand.name}`)

  return <PrivacyContent />
}
