import About from "@/components/About";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/Section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Header></Header>
      <Intro></Intro>
      <SectionDivider></SectionDivider>
      <About></About>
      <SectionDivider></SectionDivider>
      <Projects></Projects>
    </main>
  );
}
