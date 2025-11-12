import { ChefHat } from 'lucide-react'
export const Profile = () => {
  return (
    <div className={`
      my-4
      md:my-6
    `}>
      <div className='flex items-center gap-4'>
        <div className={`
          text-xl font-semibold
          md:text-2xl
        `}>PROFILE</div>
        <ChefHat size={20}></ChefHat>
        <div className='h-px flex-1 bg-black decoration-dashed'></div>
      </div>
      <div className={`
        my-4 prose prose-sm max-w-none prose-neutral
        md:prose-base
      `}>
        Software engineer with 7 years of experience building complex web and mobile applications using TypeScript, React, React Native, Flutter, and Next.js. Core developer for popular open source libraries SWR and Nextra. Known for rapidly delivering robust code, collaborating cross-functionally, and consistently meeting tight deadlines. Passionate about shipping quality code and solving problems creatively.
      </div>
    </div>
  )
}