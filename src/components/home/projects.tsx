import { Project } from "@/types";
import ProjectCard from "../project-card";

export default async function Projects() {
  const res = await fetch(`${process.env.API_URL}/projects`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  const projectsData: Project[] = await res.json();

  const projects = projectsData.slice(0, 4);

  return (
    <section id="projects" className="py-16 px-4 bg-background text-foreground">
      <div className="max-w-6xl mx-auto ">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
            Check out my latest work
          </h2>
          <p className="text-lg text-muted-foreground font-medium mb-12">
            Here are some of my most recent projects, showcasing my ability to
            build modern and impactful web applications. Each project highlights
            my skills in various technologies and my commitment to delivering
            high-quality work.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-8">
          {projects.map((project: Project, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
