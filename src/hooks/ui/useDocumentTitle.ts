import { useEffect, useState } from "react";

/**
 * A hook for managing the document title with automatic cleanup
 *
 * @example
 * ```tsx
 * // Set and update the page title based on component state
 * const ProductPage = ({ product }) => {
 *   useDocumentTitle(`${product.name} - My Store`);
 *
 *   return (
 *     <div>
 *       <h1>{product.name}</h1>
 *       <p>{product.description}</p>
 *     </div>
 *   );
 * };
 * ```
 */
export function useDocumentTitle(title: string): void {
  const [originalTitle] = useState(document.title);

  useEffect(() => {
    document.title = title;

    return () => {
      document.title = originalTitle;
    };
  }, [title, originalTitle]);
}

/**
 * A hook for managing document meta tags (SEO)
 *
 * @example
 * ```tsx
 * // Set page meta tags for SEO
 * const BlogPost = ({ post }) => {
 *   useMetaTags({
 *     title: post.title,
 *     description: post.excerpt,
 *     image: post.featuredImage,
 *     url: `https://myblog.com/posts/${post.slug}`,
 *   });
 *
 *   return (
 *     <article>
 *       <h1>{post.title}</h1>
 *       <div dangerouslySetInnerHTML={{ __html: post.content }} />
 *     </article>
 *   );
 * };
 * ```
 */
export function useMetaTags({
  title,
  description,
  image,
  url,
}: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}): void {
  useEffect(() => {
    if (typeof document === "undefined") return;

    const updateMeta = (name: string, content: string) => {
      const attr = name.startsWith("og:") ? "property" : "name";

      let tag = document.querySelector(`meta[${attr}="${name}"]`);

      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }

      tag.setAttribute("content", content);
    };

    if (title) {
      document.title = title;
      updateMeta("og:title", title);
      updateMeta("twitter:title", title);
    }

    if (description) {
      updateMeta("description", description);
      updateMeta("og:description", description);
      updateMeta("twitter:description", description);
    }

    if (image) {
      updateMeta("og:image", image);
      updateMeta("twitter:image", image);
    }

    if (url) {
      updateMeta("og:url", url);
    }
  }, [title, description, image, url]);
}
