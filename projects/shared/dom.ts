export function $<T extends Element = HTMLElement>(
  sel: string,
  root: ParentNode = document,
): T | null {
  return root.querySelector<T>(sel)
}

export function $$<T extends Element = HTMLElement>(
  sel: string,
  root: ParentNode = document,
): T[] {
  return [...root.querySelectorAll<T>(sel)]
}

export function closestElement(target: EventTarget | null, sel: string): HTMLElement | null {
  return target instanceof Element ? target.closest(sel) : null
}

export function debounce(fn: () => void, ms: number) {
  let timer = 0
  return () => {
    window.clearTimeout(timer)
    timer = window.setTimeout(fn, ms)
  }
}

export function queryParam(name: string) {
  return new URLSearchParams(location.search).get(name)
}

export function setText(sel: string, value: string) {
  const el = $(sel)
  if (el) el.textContent = value
}
