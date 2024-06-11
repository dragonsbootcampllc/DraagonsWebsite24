import { useRouter } from 'next/router';
import React from 'react';
import Layout from './layout';
import { CategoryView, Blog} from '@/components/Blog/CategoryView';
import { BASE_URL, useCategory } from '@/utils/blog';

export default function view() {
    const router = useRouter();
    const slug = router.query.slug;
    
    if (slug?.length == 1) {
        const category_name = slug[0];
        const { error, category, isLoading } = useCategory(category_name);

        const categoryAsBlogType: Blog[] = category.map((blog) => {return {title: blog.title, description: blog.description, url: `${BASE_URL}/${category_name}/${blog.title}`}})

        return (
            <Layout>
                <CategoryView blogs={categoryAsBlogType} title={category_name} description='ssssssssss' />
            </Layout>
        )
    }
    return (
        <div className='pt-52 text-white text-2xl'>
            {JSON.stringify(slug)}
        </div>
    )
}