import { GraduationCap } from 'lucide-react'
export const Education = () => {
  return (
    <section className={`
      my-6
      md:my-6
    `}>
      <div className='flex items-center gap-4'>
        <div className={`
          text-xl font-semibold
          md:text-2xl
        `}>EDUCATION</div>
        <GraduationCap size={20}></GraduationCap>
        <div className='h-px flex-1 bg-black'></div>
      </div>
      <div className={`
        my-6
        md:my-6
      `}>
        <div className={`
          flex items-center justify-between
          md:text-xl
        `}>
          <div className={`
            font-medium
            md:text-xl
          `}>University of Southampton</div>
          <div className={`
            text-sm text-gray-700
            md:text-lg
          `}>2017.09 ~ 2018.12</div>
        </div>
        <div className={`
          flex items-center justify-between text-sm
          md:text-base
        `}>
          <div className='text-gray-700'>Data Science - MSc</div>
          <div className='text-gray-700'>Southampton - UK</div>
        </div>
      </div>
      <div className={`
        my-6
        md:my-6
      `}>
        <div className={`
          flex items-center justify-between
          md:text-xl
        `}>
          <div className={`
            font-medium
            md:text-xl
          `}>University of Liverpool</div>
          <div className={`
            text-sm text-gray-700
            md:text-lg
          `}>2013.06 ~ 2017.06</div>
        </div>
        <div className={`
          flex items-center justify-between text-sm
          md:text-base
        `}>
          <div className='text-gray-700'>Computer Science and Technology - BEng</div>
          <div className='text-gray-700'>Liverpool - UK</div>
        </div>
      </div>
    </section>
  )
}