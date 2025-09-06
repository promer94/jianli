import { ImageResponse } from '@vercel/og'


// Image metadata
export const alt = '📄 Résumé'
export const size = {
  width: 1200,
  height: 600,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundImage: 'linear-gradient(to bottom, #dbf4ff, #fff1f1)',
          fontSize: 60,
          fontWeight: 700,
          textAlign: 'center',
        }}
      >
        <div
        >
          📄 Résumé
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      emoji: 'twemoji'
    }
  )
}