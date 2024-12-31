// import DOMPurify from "dompurify";

// export function sanitizeHtml(html: string): string {
//   if (typeof window !== "undefined") {
//     return DOMPurify.sanitize(html);
//   }
//   return html;
// }
import DOMPurify from "dompurify";

export function sanitizeHtml(html: string): string {
  if (typeof window !== "undefined") {
    return DOMPurify.sanitize(html, {
      ALLOWED_TAGS: [
        "h1",
        "h2",
        "h3",
        "p",
        "br",
        "strong",
        "em",
        "a",
        "ul",
        "ol",
        "li",
        "span",
        "code",
        "img",
        "blockquote",
      ],
      ALLOWED_ATTR: ["href", "src", "alt", "class", "style", "target"],
    });
  }
  return html;
}
