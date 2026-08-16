import type { PlannerStep } from '@/features/planner/data'

export function PlannerStepMedia({ meta }: { meta: PlannerStep }) {
  return (
    <div className="order-2 w-full px-2 md:order-1 md:w-[37.5%] lg:w-[31.25%] lg:px-4">
      <div className="relative aspect-[9/14] w-full overflow-hidden rounded-2xl bg-nd-soft group lg:rounded-3xl dark:bg-[#1a1a1a]">
        <img
          src={meta.mediaImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute bottom-0 left-0 z-20 w-full bg-black/80 px-3 py-2 text-center text-xs text-white lg:text-sm">
          {meta.mediaCaption}
        </div>
      </div>
    </div>
  )
}
