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
    <section id="blogs" className="bg-background px-4 py-16 text-foreground">
      <div className="mx-auto">
        <h2 className="mb-8 text-center text-3xl font-bold text-primary md:text-4xl">
          Latest Blogs
        </h2>
        <p className="mb-12 text-center text-lg font-medium text-muted-foreground">
          Check out my latest insights and tutorials on web development, React,
          Tailwind CSS, and more.
        </p>
        <div className="grid grid-cols-1 gap-8  sm:grid-cols-2 md:grid-cols-3">
          {blogs?.map((blog, index) => (
            <BlogCard blog={blog} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
