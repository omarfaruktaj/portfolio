import ProjectCard from "@/components/project-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Project } from "@/types";
import { Modal } from "./modal";

export default async function ProjectsModal() {
  const res = await fetch(`${process.env.API_URL}/projects`, {
    cache: "no-store",
  });

  console.log(`${process.env.API_URL}/projects`);

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  const projects: Project[] = await res.json();

  return (
    <div>
      <Modal>
        <ScrollArea className="h-full ">
          <div>
            <h1 className="mb-12 text-center text-4xl font-bold text-primary md:text-5xl">
              My Projects
            </h1>
            <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-muted-foreground">
              Explore some of my favorite projects, showcasing my skills in
              developing intuitive user interfaces, efficient backends, and
              scalable web applications. Each project represents a milestone in
              my learning and career journey.
            </p>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
          </div>
        </ScrollArea>
      </Modal>
    </div>
  );
}
