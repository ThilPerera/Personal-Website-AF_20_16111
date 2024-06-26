'use client'
import React from 'react'
import SectionHeading from './Section-heading'
import { skillsData } from '@/lib/data'
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

export const Skill = () => {
  return (
    <section 
    id='skills'
    className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
        <SectionHeading>My Skills</SectionHeading>
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
            {
                skillsData.map((skill,index)=>
                <motion.li 
                variants={fadeInAnimationVariants}   
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
        
                key={index} className='bg-white border border-black/[0.1] rounded-full px-4 py-2 shadow '>
                    {skill}
                </motion.li>
                )
            }
        </ul>
    </section>
  )
}
