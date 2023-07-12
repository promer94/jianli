import { Inter as Inter_Font } from 'next/font/google'

const Inter = Inter_Font({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-serif-sc'
})

export const metadata = {
  title: 'Resume-Software Engineer',
  description: 'Resume of promer94',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className={`p-5 mx-auto md:p-0 md:w-1/2 md:my-10 ${Inter.variable} font-sans`}>
      {children}
    </main>
  )
}
