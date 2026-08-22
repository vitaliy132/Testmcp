import Image from 'next/image'
import type { ImageProps } from 'next/image'

export function MediaImage({
  alt,
  sizes = '100vw',
  quality = 85,
  ...props
}: ImageProps) {
  return <Image alt={alt} sizes={sizes} quality={quality} {...props} />
}
