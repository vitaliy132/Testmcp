import type { ReactNode } from 'react'

export function FaqSectionLayout({
  intro,
  children,
}: {
  intro: ReactNode
  children: ReactNode
}) {
  return (
    <div className="flex flex-wrap justify-between gap-10 lg:gap-0">
      <div className="w-full lg:w-[32%] xl:w-[30%]">
        <div className="flex flex-col items-start gap-4 lg:sticky lg:top-32 lg:gap-5">{intro}</div>
      </div>
      <div className="w-full lg:w-[62%] xl:w-[58%]">{children}</div>
    </div>
  )
}
