import BackButton from "@/components/ui/back-button";
import { Badge } from "@/components/ui/badge";
import { Blog } from "@/types";
import { CalendarIcon, ClockIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import readingTime from "reading-time";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const paramValue = await params;

  const response = await fetch(
    `${process.env.API_URL}/articles/${paramValue.id}`
  );
  console.log(`${process.env.API_URL}/articles`);

  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const blog: Blog = await response.json();

  if (!blog) {
    notFound();
  }

  const { text: readTime } = readingTime(blog.content);

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <article className=" px-4 py-8">
      <BackButton />
      <header className="my-8">
        <h1 className="mb-4 text-4xl font-bold">{blog.title}</h1>
        <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <CalendarIcon className="mr-1 size-4" />
            <span>{formatDate(blog.publicationDate)}</span>
          </div>
          <div className="flex items-center">
            <ClockIcon className="mr-1 size-4" />
            <span>{readTime}</span>
          </div>
        </div>
        <div className="mb-4 flex flex-wrap gap-1">
          {blog.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      <div className="relative mb-8 h-96 w-full">
        <Image
          src={blog.image}
          alt={blog.title}
          height={300}
          width={800}
          className="h-full rounded-lg"
        />
      </div>

      <div className="">
        <div
          className="prose-lg mb-12 max-w-none leading-relaxed text-white dark:prose"
          dangerouslySetInnerHTML={{
            __html: blog.content,
          }}
        />
      </div>

      <footer className="mt-8 border-t border-gray-200 pt-4">
        <p className="text-sm text-muted-foreground">
          Last updated on {formatDate(blog.updatedAt)}
        </p>
      </footer>
    </article>
  );
}
