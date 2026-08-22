import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getWorkCaseStudy, work } from '@/features/work'
import { isWorkCaseStudyItem } from '@/features/work/types'
import { WorkPage } from '@/views/WorkPage'
import { pageMeta } from '@/lib/seo'
import { workItem } from '@/config/routes'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return work.filter(isWorkCaseStudyItem).map((project) => ({ slug: project.id }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getWorkCaseStudy(slug)
  if (!project) return {}
  return pageMeta({
    title: project.client,
    description: project.caseStudy.dek,
    path: workItem(slug),
  })
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const project = getWorkCaseStudy(slug)
  if (!project) notFound()
  return <WorkPage project={project} />
}
