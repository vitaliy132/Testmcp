import { brand } from '@/config/brand'

export function BrandAddress({ className }: { className?: string }) {
  return (
    <p className={className}>
      {brand.address.lines.map((line) => (
        <span key={line}>
          {line}
          <br />
        </span>
      ))}
    </p>
  )
}
