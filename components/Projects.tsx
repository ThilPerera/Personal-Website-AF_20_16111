import React from 'react';
import SectionHeading from './Section-heading';
import SectionDivider from './Section-divider';
import { projectsData } from '../lib/data';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section className='justify-item-center scroll-mt-28'
    id='projects' >
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

type ProjectProps = typeof projectsData[number];

function Project({ title, link, description, tags, imageUrl }: ProjectProps ) {
  return (
    <section className='bg-purple-400 bg-opacity-10 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last-mb-0 group' 
    id='projects' >
      <div className='py-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full'>
        <a className='text-2xl font-semibold ' href={link}>{title}</a>
        <p className='mt-2 leading-relaxed text-gray-400'>{description}</p>
        <ul className='flex flex-wrap mt-4 ga-2 sm:m-auto'>
          {tags.map((tag, index) => (
            <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full m-1' key={index}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
        <Image src={imageUrl} alt={title} quality={95} className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
      transition 
      group-hover:scale-[1.04]
      group-hover:-translate-x-3
      group-hover:translate-y-3
      group-hover:-rotate-2

     ' />
    </section>
  );
}

export default Projects;
