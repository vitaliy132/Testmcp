import { $, $$, closestElement } from '../shared/dom.ts'
import { toast } from '../shared/toast.ts'
import { chromeHTML, footerHTML } from './chrome.ts'
import {
  mountCart,
  mountContact,
  mountFaq,
  mountGallery,
  mountHome,
  mountJournal,
  mountProduct,
  mountStore,
} from './pages.ts'
import { renderBagCount } from './shop.ts'

function bindChrome() {
  $('[data-open-nav]')?.addEventListener('click', () => $('[data-drawer]')?.classList.add('open'))
  $('[data-close-nav]')?.addEventListener('click', () => $('[data-drawer]')?.classList.remove('open'))

  $$('.nav-item').forEach((item) => {
    const drop = item.querySelector('.dropdown')
    if (!drop) return
    item.querySelector('button')?.addEventListener('click', (event) => {
      event.preventDefault()
      item.classList.toggle('open')
    })
  })
  document.addEventListener('click', (event) => {
    if (!closestElement(event.target, '.nav-item')) {
      $$('.nav-item').forEach((item) => item.classList.remove('open'))
    }
  })

  $$('[data-account]').forEach((el) => {
    el.addEventListener('click', (event) => {
      event.preventDefault()
      toast('Demo — accounts are not connected.', 2200)
    })
  })

  $<HTMLFormElement>('[data-newsletter]')?.addEventListener('submit', (event) => {
    event.preventDefault()
    const ok = $('[data-nl-ok]')
    if (ok) ok.style.display = 'block'
    const form = event.currentTarget
    if (form instanceof HTMLFormElement) form.reset()
  })
}

function boot() {
  const chrome = $('[data-chrome]')
  const footer = $('[data-footer]')
  if (chrome) chrome.outerHTML = chromeHTML()
  if (footer) footer.outerHTML = footerHTML()
  bindChrome()
  renderBagCount()

  const page = document.body.dataset.page
  if (page === 'home') mountHome()
  if (page === 'store') mountStore()
  if (page === 'product') mountProduct()
  if (page === 'cart') mountCart()
  if (page === 'contact') mountContact()
  if (page === 'architecture') mountGallery('architecture')
  if (page === 'design') mountGallery('design')
  if (page === 'journal') mountJournal()
  if (page === 'faq') mountFaq()
}

boot()
