import { ChefHat } from 'lucide-react'

export const Contribution = () => {
  return (
    <div className={`
      my-4
      md:my-6
    `}>
      <div className='flex items-center gap-4'>
        <div className={`
          text-xl font-semibold
          md:text-2xl
        `}>Contributions</div>
        <ChefHat size={20}></ChefHat>
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
          <div className={`
            font-medium
            md:text-xl
          `}>DeID PTE. LTD</div>
        </div>
        <div className={`
          my-2 prose prose-sm max-w-none prose-neutral
          md:prose-base
        `}>
          <ul>
            <li>Developed the company’s front-end monorepo solution and helped with the migration of the business framework from Vue to React.</li>
            <li>Built the company’s front-end CI/CD standard process from scratch using GitHub Action, Cloudflare, and Vercel.</li>
            <li>Optimized the build and distribution strategy of the company’s public SDK, reducing the SDK size by 50%. Enhanced the SDK’s SSR (Server-Side Rendering) compatibility, addressing issues related to its usage in server-side rendering frameworks like Next.js.
            </li>
            <li>Responsible for the development of both front-end and back-end, as well as the React Native mobile app, for the .bit ecosystem projects Voty and Padge.</li>
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
          <div className={`
            font-medium
            md:text-xl
          `}>Tencent</div>
        </div>
        <div className={`
          my-2 prose prose-sm max-w-none prose-neutral
          md:prose-base
        `}>
          <ul>
            <li>Developed and maintained core modules for the game growth platform, supporting automated advertisement campaigns for major titles like League of Legends: Wild Rift, Golden Shovel, etc.</li>
            <li>Researched and optimized build speeds, doubling build performance. Generalized upgrade strategies and promoted them for use in other department projects.
            </li>
            <li>Led monorepo refactoring, rapidly consolidating component libraries and main repositories to streamline cross-repo collaboration, reduce versioning overhead, and largely simplify workflows.</li>
            <li>Overhauled CI/CD pipelines, developing remote caching and branch previewing to cut build/release times by 30% and boost testing efficiency. Significantly increased delivery speed and quality.</li>
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
          <div className={`
            font-medium
            md:text-xl
          `}>CMGFintech</div>
        </div>
        <div className={`
          my-2 prose prose-sm max-w-none prose-neutral
          md:prose-base
        `}>
          <ul>
            <li>Developed CMB Headlines using React Native and TypeScript</li>
            <li>Developed Financial Intelligence Platform, contributing to frontend and backend.</li>
            <li>Build a React scaffhold for the department</li>
          </ul>
        </div>
      </div>
    </div>
  )
}