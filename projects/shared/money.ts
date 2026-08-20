export type DemoCurrency = 'EUR' | 'AUD' | 'TRY'

export function formatMoney(value: number, currency: DemoCurrency) {
  const amount = Number(value) || 0
  if (currency === 'EUR') return `€${Math.round(amount)}`
  if (currency === 'TRY') return `₺${amount.toLocaleString('tr-TR')}`
  return `$${amount.toFixed(2)}`
}
