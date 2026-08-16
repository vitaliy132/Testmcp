document.querySelector('form')?.addEventListener('submit', (e) => {
  e.preventDefault()
  const note = document.querySelector('.note')
  if (note) note.textContent = 'Table held. We’ll confirm by SMS shortly.'
  e.currentTarget.reset()
})
