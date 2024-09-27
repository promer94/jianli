import { Mail, Phone, Github, Linkedin } from 'lucide-react'

interface EdgeConfigItem {
  name: string;
  mail: {
    href: string;
    data: string;
  }
  phone: {
    href: string;
    data: string;
  }
  linkedin: {
    href: string;
    data: string;
  }
  password: string;

  [x: string]: any
}

const MailSection = ({ data = '', href = '' }: { data?: string, href?: string }) => {
  return (
    <a className='flex gap-2 items-center' href={href} >
      <Mail size={20} className='hidden md:block'></Mail>
      <Mail size={14} className='md:hidden'></Mail>
      <span className='print:hidden'>邮箱</span>
      <span className='hidden print:inline'>{data}</span>
    </a>
  )
}

const PhoneSection = ({ data = '', href = '' }: { data?: string, href?: string }) => {
  return (
    <a className='flex gap-2 items-center' href={href}>
      <Phone size={20} className='hidden md:block'></Phone>
      <Phone size={14} className='md:hidden'></Phone>
      <span className='print:hidden'>电话</span>
      <span className='hidden print:inline'>{data}</span>
    </a>
  )
}

const LinkedinSection = ({ data = '领英', href = '' }: { data?: string, href?: string }) => {
  return (
    <a className='flex gap-2 items-center' href={href} target='_blank'>
      <Linkedin size={20} className='hidden md:block'></Linkedin>
      <Linkedin size={14} className='md:hidden'></Linkedin>
      <span>{data}</span>
    </a>
  )
}

export const Loading = () => {
  return (
    <section className='flex flex-col animate-pulse bg-slate-200'>
      <h1 className='text-3xl md:text-4xl font-bold md:my-2'></h1>
      <div className='md:text-lg text-gray-600 font-simibold md:my-2'></div>
      <div className='text-sm md:text-base my-4 gap:2 md:my-4 grid grid-cols-2 md:grid-cols-4 text-gray-700'>
        <a className='flex gap-2 items-center h-[20px]' href="about:blank" target='_blank'>
        </a>
        <a className='flex gap-2 items-center h-[20px]' href="about:blank" target='_blank'>
        </a>
        <a className='flex gap-2 items-center h-[20px]' href="about:blank" target='_blank'>
        </a>
        <a className='flex gap-2 items-center h-[20px]' href="about:blank" target='_blank'>
        </a>
      </div>
    </section>
  )
}

export const PersonalInformation = () => {
  const { name, mail, phone, linkedin } = {
    name: '许一旋',
    mail: {
      href: 'mailto:yixuanxu94@outlook.com',
      data: 'yixuanxu94@outlook.com'
    },
    phone: {
      href: 'tel:+8617386135610',
      data: '17386135610'
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/promer94',
      data: '领英'
    }
  }
  return (
    <section className='flex flex-col'>
      <h1 className='text-3xl md:text-4xl font-bold md:my-2'>{name}</h1>
      <div className='md:text-lg text-gray-600 font-simibold md:my-2'>软件工程师</div>
      <div className='text-sm md:text-base my-4 gap:2 md:my-4 grid grid-cols-2 md:grid-cols-4 text-gray-700'>
        <MailSection {...mail}></MailSection>
        <PhoneSection {...phone}></PhoneSection>
        <a className='flex gap-2 items-center' href="https://github.com/promer94" target='_blank'>
          <Github size={20} className='hidden md:block'></Github>
          <Github size={14} className='md:hidden'></Github>
          <span>GitHub</span>
        </a>
        <LinkedinSection {...linkedin}></LinkedinSection>
      </div>
    </section>
  )
}