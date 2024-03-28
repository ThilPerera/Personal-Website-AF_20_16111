import React from 'react'
import SectionHeading from './Section-heading'
import SectionDivider from './Section-divider'
import {projectsData} from '../lib/data'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <motion.div
    className="group mb-3 sm:mb-8 last:mb-0"
  >
    <section className='justify-item-center'>
          <SectionHeading>My Projects</SectionHeading>
          <div>
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}

          </div>
      </section>
  </motion.div>
      
    )
  }

  type Projectprops=(typeof projectsData)[0];

  function Project({title,description,tags,imageUrl}:
      Projectprops){
          return(
              <section className='bg-purple-400 bg-opacity-10 max-w-[42rem]border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem]mb-3 sm:mb-8 last-mb-0'>
                <div className='py-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full'>
                <h3 className='text-2xl font-semibold'>{title}</h3>
                  <p className='mt-2 leading-relaxed text-gray-400'>{description}</p>
                  <ul className='flex flex-wrap mt-4 ga-2 sm:m-auto'>
                      {
                          tags.map((tag,index)=>(
                              <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full m-1' key={index}>{tag}</li>
                          ))
                      }
                  </ul>
                  
                </div>
                  <Image className='absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl' src={imageUrl} alt={title} quality={95}></Image>
             
               
            </section>
            );
        
    }

export default Projects