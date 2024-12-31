import ProjectCard from "@/components/project-card";
import { Project } from "@/types";

export default async function Projects() {
  const res = await fetch(`${process.env.API_URL}/projects`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  const projects: Project[] = await res.json();

  return (
    <section
      id="projects"
      className="py-16 px-4 bg-background text-foreground min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">
          My Projects
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          Explore some of my favorite projects, showcasing my skills in
          developing intuitive user interfaces, efficient backends, and scalable
          web applications. Each project represents a milestone in my learning
          and career journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
