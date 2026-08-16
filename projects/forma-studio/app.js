const toast = document.querySelector('.toast')
let count = 0

document.querySelectorAll('[data-add]').forEach((btn) => {
  btn.addEventListener('click', () => {
    count += 1
    const bag = document.querySelector('[data-bag]')
    if (bag) bag.textContent = `Bag (${count})`
    if (toast) {
      toast.textContent = `${btn.getAttribute('data-add')} added to bag`
      toast.classList.add('show')
      window.setTimeout(() => toast.classList.remove('show'), 1800)
    }
  })
})

document.querySelector('[data-checkout]')?.addEventListener('click', (e) => {
  e.preventDefault()
  const note = document.querySelector('[data-checkout-note]')
  if (note) note.textContent = 'Checkout is a demo — no payment is taken.'
})
