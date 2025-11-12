import { Briefcase } from 'lucide-react'
export const Work = () => {
  return (
    <div className={`
      my-4
      md:my-6
    `}>
      <div className='flex items-center gap-4'>
        <div className={`
          text-xl font-semibold
          md:text-2xl
        `}>EXPERIENCE</div>
        <Briefcase size={20}></Briefcase>
        <div className='h-px flex-1 bg-black'></div>
      </div>
      <div className={`
        my-4
        md:my-6
      `}>
        <div className={`
          flex items-center justify-between
          md:text-xl
        `}>
          <div className={`
            font-medium
            md:text-xl
          `}>Workstream</div>
          <div className={`
            text-sm text-gray-700
            md:text-lg
          `}>2024.11 ~ 2025.10</div>
        </div>
        <div className={`
          text-sm text-gray-700
          md:text-lg
        `}>Senior Software Engineer</div>
        <div className={`
          my-4 prose prose-sm max-w-none prose-neutral
          md:prose-base
        `}>
          <p>Responsible for the development of Workstream’s US App (Android/iOS/Web) using Flutter, as well as the BFF (Backend-for-Frontend) layer. Collaborated closely with product and design teams to deliver user-friendly workflows for workforce management, improving usability and adoption in US-based customers.</p>
          <ul>
            <li>Developed and maintained the Workstream US App with Flutter, ensuring smooth cross-platform delivery and native-like performance across Android and iOS.</li>
            <li>Led the development of the time-shift module, covering key features such as employee scheduling, clock in/out tracking, and time-off request management.
            </li>
            <li>
              Optimized the GitHub Action workflow by decoupling iOS, Android, and Web build pipelines, reducing build speed by 20% and cutting build costs by 50%.
            </li>
            <li>Integrated Datadog monitoring for the mobile app, enabling real-time error tracking in production, which significantly improved user login success rates and reduced crash incidents.</li>
          </ul>
        </div>
      </div>
      <div className={`
        my-4
        md:my-6
      `}>
        <div className={`
          flex items-center justify-between
          md:text-xl
        `}>
          <div className={`
            font-medium
            md:text-xl
          `}>DeID PTE. LTD</div>
          <div className={`
            text-sm text-gray-700
            md:text-lg
          `}>2023.07 ~ 2024.10</div>
        </div>
        <div className={`
          text-sm text-gray-700
          md:text-lg
        `}>Fullstack Engineer</div>
        <div className={`
          my-4 prose prose-sm max-w-none prose-neutral
          md:prose-base
        `}>
          <p>Responsible for the business development of the company’s decentralized identity platform and achievement network, maintaining and building the open-source SDKs and infrastructure.</p>
          <ul>
            <li>Developed the company’s front-end monorepo solution and helped with the migration of the business framework from Vue to React.</li>
            <li>Built the company’s front-end CI/CD standard process from scratch using GitHub Action, Cloudflare, and Vercel.</li>
            <li>Optimized the build and distribution strategy of the company’s public SDK, reducing the SDK size by 50%. Enhanced the SDK’s SSR (Server-Side Rendering) compatibility, addressing issues related to its usage in server-side rendering frameworks like Next.js.
            </li>
            <li>Responsible for the development of both front-end and back-end, as well as the React Native mobile app, for the .bit ecosystem projects Voty and Padge.</li>
          </ul>
        </div>
      </div>
      <div className={`
        my-4
        md:my-6
      `}>
        <div className={`
          flex items-center justify-between
          md:text-xl
        `}>
          <div className={`
            font-medium
            md:text-xl
          `}>Tencent</div>
          <div className={`
            text-sm text-gray-700
            md:text-lg
          `}>2021.06 ~ 2023.06</div>
        </div>
        <div className={`
          text-sm text-gray-700
          md:text-lg
        `}>Senior Frontend Engineer - IEG</div>
        <div className={`
          my-4 prose prose-sm max-w-none prose-neutral
          md:prose-base
        `}>
          <p>Responsible for the development of game growth platform, mainly participating in the infrastructure construction, performance optimization and feature development.</p>
          <ul>
            <li>Developed and maintained core modules for the game growth platform, supporting automated advertisement campaigns for major titles like League of Legends: Wild Rift, Golden Shovel, etc.</li>
            <li>Researched and optimized build speeds, doubling build performance. Generalized upgrade strategies and promoted them for use in other department projects.
            </li>
            <li>Led monorepo refactoring, rapidly consolidating component libraries and main repositories to streamline cross-repo collaboration, reduce versioning overhead, and largely simplify workflows.</li>
            <li>Overhauled CI/CD pipelines, developing remote caching and branch previewing service to cut build/release times by 30% and boost testing efficiency. Significantly increased delivery speed and quality.</li>
          </ul>
        </div>
      </div>
      <div className={`
        my-4
        md:my-6
      `}>
        <div className={`
          flex items-center justify-between
          md:text-xl
        `}>
          <div className={`
            font-medium
            md:text-xl
          `}>CMGFintech</div>
          <div className={`
            text-sm text-gray-700
            md:text-lg
          `}>2018.12 ~ 2021.05</div>
        </div>
        <div className={`
          text-sm text-gray-700
          md:text-lg
        `}>Software Engnieer - Innovation Centre</div>
        <div className={`
          my-4 prose prose-sm max-w-none prose-neutral
          md:prose-base
        `}>
          <ul>
            <li>Developed CMB Headlines IOS and Android App using React Native and TypeScript.</li>
            <li>Developed Financial Intelligence Platform, contributing to frontend and backend.</li>
            <li>Build a React scaffhold for the department.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}