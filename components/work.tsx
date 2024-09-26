import { Briefcase } from 'lucide-react'

export const Work = () => {
  return (
    <div className='my-4 md:my-6'>
      <div className='flex gap-4 items-center'>
        <div className='text-xl md:text-2xl font-semibold'>工作经历</div>
        <Briefcase size={20}></Briefcase>
        <div className='flex-1 h-[1px] bg-black'></div>
      </div>
      <div className='my-4 md:my-6'>
        <div className='flex justify-between items-center md:text-xl'>
          <div className='font-medium md:text-xl'>DeID PTE. LTD.</div>
          <div className='text-gray-700 text-sm md:text-lg'>2023.06 ~ 2024.10</div>
        </div>
        <div className='text-gray-700 text-sm md:text-lg'>全栈工程师</div>
        <div className='my-2 prose prose-sm prose-neutral max-w-none md:prose-base'>
          <p>负责公司去中心身份平台和成就网络的业务开发，维护建设公司开源 SDK 和基础设施。</p>
        </div>
      </div>
      <div className='my-4 md:my-6'>
        <div className='flex justify-between items-center md:text-xl'>
          <div className='font-medium md:text-xl'>腾讯</div>
          <div className='text-gray-700 text-sm md:text-lg'>2021.06 ~ 2023.05</div>
        </div>
        <div className='text-gray-700 text-sm md:text-lg'>高级前端工程师 - IEG</div>
        <div className='my-2 prose prose-sm prose-neutral max-w-none md:prose-base'>
          <p>负责腾讯游戏增长中台广告系统的开发工作，主要参与了投放平台与供应方平台的基础设施建设、性能优化和业务开发等工作。</p>
        </div>
      </div>
      <div className='my-4 md:my-6'>
        <div className='flex justify-between items-center md:text-xl'>
          <div className='font-medium md:text-xl'>招商金科</div>
          <div className='text-gray-700 text-sm md:text-lg'>2018.12 ~ 2021.05</div>
        </div>
        <div className='text-gray-700 text-sm md:text-lg'>软件工程师 - 创新中心</div>
        <div className='my-2 prose prose-sm prose-neutral max-w-none md:prose-base'>
          <p>负责部门内 AI（人工智能）、BI（商业智能）项目的开发工作。主要参与了招商头条，财务智能平台等项目的前后端开发工作，同时负责组内基础设施的搭建和维护。</p>
        </div>
      </div>
    </div>
  )
}