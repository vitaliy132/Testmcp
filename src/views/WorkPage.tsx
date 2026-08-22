import {
  WorkChapter,
  WorkHero,
  WorkIntro,
  WorkLiveCta,
  WorkRelated,
  WorkStills,
  WorkVideo,
} from '@/features/work'
import type { WorkCaseStudyItem } from '@/features/work/types'

export function WorkPage({ project }: { project: WorkCaseStudyItem }) {
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
