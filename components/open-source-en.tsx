import { Suspense } from 'react'
import { Star, PackageOpen } from 'lucide-react'
import { cacheLife } from 'next/cache'

const headers = {
  'Authorization': `Bearer ${process.env.NEXT_GITHUB_API_TOKEN}`
}

const Loading = () => <span className='h-4 w-12 animate-pulse bg-slate-200'></span>
const SWRStars = async () => {
  'use cache'
  cacheLife('weeks')
  const data = await fetch('https://api.github.com/repos/vercel/swr', {
    headers: headers,
  }).then(res => res.json()).then<number>(v => v.stargazers_count
  ).catch(() => null)
  return data ? (
    <>
      <Star size={14} className='md:hidden'></Star>
      <Star size={18} className={`
        hidden
        md:block
      `}></Star>
      <span className='md:inline'>{data}</span>
    </>
  ) : null
}

const NextraStars = async () => {
  'use cache'
  cacheLife('weeks')
  const data = await fetch('https://api.github.com/repos/shuding/nextra', {
    headers: headers,
  }).then(res => res.json()).then<number>(v => v.stargazers_count).catch(() => null)
  return data ? (
    <>
      <Star size={14} className='md:hidden'></Star>
      <Star size={18} className={`
        hidden
        md:block
      `}></Star>
      <span className='md:inline'>{data}</span>
    </>
  ) : null
}

const TurbocacheStars = async () => {
  'use cache'
  cacheLife('weeks')
  const data = await fetch('https://api.github.com/repos/promer94/turbocache', {
    headers: headers,
  }).then(res => res.json()).then<number>(v => v.stargazers_count).catch(() => null)
  return data ? (
    <>
      <Star size={14} className='md:hidden'></Star>
      <Star size={18} className={`
        hidden
        md:block
      `}></Star>
      <span className='md:inline'>{data}</span>
    </>
  ) : null
}

export const OpenSource = () => {
  return (
    <div className={`
      my-4
      md:my-6
    `}>
      <div className='flex items-center gap-4'>
        <div className={`
          text-xl font-semibold
          md:text-2xl
        `}>OPEN SOURCE</div>
        <PackageOpen size={20}></PackageOpen>
        <div className='h-px flex-1 bg-black'></div>
      </div>
      <div className={`
        my-4
        md:my-6
      `}>
        <div className={`
          flex items-center justify-between
          md:text-xl
        `}>
          <a className={`
            font-medium
            md:text-xl
          `} href='https://swr.vercel.app' target="_blank">SWR</a>
          <a className={`
            flex items-center gap-2 text-sm text-gray-700
            md:text-lg
          `} href='https://github.com/vercel/swr' target="_blank">
            <Suspense fallback={<Loading />}>
              <SWRStars />
            </Suspense>
          </a>
        </div>
        <div className={`
          text-sm text-gray-700
          md:text-lg
        `}>Collaborator</div>
        <div className={`
          my-2 prose prose-sm max-w-none prose-neutral
          md:prose-base
        `}>
          <ul>
            <li>Redesigned and implemented cache synchronization for SWR 2.0 to make it fully compatible with React 18.</li>
            <li>Continuously improving TypeScript interface of SWR for better developer experience.</li>
            <li>Answering issues and fixing bugs, landed 80+ PRs so far.</li>
          </ul>
        </div>
      </div>
      <div className={`
        my-4
        md:my-6
      `}>
        <div className={`
          flex items-center justify-between
          md:text-xl
        `}>
          <a className={`
            font-medium
            md:text-xl
          `} href='https://nextra.site' target="_blank">Nextra</a>
          <a className={`
            flex items-center gap-2 text-sm text-gray-700
            md:text-lg
          `} href='https://github.com/shuding/nextra' target="_blank">
            <Suspense fallback={<Loading />}>
              <NextraStars />
            </Suspense>
          </a>
        </div>
        <div className={`
          text-sm text-gray-700
          md:text-lg
        `}>Collaborator</div>
        <div className={`
          my-2 prose prose-sm max-w-none prose-neutral
          md:prose-base
        `}>
          <ul>
            <li>Refactored the whole project with TypeScript and Turborepo.</li>
            <li>Built a webpack cache plugin, reduced the total build time by 10%.</li>
            <li>Answering issues and fixing bugs, landed 30+ PRs so far.</li>
          </ul>
        </div>
      </div>
      <div className={`
        my-4
        md:my-6
      `}>
        <div className={`
          flex items-center justify-between
          md:text-xl
        `}>
          <a className={`
            font-medium
            md:text-xl
          `} href='https://turbocache.vercel.app' target="_blank">Turbocache</a>
          <a className={`
            flex items-center gap-2 text-sm text-gray-700
            md:text-lg
          `} href='https://github.com/promer94/turbocache' target="_blank">
            <Suspense fallback={<Loading />}>
              <TurbocacheStars />
            </Suspense>
          </a>
        </div>
        <div className={`
          my-2 prose prose-sm max-w-none prose-neutral
          md:prose-base
        `}>
          Turbocache is remote caching service built with Next.js, PlanetScale and Cloudflare R2 to accelerate monorepo builds.
          It could be used with popular monorepo tools like Nx, Rush, Turborepo, etc.
        </div>
      </div>
    </div>
  )
}