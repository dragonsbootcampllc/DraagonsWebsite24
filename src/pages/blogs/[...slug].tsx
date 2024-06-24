import { useRouter } from "next/router";
import React from "react";
import Layout from "./layout";
import { CategoryView, Blog as BlogType } from "@/components/Blog/CategoryView";
import {
  BASE_URL,
  useBlog,
  useCategory,
  Category,
  BlogDetails,
} from "@/utils/blog";
import BlogView from "@/components/Blog/BlogView";

export default function View() {
  const router = useRouter();
  const slug = router.query.slug as string[] | undefined;

  let categoryName = "";
  let blogName = "";

  if (Array.isArray(slug)) {
    if (slug.length === 1) {
      categoryName = slug[0];
    } else if (slug.length === 2) {
      categoryName = slug[0];
      blogName = slug[1];
    }
  }

  // Helper function to clean URL parts
  const cleanSlug = (part: string) => part.replace(/^\/+|\/+$/g, "");

  const categoryResult = useCategory(cleanSlug(categoryName));
  const blogResult = useBlog(cleanSlug(categoryName), cleanSlug(blogName));

  if (slug?.length === 1) {
    const { error, data, isLoading } = categoryResult;

    if (data) {
      const categoryDescription = data.description || "";

      const blogs: BlogType[] = data.blogs.map((blog) => ({
        title: blog.title,
        description: blog.description,
        url: `${BASE_URL}/${categoryName}/${blog.title}`,
      }));

      return (
        <Layout>
          <CategoryView
            blogs={blogs}
            title={categoryName}
            description={categoryDescription}
          />
        </Layout>
      );
    }
    return <div>{isLoading ? "Loading..." : "404: Category not found"}</div>;
  } else if (slug?.length === 2) {
    const { error, blog, isLoading } = blogResult;

    return blog ? (
      <div className='w-full grid place-items-center'>
        <BlogView markdownContent={blog.content} title={blog.title} />
      </div>
    ) : (
      <div className='w-full grid place-items-center'>
        <div>{isLoading ? "Loading..." : "404: Blog not found"}</div>
      </div>
    );
  }

  return <div>{"404: Page not found"}</div>;
}
