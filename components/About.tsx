"use client";

import React from "react";
import SectionHeading from "./Section-heading";
import { motion } from "framer-motion";
import SectionDivider from "./Section-divider";


export default function About() {

  return (
    <motion.section
      
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 justify-items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    > 
        
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I'm a third-year undergraduate at University of Sri Jayawardenapura, pursuing a{" "}
        <span className="font-medium">BSc(Hons) degree in Information and Communication Technology</span>, while developing my soft skills, employability skills, and staying up-to-date with current trends in the business world.As a passionate learner, I'm particularly interested in{" "}
        <span className="font-medium">UX/UI design and behavioral psychology</span>.I have a strong work ethic and dedication to improving myself, which is why I decided to take the plunge and self-learn UX/UI design.
      </p>

      <p>
        <span className="italic">When I'm not solving design problems</span>, I enjoy reading, going for hikes, doing Origami,Paper Quillig and making clay crafts. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Human Personalities and Buddhist Philosophy</span>. I'm also
        learning video editing and graphic designing.
      </p>
    </motion.section>
  );
}