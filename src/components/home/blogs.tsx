import { Blog } from "@/types";
import BlogCard from "../blog-card";

// const blogs = [
//   {
//     title: "Mastering React: Tips and Best Practices",
//     description:
//       "A comprehensive guide to writing efficient and maintainable React code, including advanced patterns and state management tips.",
//     image: "/images/react-tips.jpg",
//     date: "December 20, 2024",
//     link: "https://yourblog.com/mastering-react",
//   },
//   {
//     title: "Understanding Tailwind CSS: A Beginner's Guide",
//     description:
//       "Learn how to use Tailwind CSS to build beautiful, responsive designs faster than ever.",
//     image: "/images/tailwind-guide.jpg",
//     date: "November 15, 2024",
//     link: "https://yourblog.com/tailwind-guide",
//   },
//   {
//     title: "Node.js for Backend Development: Key Concepts",
//     description:
//       "Explore the fundamentals of Node.js, including building REST APIs and optimizing performance for backend applications.",
//     image: "/images/nodejs-backend.jpg",
//     date: "October 10, 2024",
//     link: "https://yourblog.com/nodejs-backend",
//   },
// ];

export default async function Blogs() {
  const result = await fetch("http://localhost:5000/api/articles");
  console.log(result);
  const blogs: Blog[] = await result.json();

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs?.map((blog, index) => (
            <BlogCard blog={blog} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
