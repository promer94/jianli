import { PropsWithChildren } from 'react'
import { Noto_Serif_SC } from 'next/font/google'
const Noto = Noto_Serif_SC({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const Container = ({ children }: PropsWithChildren<{}>) => {
  return (
    <main className={`p-5 mx-auto md:p-0 md:w-1/2 md:my-10 ${Noto.className}`}>
      {children}
    </main>
  )
}