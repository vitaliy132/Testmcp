import { brand } from '@/config/brand'
import { PlannerForm } from '@/features/planner'
import { usePageTitle } from '@/hooks/usePageTitle'

export function PlannerPage() {
  usePageTitle(`Project Planner | ${brand.name}`)

  return <PlannerForm />
}
