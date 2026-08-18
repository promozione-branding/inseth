import { client } from "@/lib/sanity";
import { groq } from "next-sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

// Fetch blog
async function getBlog(slug) {
  return client.fetch(
    groq`*[_type == "blog" && slug.current == $slug][0]{
      title,
      date,
      excerpt,
      "imageUrl": image.asset->url,
      content,
      metaTitle,
      metaDescription
    }`,
    { slug }
  );
}

// SEO Metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const blog = await getBlog(slug);

  return {
    title: blog?.metaTitle || blog?.title || "Blog | Studio",
    description:
      blog?.metaDescription ||
      blog?.excerpt ||
      "Read the latest insights and updates from Studio.",
  };
}

// Portable Text Components
const components = {
  types: {},

  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-6 mb-4">{children}</ul>
    ),

    number: ({ children }) => (
      <ol className="list-decimal ml-6 mb-4">{children}</ol>
    ),
  },

  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
        {children}
      </h1>
    ),

    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-3">
        {children}
      </h3>
    ),

    h4: ({ children }) => (
      <h4 className="text-lg md:text-xl font-semibold text-gray-600 mb-3">
        {children}
      </h4>
    ),

    h5: ({ children }) => (
      <h5 className="text-base md:text-lg font-semibold text-gray-500 mb-3">
        {children}
      </h5>
    ),

    normal: ({ children }) => (
      <p className="text-black leading-relaxed mb-5">
        {children}
      </p>
    ),

    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-6">
        {children}
      </blockquote>
    ),
  },

  marks: {
    strong: ({ children }) => (
      <strong className="font-bold">{children}</strong>
    ),

    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),

    underline: ({ children }) => (
      <span className="underline">{children}</span>
    ),

    link: ({ value, children }) => (
      <a
        href={value?.href}
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),

    color: ({ value, children }) => {
      const colorHex = value?.hex || "inherit";

      return (
        <span style={{ color: colorHex }}>
          {children}
        </span>
      );
    },
  },
};

// Blog Detail Page
export default async function BlogDetail({ params }) {
  // Next.js 16 params is async
  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <p className="text-xl text-gray-600">
          Blog not found
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: "url('/bag/bg-other.webp')",
        }}
        className="relative h-[50vh] md:h-[90vh] bg-center bg-cover overflow-hidden"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-[1]" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center max-w-6xl mx-auto px-6">
          <div className="text-emerald-700 max-w-4xl bg-white p-4 md:p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl md:text-6xl font-bold leading-tight">
              {blog.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="max-w-6xl mx-auto px-6 py-10">
        {/* Blog Image */}
        {blog.imageUrl && (
          <div className="mb-8">
            <Image
              src={blog.imageUrl}
              alt={blog.title || "Blog image"}
              width={1200}
              height={600}
              className="w-full h-auto rounded-xl object-cover"
              priority
            />
          </div>
        )}

        {/* Published Date */}
        <p className="text-sm text-red-500 mb-6">
          Published on:{" "}
          {blog.date
            ? new Date(blog.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "No date"}
        </p>

        {/* Excerpt */}
        {blog.excerpt && (
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
            {blog.excerpt}
          </p>
        )}

        {/* Portable Text */}
        {blog.content && (
          <div className="prose max-w-none">
            <PortableText
              value={blog.content}
              components={components}
            />
          </div>
        )}
      </article>
    </>
  );
}