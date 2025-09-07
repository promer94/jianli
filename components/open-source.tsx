import { Suspense } from 'react'
import { Star, PackageOpen } from 'lucide-react'

const headers = {
  'Authorization': `Bearer ${process.env.NEXT_GITHUB_API_TOKEN}`
}

const Loading = () => <span className='animate-pulse bg-slate-200 w-12 h-4'></span>
const SWRStars = async () => {
  const data = await fetch('https://api.github.com/repos/vercel/swr', {
    headers: headers,
  }).then(res => res.json()).then<number>(v => v.stargazers_count
  ).catch(() => null)
  return data ? (
    <>
      <Star size={14} className='md:hidden'></Star>
      <Star size={18} className='hidden md:block'></Star>
      <span className='md:inline'>{data}</span>
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
      <span className='md:inline'>{data}</span>
    </>
  ) : null
}

const TurbocacheStars = async () => {
  const data = await fetch('https://api.github.com/repos/promer94/turbocache', {
    headers: headers,
  }).then(res => res.json()).then<number>(v => v.stargazers_count).catch(() => null)
  return data ? (
    <>
      <Star size={14} className='md:hidden'></Star>
      <Star size={18} className='hidden md:block'></Star>
      <span className='md:inline'>{data}</span>
    </>
  ) : null
}

export const OpenSource = () => {
  return (
    <div className='my-4 md:my-6'>
      <div className='flex gap-4 items-center'>
        <div className='text-xl md:text-2xl font-semibold'>开源项目</div>
        <PackageOpen size={20}></PackageOpen>
        <div className='flex-1 h-[1px] bg-black'></div>
      </div>
      <div className='my-4 md:my-6'>
        <div className='flex justify-between items-center md:text-xl'>
          <a className='font-medium md:text-xl' href='https://swr.vercel.app' target="_blank">SWR</a>
          <a className='flex gap-2 items-center text-gray-700 text-sm md:text-lg' href='https://github.com/vercel/swr' target="_blank">
            <Suspense fallback={<Loading />}>
              <SWRStars />
            </Suspense>
          </a>
        </div>
        <div className='text-gray-700 text-sm md:text-lg'>核心开发者</div>
        <div className='my-2 prose prose-sm prose-neutral max-w-none md:prose-base'>
          <a href="https://github.com/vercel/swr">SWR</a> 是社区最流行的 React Hooks 库之一，用于数据获取和状态管理，NPM 每周下载量超过百万次。
          <ul>
            <li>为 SWR 添加了 React 18 支持，帮助 SWR 完成了 2.0 版本的发布。</li>
            <li>使用 TypeScript 严格模式重构了 SWR，调整优化了对外提供的 TypeScript 接口，提供了更加智能的类型推导，提升了开发体验。</li>
            <li>帮助回答和修复社区的多个 issue 和 bug, 累计贡献 80+ PR。</li>
          </ul>
        </div>
      </div>
      <div className='my-4 md:my-6'>
        <div className='flex justify-between items-center md:text-xl'>
          <a className='font-medium md:text-xl' href='https://nextra.site' target="_blank">Nextra</a>
          <a className='flex gap-2 items-center text-gray-700 text-sm md:text-lg' href='https://github.com/shuding/nextra' target="_blank">
            <Suspense fallback={<Loading />}>
              <NextraStars />
            </Suspense>
          </a>
        </div>
        <div className='text-gray-700 text-sm md:text-lg'>核心开发者</div>
        <div className='my-2 prose prose-sm prose-neutral max-w-none md:prose-base'>
          <a href="https://github.com/shuding/nextra">Nextra</a> 是一个基于 Next.js 的静态站点生成器，用于创建高性能的博客和文档网站。<a href='https://turbo.build' target='_blank'>Turbo</a>、 <a href="https://swc.rs" target='_blank'>SWC</a> 和 <a href='https://nodejs.org' target='_blank'>Node.js</a> 等知名项目和组织都在使用 Nextra 作为它们的文档解决方案。
          <ul>
            <li>使用 TypeScript 重构了项目，完善项目的 Monorepo 基础设施。</li>
            <li>编写了 Nextra 的 Webpack 缓存插件，提升了构建速度。</li>
            <li>帮助回答和修复社区的多个 issue 和 bug，累计贡献 30+ PR。</li>
          </ul>
        </div>
      </div>
      <div className='my-4 md:my-6'>
        <div className='flex justify-between items-center md:text-xl'>
          <a className='font-medium md:text-xl' href='https://turbocache.vercel.app' target="_blank">Turbocache</a>
          <a className='flex gap-2 items-center text-gray-700 text-sm md:text-lg' href='https://github.com/promer94/turbocache' target="_blank">
            <Suspense fallback={<Loading />}>
              <TurbocacheStars />
            </Suspense>
          </a>
        </div>
        <div className='my-2 prose prose-sm prose-neutral max-w-none md:prose-base'>
          <a href="https://github.com/promer94/turbocache">Turbocache</a> 是一个 monorepo 远端缓存的服务端实现，可用于加速 Turborepo，Rush 和 Nx 等 monorepo 构建工具的构建速度。你可以快速的部署一个 Turbocache 应用，用来加速你的 Monorepo。
        </div>
      </div>
    </div>
  )
}