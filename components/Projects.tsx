import React from 'react'
import SectionHeading from './Section-heading'
import SectionDivider from './Section-divider'
import {projectsData} from '../lib/data'
import Image from 'next/image'

const Projects = () => {
  return (
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
  )
}

type Projectprops=(typeof projectsData)[0];

function Project({title,description,tags,imageUrl}:
    Projectprops){
        return(
            <section>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul>
                    {
                        tags.map((tag,index)=>(
                            <li key={index}>{tag}</li>
                        ))
                    }
                </ul>
               <Image src={imageUrl} alt={title}></Image>
            </section>
            );
        
    }

export default Projects