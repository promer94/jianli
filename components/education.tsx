import { GraduationCap } from 'lucide-react'
export const Education = () => {
  return (
    <section className='my-6 md:my-6'>
      <div className='flex gap-4 items-center'>
        <div className='text-xl md:text-2xl font-semibold'>教育经历</div>
        <GraduationCap size={20}></GraduationCap>
        <div className='flex-1 h-[1px] bg-black'></div>
      </div>
      <div className='my-6 md:my-6'>
        <div className='flex justify-between items-center md:text-xl'>
          <div className='font-medium md:text-xl'>南安普顿大学</div>
          <div className='text-gray-700 text-sm md:text-lg'>2017.09 ~ 2018.12</div>
        </div>
        <div className='flex justify-between items-center text-sm md:text-lg'>
          <div className='text-gray-700'>数据科学，硕士</div>
          <div className='text-gray-700'>南安普顿，英国</div>
        </div>
      </div>
      <div className='my-6 md:my-6'>
        <div className='flex justify-between items-center md:text-xl'>
          <div className='font-medium md:text-xl'>利物浦大学</div>
          <div className='text-gray-700 text-sm md:text-lg'>2013.06 ~ 2017.06</div>
        </div>
        <div className='flex justify-between items-center text-sm md:text-lg'>
          <div className='text-gray-700'>计算机科学与技术，本科</div>
          <div className='text-gray-700'>利物浦，英国</div>
        </div>
      </div>
    </section>
  )
}