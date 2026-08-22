import { Navigate, useParams } from 'react-router-dom'
import { brand } from '@/config/brand'
import { anchors, homeHash } from '@/config/routes'
import { getWorkCaseStudy } from '@/features/work/projects'
import { PageFallback } from '@/components/ui/PageFallback'
import { usePageTitle } from '@/hooks/usePageTitle'
import {
  WorkChapter,
  WorkHero,
  WorkIntro,
  WorkLiveCta,
  WorkRelated,
  WorkStills,
  WorkVideo,
} from '@/features/work'

export function WorkPage() {
  const { slug } = useParams()
  const project = getWorkCaseStudy(slug)

  usePageTitle(project ? `${project.client} | ${brand.name}` : undefined)

  if (!slug) {
    return <PageFallback />
  }

  if (!project) {
    return <Navigate to={homeHash(anchors.work)} replace />
  }

  const [design, development] = project.caseStudy.chapters

  return (
    <>
      <WorkHero project={project} />
      <WorkIntro project={project} />
      <WorkVideo project={project} />
      {design ? <WorkChapter chapter={design} /> : null}
      <WorkStills project={project} />
      {development ? <WorkChapter chapter={development} /> : null}
      <WorkRelated project={project} />
      <WorkLiveCta project={project} />
    </>
  )
}
