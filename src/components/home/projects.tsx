import { Project } from "@/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProjectCard from "../project-card";
import { Button } from "../ui/button";

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
    <section id="projects" className="bg-background px-4 py-16 text-foreground">
      <div className="mx-auto ">
        <div className="text-center">
          <h2 className="mb-8 text-3xl font-bold text-primary md:text-4xl">
            Check out my latest work
          </h2>
          <p className="mb-12 text-lg font-medium text-muted-foreground">
            Here are some of my most recent projects, showcasing my ability to
            build modern and impactful web applications. Each project highlights
            my skills in various technologies and my commitment to delivering
            high-quality work.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8  sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project: Project, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <div className="mt-4 flex items-center justify-end">
          <Button variant={"outline"} className="rounded-full" asChild>
            <Link href={"/projects"}>
              See more{" "}
              <span>
                <ArrowRight />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
