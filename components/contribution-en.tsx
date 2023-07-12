import { ChefHat } from 'lucide-react'

export const Contribution = () => {
  return (
    <div className='my-4 md:my-6'>
      <div className='flex gap-4 items-center'>
        <div className='text-xl md:text-2xl font-semibold'>Contributions</div>
        <ChefHat size={20}></ChefHat>
        <div className='flex-1 h-[1px] bg-black'></div>
      </div>
      <div className='my-4 md:my-6'>
        <div className='flex justify-between items-center md:text-xl'>
          <div className='font-medium md:text-xl'>Tencent</div>
        </div>
        <div className='my-2 prose prose-sm prose-neutral max-w-none md:prose-base'>
          <ul>
            <li>Developed and maintained core modules for the game growth platform, supporting automated advertisement campaigns for major titles like League of Legends: Wild Rift, Golden Shovel, etc.</li>
            <li>Researched and optimized build speeds, doubling build performance. Generalized upgrade strategies and promoted them for use in other department projects.
            </li>
            <li>Led monorepo refactoring, rapidly consolidating component libraries and main repositories to streamline cross-repo collaboration, reduce versioning overhead, and largely simplify workflows.</li>
            <li>Overhauled CI/CD pipelines, developing remote caching and branch previewing to cut build/release times by 30% and boost testing efficiency. Significantly increased delivery speed and quality.</li>
          </ul>
        </div>
      </div>
      <div className='my-4 md:my-6'>
        <div className='flex justify-between items-center md:text-xl'>
          <div className='font-medium md:text-xl'>CMGFintech</div>
        </div>
        <div className='my-2 prose prose-sm prose-neutral max-w-none md:prose-base'>
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