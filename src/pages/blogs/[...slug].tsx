import { useRouter } from 'next/router';
import React from 'react';
import Layout from './layout';
import { CategoryView, Blog } from '@/components/Blog/CategoryView';
import { BASE_URL, useBlog, useCategory } from '@/utils/blog';
import BlogView from '@/components/Blog/BlogView';

export default function View() {
    const router = useRouter();
    const slug = router.query.slug;

    // Default values for hooks
    let category_name = '';
    let blog_name = '';
    let categoryResult = { category: [], error: null, isLoading: true };
    let blogResult = { blog: null, error: null, isLoading: true };

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
        const categoryAsBlogType: Blog[] = category.map((blog) => ({
            title: blog.title,
            description: blog.description,
            url: `${BASE_URL}/${category_name}/${blog.title}`
        }));

        return (
            <Layout>
                <CategoryView blogs={categoryAsBlogType} title={category_name} description='ssssssssss' />
            </Layout>
        );
    } else if (slug?.length === 2) {
        const { error, blog, isLoading } = blogResult;

        return blog ? (
            <BlogView markdownContent={blog.content} title={blog.title} />
        ) : (
            <div>
                {'404: blog not found ^>^'}
            </div>
        );
    }

    return (
        <div>
            {'404: blog not found ^>^'}
        </div>
    );
}
