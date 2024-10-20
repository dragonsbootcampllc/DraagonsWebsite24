import { useRouter } from "next/router";
import React from "react";
import Layout from "./layout";
import CategoryView from "./components/CategoryView";
import { Blog as BlogType } from "./components/CategoryView";
import {
  BASE_URL,
  useBlog,
  useCategory,
  Category,
  BlogDetails,
} from "./utils/blog";
import BlogView from "./components/BlogView";
import Loading from "@/components/Loading";

export default function View() {
  const router = useRouter();
  const blogSlug = router.query.blogSlug as string[] | undefined;

  let categoryName = "";
  let blogName = "";

  if (Array.isArray(blogSlug)) {
    if (blogSlug.length === 1) {
      categoryName = blogSlug[0];
    } else if (blogSlug.length === 2) {
      categoryName = blogSlug[0];
      blogName = blogSlug[1];
    }
  }

  const categoryResult = useCategory(categoryName);
  const blogResult = useBlog(categoryName, blogName);

  if (blogSlug?.length === 1) {
    const { error, data, isLoading } = categoryResult;

    if (isLoading) {
      return <Loading />;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

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

    return <div>404: Category not found</div>;
  } else if (blogSlug?.length === 2) {
    const { error, blog, isLoading } = blogResult;

    if (isLoading) {
      return <Loading />
    }

    if (error) {
      return <div className="w-full min-h-screen grid place-items-center">Error: {error.message}</div>;
    }

    return blog ? (
      <div className="w-full min-h-screen grid place-items-center">
        <BlogView markdownContent={blog.content} title={blog.title} quiz={blog.quiz} category={categoryName} blog={blogName} />
      </div>
    ) : (
      <div className="w-full min-h-screen grid capitalize place-items-center">
        <div>404: Blog not found, this is a website demo version so you may see some errors</div>
      </div>
    );
  }

  return <div>404: Page not found</div>;
}
