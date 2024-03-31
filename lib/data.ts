import BookU from "@/public/images/BookU.png";
import React from "react";
import school from "@/public/images/school.png";
import degree from "@/public/images/degree.png";
import design from "@/public/images/design.png";
import pchead from "@/public/images/pchead.png";
import award from "@/public/images/award.png";
import vp from "@/public/images/vp.png";




export const links = [
    {
      name: "Home",
      hash: "#home",
    },
    {
      name: "About",
      hash: "#about",
    },
    {
      name: "Projects",
      hash: "#projects",
    },
    {
      name: "Skills",
      hash: "#skills",
    },
    {
      name: "Roles",
      hash: "#roles",
    },
    {
      name: "Contact",
      hash: "#contact",
    },
  ] as const;

  export const projectsData = [
    {
      title: "BookU",
      link: "https://thilhara.notion.site/BookU-d5d6e7f5b52c4c739ba85278a0708cd1?pvs=74",
      description:
        "This project is brought out as a personal project in which I took the responsibility of both the dreamer and the architect as the sole UX/UI designer.",
      tags: ["UX", "UI", "Figma", "Research",],
      imageUrl: BookU,
    },
    {
      title: "CINEapp",
      link: "https://thilhara.notion.site/BookU-d5d6e7f5b52c4c739ba85278a0708cd1?pvs=74",
      description:
        "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
      tags: ["React", "TypeScript", "Firebase", "Firestore"],
      imageUrl: BookU,
    },
  
  ] as const;

  export const skillsData = [
    "Figma",
    "UX Research",
    "Wireframing",
    "Prototyping",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Framer Motion",
  ] as const;

  export const achivements = [
    {
      title: "GCE Advanced Level Examination",
      location: "R/Rahula National School",
      description:
        "I passed GCE A/L exam in Arts stream with 2 A passes for ICT and Economics, and a C pass for English literature.",
      icon: school,
      date: "2020",
    },
    {
      title: "BSc (Hons) in Information and Communication Technology",
      location: "University of Sri Jayewardenepura",
      description:
        "I started studying as an undergraduate in University of Sri Jayewardenepura",
      icon: degree,
      date: "2021 - present",
    },
    {
      title: "Digital Marketing Incharge",
      location: "J'pura Adventure Club",
      description:
        "I contributed as a the digital marketing incharge for the project Robarosiya'23 organized by J'pura Adventure Club of University of Sri Jayewardenepura",
      icon: design,
      date: "2023",
    },
    {
      title: "Project Committee Head",
      location: "Dubbing Division of J'pura Voice",
      description:
        "My position as the Project Committee Head of the project Rawa'23: All Island Dubbing Compettion organized by the dubbing division of J'pura Voice: The official Media and Broadcasting unit of University of Sri Jayewardenepura, was one of the major turning points of my life",
      icon: pchead,
      date: "2023",
    },
    {
      title: "The Best Project Committee Head Award",
      location: "J'pura Voice",
      description:
        "I was awarded as The Best Project Committee Head for the project Rawa'23 at the Golden Voice Awards Ceremony'23 organized by J'pura Voice.",
      icon: award,
      date: "2023",
    },
    {
      title: "Vice President- Media and IT",
      location: "J'pura Adventure Club",
      description:
        "I started my journey as the Media and IT Vice Predident at J'pura Adventure Club.",
      icon: vp,
      date: "2023-present",
    },
  ] as const;