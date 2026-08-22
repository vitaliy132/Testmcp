import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/** Next.js redirect sources always match an optional trailing slash, so a
 * `/projects/:id` → `/projects/:id/` redirect would loop. Handle the
 * no-slash case here instead. */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (pathname.endsWith('/')) return NextResponse.next()

  // nextUrl.pathname strips trailing slashes when trailingSlash is false.
  return NextResponse.redirect(new URL(`${pathname}/`, request.url), 308)
}

export const config = {
  matcher: '/projects/:project',
}
