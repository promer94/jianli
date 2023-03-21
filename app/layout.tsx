import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Container } from '~/components/container';
export const metadata = {
  title: '许一旋-软件工程师-简历',
  description: '许一旋 软件工程师 南安普顿大学-硕士',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>
        <Container>
          {children}
        </Container>
        <Analytics />
      </body>
    </html>
  )
}
