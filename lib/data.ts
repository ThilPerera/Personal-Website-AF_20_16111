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
      description:
        "This project is brought out as a personal project in which I took the responsibility of both the dreamer and the architect as the sole UX/UI designer.",
      tags: ["UX", "UI", "Figma", "Research",],
      imageUrl: BookU,
    },
    {
      title: "rmtDev",
      description:
        "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
      tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
      imageUrl: BookU,
    },
  
  ] as const;