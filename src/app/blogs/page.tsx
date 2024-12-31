import BlogCard from "@/components/blog-card";
import { Blog } from "@/types";

export default async function Blogs() {
  const result = await fetch("http://localhost:5000/api/articles", {
    cache: "no-store",
  });
  const blogs: Blog[] = await result.json();

  return (
    <section
      id="blogs"
      className="py-16 px-4 bg-background text-foreground min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">
          My Blogs
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          Explore my thoughts, tutorials, and insights on web development,
          design, and technology trends. Stay updated with the latest in the
          industry.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2  gap-8">
          {blogs.map((blog) => (
            <BlogCard blog={blog} key={blog._id} />
          ))}
        </div>
      </div>
    </section>
  );
}
