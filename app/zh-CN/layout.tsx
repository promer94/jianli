import { Metadata } from 'next'
import { Noto_Serif_SC } from 'next/font/google'

const Noto = Noto_Serif_SC({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-serif-sc'
})

export const metadata: Metadata = {
  title: '简历-软件工程师',
  description: '许一旋-软件工程师',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className={`
      mx-auto p-5
      md:my-10 md:w-1/2 md:p-0
      ${Noto.variable}
      font-sans
    `}>
      {children}
    </main>
  )
}
