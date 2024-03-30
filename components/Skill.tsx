import React from 'react'
import SectionHeading from './Section-heading'
import { skillsData } from '@/lib/data'

export const Skill = () => {
  return (
    <section>
        <SectionHeading>My Skills</SectionHeading>
        <ul>
            {
                skillsData.map((skill,index)=>
                <li key={index} className=''>
                    {skill}
                </li>
                )
            }
        </ul>
    </section>
  )
}
