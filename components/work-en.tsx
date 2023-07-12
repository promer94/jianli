import { Briefcase } from 'lucide-react'
export const Work = () => {
  return (
    <div className='my-4 md:my-6'>
      <div className='flex gap-4 items-center'>
        <div className='text-xl md:text-2xl font-semibold'>EXPERIENCE</div>
        <Briefcase size={20}></Briefcase>
        <div className='flex-1 h-[1px] bg-black'></div>
      </div>
      <div className='my-4 md:my-6'>
        <div className='flex justify-between items-center md:text-xl'>
          <div className='font-medium md:text-xl'>Tencent</div>
          <div className='text-gray-700 text-sm md:text-lg'>2021.06 ~ 2023.06</div>
        </div>
        <div className='text-gray-700 text-sm md:text-lg'>Senior Frontend Engineer - IEG</div>
        <div className='my-4 prose prose-sm prose-neutral max-w-none md:prose-base'>
          <p>Responsible for the development of game growth platform, mainly participating in the infrastructure construction, performance optimization and feature development.</p>
          <ul>
            <li>Developed and maintained core modules for the game growth platform, supporting automated advertisement campaigns for major titles like League of Legends: Wild Rift, Golden Shovel, etc.</li>
            <li>Researched and optimized build speeds, doubling build performance. Generalized upgrade strategies and promoted them for use in other department projects.
            </li>
            <li>Led monorepo refactoring, rapidly consolidating component libraries and main repositories to streamline cross-repo collaboration, reduce versioning overhead, and largely simplify workflows.</li>
            <li>Overhauled CI/CD pipelines, developing remote caching and branch previewing service to cut build/release times by 30% and boost testing efficiency. Significantly increased delivery speed and quality.</li>
          </ul>
        </div>
      </div>
      <div className='my-4 md:my-6'>
        <div className='flex justify-between items-center md:text-xl'>
          <div className='font-medium md:text-xl'>CMGFintech</div>
          <div className='text-gray-700 text-sm md:text-lg'>2018.12 ~ 2021.05</div>
        </div>
        <div className='text-gray-700 text-sm md:text-lg'>Software Engnieer - Innovation Centre</div>
        <div className='my-4 prose prose-sm prose-neutral max-w-none md:prose-base'>
          <ul>
            <li>Developed CMB Headlines IOS and Android App using React Native and TypeScript.</li>
            <li>Developed Financial Intelligence Platform, contributing to frontend and backend.</li>
            <li>Build a React scaffhold for the department.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}