import BackButton from "@/components/ui/back-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/types";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa";

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const paramsValue = await params;
  const response = await fetch(
    `${process.env.API_URL}/projects/${paramsValue.id}`
  );
  console.log(`${process.env.API_URL}/projects/${paramsValue.id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch project");
  }

  const project: Project = await response.json();

  if (!project) {
    notFound();
  }

  return (
    <div className="px-4 py-8">
      <BackButton />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="md:col-span-2">
          <div className="relative w-full mb-6">
            <Image
              src={project.imageUrl}
              alt={project.title}
              height={400}
              width={800}
              className="rounded-lg h-[400px]"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            {project.description}
          </p>
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
              <div className="flex flex-wrap gap-1 items-center justify-between">
                {project?.technologies?.map((tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <Button asChild className="w-full">
                <Link href={project.link} target="_blank" passHref>
                  <span className="flex items-center">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live Project
                  </span>
                </Link>
              </Button>

              {project.githubUrl && (
                <Button asChild variant="outline" className="w-full">
                  <Link href={project.githubUrl} target="_blank" passHref>
                    <div className="flex items-center justify-between">
                      <FaGithub className="mr-2 h-4 w-4 " />
                      <span>View on GitHub</span>
                    </div>
                  </Link>
                </Button>
              )}

              {project.isFullStack && (
                <>
                  {project.frontendGithubUrl && (
                    <Button asChild variant="outline" className="w-full">
                      <Link
                        href={project.frontendGithubUrl}
                        target="_blank"
                        passHref
                      >
                        <span className="flex items-center">
                          <FaGithub className="mr-2 h-4 w-4 " />
                          Frontend Repository
                        </span>
                      </Link>
                    </Button>
                  )}
                  {project.backendGithubUrl && (
                    <Button asChild variant="outline" className="w-full">
                      <Link
                        href={project.backendGithubUrl}
                        target="_blank"
                        passHref
                      >
                        <span className="flex items-center">
                          <FaGithub className="mr-2 h-4 w-4 " />
                          Backend Repository
                        </span>
                      </Link>
                    </Button>
                  )}
                </>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
