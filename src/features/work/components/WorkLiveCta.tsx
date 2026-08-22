import { useEffect, useState } from 'react'
import type { WorkCaseStudyItem } from '@/features/work/types'
import { workPageCopy } from '@/features/work/data'
import { GooeyLink } from '@/components/ui/GooeyButton'
import { isInternalHref } from '@/lib/links'

export function WorkLiveCta({ project }: { project: WorkCaseStudyItem }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const footer = document.getElementById('contact')
    if (!footer) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return
        setVisible(!entry.isIntersecting)
      },
      { rootMargin: '0px 0px 400px 0px', threshold: 0 },
    )

    io.observe(footer)
    return () => io.disconnect()
  }, [])

  return (
    <div
      className={`pointer-events-none fixed bottom-0 left-0 z-40 flex w-full justify-center pb-[max(1.5rem,env(safe-area-inset-bottom))] transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className={visible ? 'pointer-events-auto' : 'pointer-events-none'}>
        <GooeyLink
          href={project.liveUrl}
          label={workPageCopy.liveCta}
          tone="ink"
          external={!isInternalHref(project.liveUrl)}
        />
      </div>
    </div>
  )
}
