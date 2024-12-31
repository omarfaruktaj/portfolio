import { Blog } from "@/types";
import BlogCard from "../blog-card";

export default async function Blogs() {
  console.log(`${process.env.API_URL}/articles`);
  const result = await fetch(`${process.env.API_URL}/articles`, {
    cache: "no-store",
  });

  if (!result.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const blogsData: Blog[] = await result.json();

  const blogs = blogsData.slice(0, 4);

  return (
    <section id="blogs" className="py-16 px-4 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center">
          Latest Blogs
        </h2>
        <p className="text-lg text-muted-foreground font-medium text-center mb-12">
          Check out my latest insights and tutorials on web development, React,
          Tailwind CSS, and more.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-8">
          {blogs?.map((blog, index) => (
            <BlogCard blog={blog} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
