import { useRouter } from 'next/router';
import React from 'react';
import Layout from './layout';
import { CategoryView, Blog } from '@/components/Blog/CategoryView';
import { BASE_URL, useBlog, useCategory, importIcon } from '@/utils/blog';
import BlogView from '@/components/Blog/BlogView';

export default function View() {
    const router = useRouter();
    const slug = router.query.slug as string[] | undefined;

    // Default values for hooks
    let category_name = '';
    let category_description = '';
    let blog_name = '';
    let categoryResult = { category: undefined, error: null, isLoading: true };
    let blogResult = { blog: undefined, error: null, isLoading: true };

    // Determine which hooks to use based on slug
    if (Array.isArray(slug) && slug.length === 1) {
        category_name = slug[0];
        categoryResult = useCategory(category_name);
    } else if (Array.isArray(slug) && slug.length === 2) {
        category_name = slug[0];
        blog_name = slug[1];
        blogResult = useBlog(category_name, blog_name);
    }

    // Render based on slug length and hook results
    if (slug?.length === 1) {
        const { error, category, isLoading } = categoryResult;
        if (category) {
            category_description = category.description;

            const categoryAsBlogType: Blog[] = category.blogs.map((blog) => ({
                title: blog.title,
                description: blog.description,
                url: `${BASE_URL}/${category_name}/${blog.title}`,
                icon: blog.icon // Include icon if needed in BlogView
            }));

            return (
                <Layout>
                    <CategoryView blogs={categoryAsBlogType} title={category_name} description={category_description} />
                </Layout>
            );
        }
        return <div>{isLoading ? 'Loading...' : '404: Category not found'}</div>;
    } else if (slug?.length === 2) {
        const { error, blog, isLoading } = blogResult;

        return blog ? (
            <BlogView markdownContent={blog.content} title={blog.title} />
        ) : (
            <div>
                {isLoading ? 'Loading...' : '404: Blog not found'}
            </div>
        );
    }

    return (
        <div>
            {'404: Blog not found'}
        </div>
    );
}
