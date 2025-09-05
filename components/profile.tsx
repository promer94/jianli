import { ChefHat } from 'lucide-react'
export const Profile = () => {
  return (
    <div className='my-4 md:my-6'>
      <div className='flex gap-4 items-center'>
        <div className='text-xl md:text-2xl font-semibold'>PROFILE</div>
        <ChefHat size={20}></ChefHat>
        <div className='flex-1 h-[1px] bg-black dash'></div>
      </div>
      <div className='my-4 prose prose-sm prose-neutral max-w-none md:prose-base'>
        Software engineer with 7 years of experience building complex web and mobile applications using TypeScript, React, React Native, Flutter, and Next.js. Core developer for popular open source libraries SWR and Nextra. Known for rapidly delivering robust code, collaborating cross-functionally, and consistently meeting tight deadlines. Passionate about shipping quality code and solving problems creatively.
      </div>
    </div>
  )
}