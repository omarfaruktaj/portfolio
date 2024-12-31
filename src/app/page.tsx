import About from "@/components/home/about";
import Hero from "@/components/home/hero";
import Skills from "@/components/home/skills";

export default async function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
    </div>
  );
}
