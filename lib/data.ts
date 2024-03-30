import BookU from "@/public/images/BookU.png";

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