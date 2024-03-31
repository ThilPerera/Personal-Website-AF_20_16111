import React from 'react'
import SectionHeading from './Section-heading'
import { socialmedia } from '@/lib/data'

export default function Contact() {
  return (
    <section id="conatct" className='scroll-mt-28 pb-28'>
        <SectionHeading>Contact Me</SectionHeading>
        <p>Contact me directly at <a className='underline'href='mailto:thilharasenadi@gmail.com'>thilharasenadi@gmail.com</a></p>

        <div className="flex justify-center space-x-4 py-8">
        {socialmedia.map(({ name, icon, link }) => (
        <a
          key={name}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full  border-purple-600 border-2 bg-[#121212] dark:hover:bg-slate-800 transition duration-300"
        >
          <div className=''>{icon}</div>
        </a>
      ))}
        </div>
        
    </section>
  )
}
