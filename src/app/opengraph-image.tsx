import { ImageResponse } from 'next/og'
import { brand } from '@/config/brand'

export const alt = brand.title
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#010202',
          color: '#f5f5f5',
          padding: 72,
          fontFamily: 'ui-sans-serif, system-ui, sans-serif',
        }}
      >
        <div
          style={{
            width: 18,
            height: 18,
            background: '#d0ff71',
            borderRadius: 4,
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 500,
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            {brand.name}
          </div>
          <div style={{ fontSize: 32, color: '#b8b8b8', letterSpacing: -0.5 }}>
            Web Design Agency Leeds
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
