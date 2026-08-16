const bars = document.querySelectorAll('.bars span')
bars.forEach((el, i) => {
  const h = [42, 68, 55, 82, 61, 90, 74, 88][i] ?? 50
  el.style.height = `${h}%`
})

const form = document.querySelector('form')
form?.addEventListener('submit', (e) => {
  e.preventDefault()
  const note = form.querySelector('.note')
  if (note) note.textContent = 'Thank you. A private banker will be in touch.'
  form.reset()
})
