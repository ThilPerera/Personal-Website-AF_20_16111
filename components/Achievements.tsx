"use client"

import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionHeading from './Section-heading';
import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="myachievements" className='scroll-mt-28'>
      <SectionHeading>My Achievements</SectionHeading>
      <VerticalTimeline>
        {
          achievements.map((item,index)=>(
            <VerticalTimelineElement className='vertical-timeline-element--work'
            contentStyle={{ background: 'rgb(32,34,54)' , color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date={item.date}
            iconStyle={{ background: 'rgb(32,34,54)', color: '#fff',
            fontSize: "1.5rem" }}
            icon={item.icon}
            visible={true} key={index}>
              <h3 className='font-semibold capitalize'>{item.title}</h3>
              <p className='font-normal !mt-0'>{item.location}</p>
              <p className='!mt-1 !font-normal text-white/75'>{item.description}</p>
            </VerticalTimelineElement>
          ))
        }
      </VerticalTimeline>
    </section>
  )
}


