import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { brand } from '@/config/brand'
import { anchors, homeHash } from '@/config/routes'
import { getWorkCaseStudy } from '@/data/work'
import { WorkHero, WorkIntro, WorkRelated, WorkStills, WorkVideo } from '@/features/work'

export function WorkPage() {
  const { slug } = useParams()
  const project = getWorkCaseStudy(slug)

  useEffect(() => {
    if (!project) return
    const previous = document.title
    document.title = `${project.client} | ${brand.name}`
    return () => {
      document.title = previous
    }
  }, [project])

  if (!project) {
    return <Navigate to={homeHash(anchors.work)} replace />
  }

  return (
    <>
      <WorkHero project={project} />
      <WorkIntro project={project} />
      <WorkVideo project={project} />
      <WorkStills project={project} />
      <WorkRelated project={project} />
    </>
  )
}
