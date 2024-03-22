'use client'
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

const Intro = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div
          
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start px-4"
        >
          <motion.h1 className=" dark:text-white mb-4 text-4xl text-black sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
            <span className="text-transparent bg-clip-text bg-purple-400">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Thilhara",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.h1>
          <motion.p className="dark:text-gray-300 text-base text-neutral-800 sm:text-lg mb-6 lg:text-xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          ICT Undergraduate with a Passion for UX/UI Design | Creating Intuitive Digital Experiences
          </motion.p>
          <motion.div className="inline-block"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}>
            <a
              className="px-4 inline-block py-2 w-full sm:w-fit rounded-full dark:bg-white dark:hover:bg-slate-200 dark:text-purple-600 mt-3 dark:border-purple-600 border-2 bg-[#121212] hover:bg-slate-800 mr-4 my-2"
            >
              Download CV
            </a>
        
            <Link
              href="/#contact"
              className="dark:bg-[#121212] dark:hover:bg-slate-800 px-4 inline-block py-2 w-full sm:w-fit rounded-full border-purple-600 border-2 bg-white dark:text-white text-black hover:bg-slate-200"
            >

               Contact Me 
             
            </Link>
            <div className="inline-block justify-center">
            <a
              className="px-2 flex items-center justify-center py-2 w-full sm:w-fit rounded-full bg-gray-400 dark:text-purple-600 mt-3 border-gray-400 border-2  hover:border-purple-600 m-4 my-2"
            >
              <BsLinkedin/>
            </a>
            </div>
            

        
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-white bg-opacity-30 dark:bg-black dark:bg-opacity-30 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Intro