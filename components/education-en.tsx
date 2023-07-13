import { GraduationCap } from 'lucide-react'
export const Education = () => {
  return (
    <section className='my-6 md:my-6'>
      <div className='flex gap-4 items-center'>
        <div className='text-xl md:text-2xl font-semibold'>EDUCATION</div>
        <GraduationCap size={20}></GraduationCap>
        <div className='flex-1 h-[1px] bg-black'></div>
      </div>
      <div className='my-6 md:my-6'>
        <div className='flex justify-between items-center md:text-xl'>
          <div className='font-medium md:text-xl'>University of Southampton</div>
          <div className='text-gray-700 text-sm md:text-lg'>2017.09 ~ 2018.12</div>
        </div>
        <div className='flex justify-between items-center text-sm md:text-md'>
          <div className='text-gray-700'>Data Science - MSc</div>
          <div className='text-gray-700'>Southampton - UK</div>
        </div>
      </div>
      <div className='my-6 md:my-6'>
        <div className='flex justify-between items-center md:text-xl'>
          <div className='font-medium md:text-xl'>University of Liverpool</div>
          <div className='text-gray-700 text-sm md:text-lg'>2013.06 ~ 2017.06</div>
        </div>
        <div className='flex justify-between items-center text-sm md:text-md'>
          <div className='text-gray-700'>Computer Science and Technology - BEng</div>
          <div className='text-gray-700'>Liverpool - UK</div>
        </div>
      </div>
    </section>
  )
}