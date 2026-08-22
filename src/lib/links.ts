function isProjectSiteHref(href: string) {
  return href === '/projects' || href.startsWith('/projects/')
}

export function isInternalHref(href: string) {
  return href.startsWith('/') && !href.startsWith('//') && !isProjectSiteHref(href)
}
