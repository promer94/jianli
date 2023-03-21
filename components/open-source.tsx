import { Suspense } from 'react'
import { Star } from 'lucide-react'

const headers = {
  'Authorization': `Bearer ${process.env.NEXT_GITHUB_API_TOKEN}`
}

const Loading = () => <span className='animate-pulse bg-slate-200 w-12 h-4'></span>
const SWRStars = async () => {
  const data = await fetch('https://api.github.com/repos/vercel/swr', {
    headers: headers,
  }).then(res => res.json()).then<number>(v => v.stargazers_count).catch(() => null)
  return data ? (
    <>
      <Star size={14} className='md:hidden'></Star>
      <Star size={18} className='hidden md:block'></Star>
      <span className='hidden md:inline'>{data}</span>
    </>
  ) : null
}

const NextraStars = async () => {
  const data = await fetch('https://api.github.com/repos/shuding/nextra', {
    headers: headers,
  }).then(res => res.json()).then<number>(v => v.stargazers_count).catch(() => null)
  return data ? (
    <>
      <Star size={14} className='md:hidden'></Star>
      <Star size={18} className='hidden md:block'></Star>
      <span className='hidden md:inline'>{data}</span>
    </>
  ) : null
}

export const OpenSource = () => {
  return (
    <div className='my-4 md:my-6'>
      <div className='flex gap-1 items-center'>
        <div className='text-xl md:text-2xl font-semibold'>开源项目</div>
        <div className='flex-1 h-[1px] bg-black'></div>
      </div>
      <div className='my-4 md:my-6'>
        <div className='flex justify-between items-center md:text-xl'>
          <a className='font-medium md:text-xl' href='https://swr.vercel.app'>SWR</a>
          <a className='flex gap-2 items-center text-gray-700 text-sm md:text-lg' href='https://github.com/vercel/swr'>
            <Suspense fallback={<Loading />}>
              {/** @ts-expect-error */}
              <SWRStars />
            </Suspense>
          </a>
        </div>
        <div className='text-gray-700 text-sm md:text-lg'>Collaborator</div>
        <div className='my-2 prose prose-sm prose-neutral max-w-none md:prose-base'>

        </div>
      </div>
      <div className='my-4 md:my-6'>
        <div className='flex justify-between items-center md:text-xl'>
          <a className='font-medium md:text-xl' href='https://nextra.site'>Nextra</a>
          <a className='flex gap-2 items-center text-gray-700 text-sm md:text-lg' href='https://github.com/shuding/nextra'>
            <Suspense fallback={<Loading />}>
              {/** @ts-expect-error */}
              <NextraStars />
            </Suspense>
          </a>
        </div>
        <div className='text-gray-700 text-sm md:text-lg'>Collaborator</div>
      </div>
    </div>
  )
}