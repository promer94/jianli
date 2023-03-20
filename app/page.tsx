import { Noto_Serif_SC } from 'next/font/google'

const Noto = Noto_Serif_SC({ subsets:['latin'], weight: ['400', '500','700'] })

export default function Home() {
  return (
    <main className={`${Noto.className} text-3xl`}>
      许一旋
    </main>
  )
}
