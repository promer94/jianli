import { Metadata } from 'next'
import { Roboto_Serif } from 'next/font/google'

const Roboto = Roboto_Serif({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-serif-sc',
  display: 'block'
})

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Resume of YixuanXu',
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
      ${Roboto.variable}
      font-sans
    `}>
      {children}
    </main>
  )
}
