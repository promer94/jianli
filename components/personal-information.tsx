import { Mail, Phone, Github, Linkedin } from 'lucide-react'


export const PersonalInformation = () => {
  return (
    <section className='flex flex-col'>
      <h1 className='text-3xl md:text-4xl font-bold md:my-2'>许一旋</h1>
      <div className='text-sm md:text-base my-4 gap:2 md:my-4 grid grid-cols-2 md:grid-cols-4 text-gray-700'>
        <a className='flex gap-2 items-center' href="mailto:yixuanxu94@outlook.com">
          <Mail size={20} className='hidden md:block'></Mail>
          <Mail size={14} className='md:hidden'></Mail>
          <span>邮箱</span>
        </a>
        <a className='flex gap-2 items-center' href="tel:+86 17386135610">
          <Phone size={20} className='hidden md:block'></Phone>
          <Phone size={14} className='md:hidden'></Phone>
          <span>电话</span>
        </a>
        <a className='flex gap-2 items-center' href="https://github.com/promer94" target='_blank'>
          <Github size={20} className='hidden md:block'></Github>
          <Github size={14} className='md:hidden'></Github>
          <span>GitHub</span>
        </a>
        <a className='flex gap-2 items-center' href="https://www.linkedin.com/in/yixuan-xu-758047155/" target='_blank'>
          <Linkedin size={20} className='hidden md:block'></Linkedin>
          <Linkedin size={14} className='md:hidden'></Linkedin>
          <span>领英</span>
        </a>
      </div>
    </section>
  )
}