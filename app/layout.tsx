import './globals.css';
import Script from 'next/script';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <link
        rel="icon"
        href={`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50' y='.9em' font-size='90' text-anchor='middle'>📄</text><style>text{font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";fill:black}@media(prefers-color-scheme:dark){text{fill:white}}</style></svg>`}
      />
      <body>
        {children}
      </body>
    </html>
  )
}
