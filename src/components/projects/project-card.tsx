"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Project } from "@/types";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project: {
    _id,
    title,
    description,
    technologies,
    link,

    imageUrl,
  },
}: ProjectCardProps) {
  return (
    <>
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              width={500}
              height={500}
              objectFit="cover"
              className="transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4 pb-0">
          <CardTitle className="mb-2 text-xl font-bold">{title}</CardTitle>
          <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
            {description}
          </p>
          <div className="mb-4 flex flex-wrap gap-1">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex flex-wrap justify-between gap-2 p-4">
          <Button
            onClick={() => window.open(link, "_blank")}
            size={"sm"}
            className="flex-1"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View Project
          </Button>

          <Button variant="outline" size={"sm"} className="flex-1" asChild>
            <Link href={`/projects/${_id}`}>More Details</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
