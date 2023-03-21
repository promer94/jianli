import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Noto_Serif_SC } from 'next/font/google'

const Noto = Noto_Serif_SC({ 
  subsets: ['latin'], 
  weight: ['400', '500', '700'],
})

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
        <main className={`p-5 mx-auto md:p-0 md:w-1/2 md:my-10 ${Noto.className}`}>
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
}
