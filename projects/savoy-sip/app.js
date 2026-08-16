document.querySelector('form')?.addEventListener('submit', (e) => {
  e.preventDefault()
  const note = document.querySelector('.note')
  if (note) note.textContent = 'We’ll keep a seat by the window. See you in Mayfair.'
  e.currentTarget.reset()
})
