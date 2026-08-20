export function escapeHtml(value: string | number | undefined | null) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export function escapeAttr(value: string | number | undefined | null) {
  return escapeHtml(value).replace(/"/g, '&quot;')
}
