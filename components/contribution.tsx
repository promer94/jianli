import { ChefHat } from 'lucide-react'

export const Contribution = () => {
  return (
    <div className='my-4 md:my-6'>
      <div className='flex gap-4 items-center'>
        <div className='text-xl md:text-2xl font-semibold'>工作内容</div>
        <ChefHat size={20}></ChefHat>
        <div className='flex-1 h-[1px] bg-black'></div>
      </div>
       <div className='my-4 md:my-6'>
        <div className='flex justify-between items-center md:text-xl'>
          <div className='font-medium md:text-xl'>Workstream</div>
        </div>
        <div className='my-2 prose prose-sm prose-neutral max-w-none md:prose-base'>
          <ul>
            <li>使用 Flutter 开发和维护 Workstream US App，保障跨平台应用在 Android 和 iOS 上的平滑交付与原生级性能体验。</li>
            <li>主导 Time Shift 模块的开发，涵盖员工排班、上下班打卡、请假申请等核心功能。</li>
            <li>优化 GitHub Action workflow，通过解耦 iOS、Android 和 Web 的构建流程，使构建速度提升 20%，构建费用降低 50%。</li>
            <li>为移动端应用接入 Datadog 监控，支持生产环境实时错误追踪，显著提升用户登录成功率并减少崩溃率。</li>
          </ul>
        </div>
      </div>
      <div className='my-4 md:my-6'>
        <div className='flex justify-between items-center md:text-xl'>
          <div className='font-medium md:text-xl'>DeID PTE. LTD</div>
        </div>
        <div className='my-2 prose prose-sm prose-neutral max-w-none md:prose-base'>
          <ul>
            <li>建设了公司前端业务的 monorepo 方案，帮助完成了业务框架从 Vue 到 React 的重构。</li>
            <li>基于 Github Action, Cloudflare 和 Vercel 从 0 到 1 搭建了公司前端 CI/CD 的标准流程。</li>
            <li>优化公司公共 SDK 的构建和分发方案，减少了 SDK 50% 的构建体积。完善提升了 SDK 的 SSR 适配，解决了 SDK 在 Next.js 等服务端渲染框架中的使用痛点。</li>
            <li>负责 .bit 生态项目 Voty 和 Padge 的前后端以及移动端 React Native App 的开发。</li>
          </ul>
        </div>
      </div>
      <div className='my-4 md:my-6'>
        <div className='flex justify-between items-center md:text-xl'>
          <div className='font-medium md:text-xl'>腾讯</div>
        </div>
        <div className='my-2 prose prose-sm prose-neutral max-w-none md:prose-base'>
          <ul>
            <li>负责增长平台中核心投放模块的开发和维护工作。成功支撑了英雄联盟手游，金铲铲手游和光与夜之恋等多个重点项目的程序化广告投放。</li>
            <li>在开发过程中，针对构建缓慢的问题进行了调研和优化，最终将构建速度提升一倍。整理总结了通用的升级方案，推广到部门多个项目使用。</li>
            <li>主导设计了项目的 monorepo 改造方案，配合团队迅速整合了组件库和业务仓库，解决了频繁跨仓库协作的问题，减小了版本管理的成本，简化和加速了开发流程。</li>
            <li>配合团队对原有的 CI/CD 流程做了全面的梳理和优化，同时开发了 monorepo 的云端缓存服务和分支预览服务。最终将项目构建发布时间减少了 30%，测试效率也明显提高，整体的交付速度和质量大幅提升。</li>
          </ul>
        </div>
      </div>
      <div className='my-4 md:my-6'>
        <div className='flex justify-between items-center md:text-xl'>
          <div className='font-medium md:text-xl'>招商金科</div>
        </div>
        <div className='my-2 prose prose-sm prose-neutral max-w-none md:prose-base'>
          <ul>
            <li>使用 React Native 开发了招商头条的 iOS 和 Android 应用，开发了用于 React Native 的热更新服务。</li>
            <li>编写了项目 CLI 用于快速修改版本号，启动屏和应用图标。</li>
            <li>使用 React 开发了财务管理平台的网页端和移动端。建立了基于 React 和 TypeScript 的管理端脚手架。</li>
          </ul>
        </div>
      </div>
    </div>
  )
}