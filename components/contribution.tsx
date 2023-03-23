import { Construction } from 'lucide-react'
export const Contribution = () => {
  return (
    <div className='my-4 md:my-6'>
      <div className='flex gap-4 items-center'>
        <div className='text-xl md:text-2xl font-semibold'>工作内容</div>
        <Construction size={20}></Construction>
        <div className='flex-1 h-[1px] bg-black'></div>
      </div>
      <div className='my-4 md:my-6'>
        <div className='flex justify-between items-center md:text-xl'>
          <div className='font-medium md:text-xl'>腾讯</div>
        </div>
        <div className='my-2 prose prose-sm prose-neutral max-w-none md:prose-base'>
          <ul>
            <li>负责增长平台中核心投放模块的开发和维护工作。成功支撑了英雄联盟手游，金铲铲手游和光与夜之恋等多个重点项目的程序化广告投放。</li>
            <li>在开发过程中，针对项目构建缓慢的问题进行了调研和优化，最终将构建速度提升一倍。整理总结了通用的升级方案，推广到部门多个项目使用。</li>
            <li>主导设计了项目的 monorepo 改造方案，配合业务同学迅速整合了组件库和业务仓库，减小了版本管理的成本，简化了开发流程。</li>
          </ul>
        </div>
      </div>
      <div className='my-4 md:my-6'>
        <div className='flex justify-between items-center md:text-xl'>
          <div className='font-medium md:text-xl'>招商金科</div>
        </div>
        <div className='my-2 prose prose-sm prose-neutral max-w-none md:prose-base'>
          <ul>
            <li>使用 React Native 开发了招商头条的 iOS 和 Android 应用。编写了项目 CLI 用于快速修改版本号，启动屏和应用图标。开发了用于 React Native 的热更新服务。</li>
            <li>使用 React 开发了财务管理平台的网页端和移动端。建立了基于 React 和 TypeScript 的管理端脚手架。</li>
          </ul>
        </div>
      </div>
    </div>
  )
}