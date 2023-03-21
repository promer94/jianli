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
          <div className='font-medium md:text-xl'>腾讯</div>
          <div className='text-gray-700 text-sm md:text-lg'>2021.06 ~ 2023.03</div>
        </div>
        <div className='text-gray-700 text-sm md:text-lg'>高级前端工程师 - IEG</div>
        <div className='my-2 prose prose-sm prose-neutral max-w-none md:prose-base'>
          <p>负责腾讯游戏增长中台广告系统的开发工作，主要参与了投放平台与供应方平台的基础设施建设、性能优化和业务开发等工作。</p>
          <ul>
            <li>负责增长平台中核心投放模块的开发和维护工作。成功支撑了英雄联盟手游，金铲铲手游和光与夜之恋等多个重点项目的程序化广告投放。</li>
            <li>优化组内的基础构建设施，将整体的构建速度提升了一倍。整理总结了通用的升级方案，推广到部门使用。</li>
            <li>升级完善了组内的 CI / CD 流程，将原有分散的流水线配置通过 Pipeline as Code 的方式做了整理和聚合，同时引入了性能检测工具。通过对构建产物的持续监测和调优，核心平台的代码体积减少了 20%，页面加载速度提升了 10% 。</li>
            <li>设计并完成了项目的 Monorepo 改造，将原有分散的组件库仓库和多个业务仓库合并，减小开发成本，提升代码复用率。独立开发了 Monorepo 云端缓存服务和 CI 插件，提升了 30% 的构建速度。</li>
            <li>积极参与公司的开源共建，帮助优化内部 COS 插件，Tdesign React 组件库和 i18n 方案等多个项目。开源云端缓存服务，加入对 Nx 和 Rush 的支持，提升公司 Monorepo 的构建效率。</li>
          </ul>
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
          <ul>
            <li>使用 React Native 开发了招商头条的 iOS 和 Android 应用。编写了项目 CLI 用于快速修改版本号，启动屏和应用图标。开发了用于 React Native 的热更新服务。</li>
            <li>使用 React 开发了财务管理平台的网页端和移动端。建立了基于 React 和 TypeScript 的管理端脚手架。</li>
          </ul>
        </div>
      </div>
    </div>
  )
}