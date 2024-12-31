import BackButton from "@/components/ui/back-button";
import { Badge } from "@/components/ui/badge";
import { Blog } from "@/types";
import { CalendarIcon, ClockIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import readingTime from "reading-time";

export default async function BlogPost({ params }: { params: { id: string } }) {
  const paramValue = await params;

  const response = await fetch(
    `http://localhost:5000/api/articles/${paramValue.id}`
  );

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
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            <CalendarIcon className="w-4 h-4 mr-1" />
            <span>{formatDate(blog.publicationDate)}</span>
          </div>
          <div className="flex items-center">
            <ClockIcon className="w-4 h-4 mr-1" />
            <span>{readTime}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1 mb-4">
          {blog.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      <div className="relative w-full h-64 mb-8">
        <Image
          src={blog.image}
          alt={blog.title}
          height={300}
          width={800}
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <div className="text-muted-foreground">
        <div
          className="prose prose-lg max-w-none mb-12 leading-relaxed text-muted-foreground"
          dangerouslySetInnerHTML={{
            __html: blog.content,
          }}
        />
      </div>

      <footer className="mt-8 pt-4 border-t border-gray-200">
        <p className="text-sm text-muted-foreground">
          Last updated on {formatDate(blog.updatedAt)}
        </p>
      </footer>
    </article>
  );
}
