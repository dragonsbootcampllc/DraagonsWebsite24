import { useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";
import { IconType } from "react-icons";
import { BsBoxes } from "react-icons/bs";

// Define Constants
const BASE_URL = '/blogs';

// Define types/interfaces
interface Category {
    icon: string;
    category: string;
    description: string;
    blogs: string[];
}

interface CategoryWithIcon extends Omit<Category, 'icon'> {
    iconComponent: IconType;
}

interface BlogSummary {
    icon: string;
    title: string;
    description: string;
    blogs: string[];
}

interface BlogSummaryWithIcon extends Omit<BlogSummary, 'icon'> {
    iconComponent: IconType;
}

interface BlogDetails {
    title: string;
    icon: string;
    description: string;
    content: string;
}

// Define fetchers
const get_fetcher = (url: string) => axios.get(url).then(res => res.data);

function useCategories() {
    const { data, error, isValidating } = useSWR<Category[]>('/api/blogSystem/categories', get_fetcher);
    const [categories, setCategories] = useState<CategoryWithIcon[]>([]);

    useEffect(() => {
        if (data) {
            const importIcons = async () => {
                const categoriesWithIcons: CategoryWithIcon[] = await Promise.all(data.map(async (category) => {
                    let iconComponent: IconType = BsBoxes; // Fallback icon

                    try {
                        const iconImport = await import("react-icons/fa6");
                        if (iconImport[category.icon as keyof typeof iconImport]) {
                            iconComponent = iconImport[category.icon as keyof typeof iconImport] as IconType;
                        }
                    } catch {
                        iconComponent = BsBoxes;
                    }

                    return {
                        ...category,
                        iconComponent,
                    };
                }));
                setCategories(categoriesWithIcons);
            };
            importIcons();
        }
    }, [data]);

    return { categories, error, isLoading: isValidating };
}

function useCategory(categoryName: string) {
    const { data, error, isValidating } = useSWR<BlogSummary[]>(`/api/blogSystem/category?category=${categoryName}`, get_fetcher);
    const [category, setCategory] = useState<BlogSummaryWithIcon[]>([]);

    useEffect(() => {
        if (data) {
            const importIcons = async () => {
                const blogsWithIcons: BlogSummaryWithIcon[] = await Promise.all(data.map(async (blog) => {
                    let iconComponent: IconType = BsBoxes; // Fallback icon

                    try {
                        const iconImport = await import("react-icons/fa6");
                        if (iconImport[blog.icon as keyof typeof iconImport]) {
                            iconComponent = iconImport[blog.icon as keyof typeof iconImport] as IconType;
                        }
                    } catch {
                        iconComponent = BsBoxes;
                    }

                    return {
                        ...blog,
                        iconComponent,
                    };
                }));
                setCategory(blogsWithIcons);
            };
            importIcons();
        }
    }, [data]);

    return { category, error, isLoading: isValidating };
}

function useBlog(categoryName: string, blogName: string) {
    const { data, error, isValidating } = useSWR<BlogDetails>(
        `/api/blogSystem/blog?category=${categoryName}&blog=${blogName}`,
        get_fetcher
    );

    return { blog: data, error, isLoading: isValidating };
}

export {
    useCategories,
    useCategory,
    useBlog,
    BASE_URL
};

export type {
    Category,
    CategoryWithIcon,
    BlogSummary,
    BlogSummaryWithIcon,
    BlogDetails
};
