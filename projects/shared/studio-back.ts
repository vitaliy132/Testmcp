const ROOT_ID = 'nd-studio-back'
const STYLE_ID = 'nd-studio-back-style'
const LABEL = 'Back to Studio'

const ARROW = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true"><path fill="currentColor" d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"/></svg>`

const CSS = `
#nd-studio-back {
  pointer-events: none;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  width: 100%;
  justify-content: center;
  padding-bottom: max(1.5rem, env(safe-area-inset-bottom));
  opacity: 1;
  transition: opacity 0.3s ease;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
}
#nd-studio-back.is-hidden {
  opacity: 0;
}
#nd-studio-back.is-hidden .nd-studio-back__link {
  pointer-events: none;
}
#nd-studio-back .nd-studio-back__link {
  pointer-events: auto;
  position: relative;
  display: inline-flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  outline: none;
  filter: url(#ndStudioBackFilter);
  -webkit-tap-highlight-color: transparent;
}
#nd-studio-back .nd-studio-back__pill {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 9999px;
  padding: 0.5rem 1.25rem;
  background: #010202;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: 0;
  text-transform: none;
}
#nd-studio-back .nd-studio-back__label {
  position: relative;
  top: 1px;
}
#nd-studio-back .nd-studio-back__icon {
  position: relative;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 2.25rem;
  height: 2.25rem;
  margin-left: -0.25rem;
  border-radius: 9999px;
  background: #010202;
  color: #fff;
  transition: transform 0.3s ease-out;
}
#nd-studio-back .nd-studio-back__arrows {
  position: relative;
  display: block;
  width: 0.75rem;
  height: 0.75rem;
  overflow: hidden;
  color: #fff;
}
#nd-studio-back .nd-studio-back__arrows svg {
  display: block;
  width: 100%;
  height: 100%;
}
#nd-studio-back .nd-studio-back__arrow {
  position: absolute;
  inset: 0;
  transition: transform 0.3s ease-out;
}
#nd-studio-back .nd-studio-back__arrow--in {
  transform: translate(-100%, 100%);
}
#nd-studio-back .nd-studio-back__link:hover .nd-studio-back__icon,
#nd-studio-back .nd-studio-back__link:focus-visible .nd-studio-back__icon {
  transform: translateX(0.75rem) rotate(45deg);
}
#nd-studio-back .nd-studio-back__link:hover .nd-studio-back__arrow--out,
#nd-studio-back .nd-studio-back__link:focus-visible .nd-studio-back__arrow--out {
  transform: translate(100%, -100%);
}
#nd-studio-back .nd-studio-back__link:hover .nd-studio-back__arrow--in,
#nd-studio-back .nd-studio-back__link:focus-visible .nd-studio-back__arrow--in {
  transform: translate(0, 0);
}
#nd-studio-back .nd-studio-back__link:focus-visible {
  outline: 2px solid #d0ff71;
  outline-offset: 4px;
  border-radius: 9999px;
}
@media (prefers-reduced-motion: reduce) {
  #nd-studio-back,
  #nd-studio-back .nd-studio-back__icon,
  #nd-studio-back .nd-studio-back__arrow {
    transition: none;
  }
  #nd-studio-back .nd-studio-back__link:hover .nd-studio-back__icon,
  #nd-studio-back .nd-studio-back__link:focus-visible .nd-studio-back__icon {
    transform: none;
  }
  #nd-studio-back .nd-studio-back__link:hover .nd-studio-back__arrow--out,
  #nd-studio-back .nd-studio-back__link:focus-visible .nd-studio-back__arrow--out {
    transform: none;
  }
  #nd-studio-back .nd-studio-back__arrow--in,
  #nd-studio-back .nd-studio-back__link:hover .nd-studio-back__arrow--in,
  #nd-studio-back .nd-studio-back__link:focus-visible .nd-studio-back__arrow--in {
    transform: translate(-100%, 100%);
  }
}
`

function isStudioPath(pathname: string) {
  return pathname.startsWith('/') && !pathname.startsWith('//') && !pathname.startsWith('/projects')
}

function rememberReturn(slug: string, fallback: string) {
  const key = `nd-demo-return:${slug}`

  try {
    if (document.referrer) {
      const url = new URL(document.referrer)
      if (url.origin === location.origin && isStudioPath(url.pathname)) {
        const fromReferrer = `${url.pathname}${url.search}${url.hash}` || fallback
        try {
          sessionStorage.setItem(key, fromReferrer)
        } catch {
          /* private mode */
        }
        return fromReferrer
      }
    }
  } catch {
    /* ignore malformed referrer */
  }

  try {
    const stored = sessionStorage.getItem(key)
    if (stored && isStudioPath(stored)) return stored
  } catch {
    /* private mode */
  }

  return fallback
}

function injectStyle() {
  if (document.getElementById(STYLE_ID)) return
  const style = document.createElement('style')
  style.id = STYLE_ID
  style.textContent = CSS
  document.head.appendChild(style)
}

function hideNearFooter(root: HTMLElement) {
  const footer = document.querySelector('footer, .site-footer')
  if (!footer) return

  const io = new IntersectionObserver(
    ([entry]) => {
      if (!entry) return
      root.classList.toggle('is-hidden', entry.isIntersecting)
    },
    { rootMargin: '0px 0px 400px 0px', threshold: 0 },
  )
  io.observe(footer)
}

/** Floating gooey control that returns to the Northern Digital case study. */
export function mountStudioBack(slug: string) {
  if (document.getElementById(ROOT_ID)) return

  injectStyle()
  const href = rememberReturn(slug, `/work/${slug}`)

  const root = document.createElement('div')
  root.id = ROOT_ID
  root.innerHTML = `
    <svg width="0" height="0" aria-hidden="true" focusable="false" style="position:absolute">
      <defs>
        <filter id="ndStudioBackFilter" color-interpolation-filters="sRGB">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="ndStudioBackFilter" />
          <feComposite in="SourceGraphic" in2="ndStudioBackFilter" operator="atop" />
          <feBlend in="SourceGraphic" in2="ndStudioBackFilter" />
        </filter>
      </defs>
    </svg>
    <a class="nd-studio-back__link">
      <span class="nd-studio-back__pill"><span class="nd-studio-back__label">${LABEL}</span></span>
      <span class="nd-studio-back__icon">
        <span class="nd-studio-back__arrows">
          <span class="nd-studio-back__arrow nd-studio-back__arrow--out">${ARROW}</span>
          <span class="nd-studio-back__arrow nd-studio-back__arrow--in">${ARROW}</span>
        </span>
      </span>
    </a>
  `
  const link = root.querySelector('a')
  if (link instanceof HTMLAnchorElement) {
    link.href = href
    link.setAttribute('aria-label', 'Back to Northern Digital')
  }

  document.body.appendChild(root)
  hideNearFooter(root)
}
