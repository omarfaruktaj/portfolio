import About from "@/components/home/about";
import Blogs from "@/components/home/blogs";
import Hero from "@/components/home/hero";
import Projects from "@/components/home/projects";
import Skills from "@/components/home/skills";

export default async function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blogs />
    </div>
  );
}
