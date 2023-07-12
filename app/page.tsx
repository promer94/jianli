import { Suspense } from 'react'
import { Loading } from '~/components/personal-information';

export default function Home() {
  return (
    <Suspense fallback={<Loading />} />
  )
}

export const runtime = 'edge'
