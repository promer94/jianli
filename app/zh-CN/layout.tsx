import { Noto_Serif_SC } from 'next/font/google'

const Noto = Noto_Serif_SC({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-serif-sc'
})

export const metadata = {
  title: '简历-全栈工程师',
  description: '许一旋-全栈工程师',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className={`p-5 mx-auto md:p-0 md:w-1/2 md:my-10 ${Noto.variable} font-sans`}>
      {children}
    </main>
  )
}
