// "use client";
// import { Badge } from "@/components/ui/badge";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card";
// import { Blog } from "@/types";
// import { sanitizeHtml } from "@/utils/sanitizeHtml";
// import { CalendarIcon } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// interface BlogCardProps {
//   blog: Blog;
// }

// export default function BlogCard({ blog }: BlogCardProps) {
//   const { title, content, tags, publicationDate, image } = blog;

//   const truncateContent = (html: string, maxLength: number) => {
//     const div = document.createElement("div");
//     div.innerHTML = sanitizeHtml(html);
//     const text = div.textContent || div.innerText || "";
//     if (text.length <= maxLength) return text;
//     return text.substring(0, maxLength) + "...";
//   };

//   const formatDate = (date: Date) => {
//     return new Date(date).toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     });
//   };

//   return (
//     <Card className="max-w-sm h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
//       <CardHeader className="p-0">
//         <div className="relative h-48 w-full">
//           <Link href={`/blog/${blog._id}`}>
//             <Image
//               src={image || "/placeholder.svg?height=200&width=400"}
//               alt={title}
//               layout="fill"
//               objectFit="cover"
//             />
//           </Link>
//         </div>
//       </CardHeader>
//       <CardContent className="p-4">
//         <Link href={`/blog/${blog._id}`}>
//           <h2 className="text-xl font-semibold mb-2 line-clamp-2 hover:underline">
//             {title}
//           </h2>
//           <div className="text-muted-foreground mb-4 line-clamp-3">
//             {truncateContent(content, 150)}
//           </div>
//           <div className="flex flex-wrap gap-1 mb-4">
//             {tags.map((tag) => (
//               <Badge key={tag} variant="outline">
//                 {tag}
//               </Badge>
//             ))}
//           </div>
//         </Link>
//       </CardContent>
//       <CardFooter className="p-4 pt-0 text-sm text-muted-foreground">
//         <Link href={`/blog/${blog._id}`}>
//           <div className="flex items-center justify-between w-full">
//             <div className="flex items-center">
//               <CalendarIcon className="w-4 h-4 mr-1" />
//               <span>{formatDate(publicationDate)}</span>
//             </div>
//           </div>
//         </Link>
//       </CardFooter>
//     </Card>
//   );
// }
"use client";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Blog } from "@/types";
import { sanitizeHtml } from "@/utils/sanitizeHtml";
import { CalendarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const { title, content, tags, publicationDate, image } = blog;

  const [truncatedContent, setTruncatedContent] = useState<string | null>(null);

  const truncateContent = (html: string, maxLength: number) => {
    const div = document.createElement("div");
    div.innerHTML = sanitizeHtml(html);
    const text = div.textContent || div.innerText || "";
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  useEffect(() => {
    if (content) {
      const truncated = truncateContent(content, 150);
      setTruncatedContent(truncated);
    }
  }, [content]);

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Card className="max-w-sm h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Link href={`/blogs/${blog._id}`}>
            <Image
              src={image || "/placeholder.svg?height=200&width=400"}
              alt={title}
              height={200}
              width={400}
              objectFit="cover"
              className="h-full"
            />
          </Link>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <Link href={`/blogs/${blog._id}`}>
          <h2 className="text-xl font-semibold mb-2 line-clamp-2 hover:underline">
            {title}
          </h2>
          <div className="text-muted-foreground mb-4 line-clamp-3">
            {truncatedContent || "Loading content..."}
          </div>
          <div className="flex flex-wrap gap-1 mb-4">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </Link>
      </CardContent>
      <CardFooter className="p-4 pt-0 text-sm text-muted-foreground">
        <Link href={`/blogs/${blog._id}`}>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <CalendarIcon className="w-4 h-4 mr-1" />
              <span>{formatDate(publicationDate)}</span>
            </div>
          </div>
        </Link>
      </CardFooter>
    </Card>
  );
}
