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
    icon: IconType;
}

interface ShortBlog {
    icon: string;
    title: string;
    description: string;
    blogs: string[];
}

interface ShortBlogWithIcon extends Omit<ShortBlog, 'icon'> {
    icon: IconType;
}

// Define a function to fetch from the API
const categories_fetcher = (url: string) => axios.get(url).then(res => res.data);
const category_fetcher = (url: string) => axios.get(url).then(res => res.data);

function useCategories() {
    const { data, error, isValidating } = useSWR<Category[]>('/api/blogSystem/categories', categories_fetcher);
    const [categories, setCategories] = useState<CategoryWithIcon[]>([]);

    useEffect(() => {
        if (data) {
            const importIcons = async () => {
                const categoriesWithIcons: CategoryWithIcon[] = await Promise.all(data.map(async (category) => {
                    let icon: IconType = BsBoxes; // Fallback icon

                    try {
                        // Dynamically import the icon from react-icons/fa6
                        const iconImport = await import("react-icons/fa6");

                        // Check if the icon exists in the imported module
                        if (iconImport[category.icon as keyof typeof iconImport]) {
                            icon = iconImport[category.icon as keyof typeof iconImport] as IconType;
                        }
                    } catch {
                        // Fallback to BsBoxes in case of an error
                        icon = BsBoxes;
                    }

                    return {
                        ...category,
                        icon,
                    };
                }));
                setCategories(categoriesWithIcons);
            };
            importIcons();
        }
    }, [data]);

    return { categories, error, isLoading: isValidating };
}

function useCategory(category_name: string) {
    const { data, error, isValidating } = useSWR<ShortBlog[]>(`/api/blogSystem/category?category=${category_name}`, category_fetcher);
    const [category, setCategory] = useState<ShortBlogWithIcon[]>([]);

    useEffect(() => {
        if (data) {
            const importIcons = async () => {
                const ShortBlogsWithIcons: ShortBlogWithIcon[] = await Promise.all(data.map(async (blog) => {
                    let icon: IconType = BsBoxes; // Fallback icon

                    try {
                        // Dynamically import the icon from react-icons/fa6
                        const iconImport = await import("react-icons/fa6");

                        // Check if the icon exists in the imported module
                        if (iconImport[blog.icon as keyof typeof iconImport]) {
                            icon = iconImport[blog.icon as keyof typeof iconImport] as IconType;
                        }
                    } catch {
                        // Fallback to BsBoxes in case of an error
                        icon = BsBoxes;
                    }

                    return {
                        ...blog,
                        icon,
                    };
                }));
                setCategory(ShortBlogsWithIcons);
            };
            importIcons();
        }
    }, [data]);

    return { category, error, isLoading: isValidating };
}

// Export functions and constants
export {
    useCategories,
    useCategory,
    BASE_URL
}

// Export types
export type {
    Category,
    CategoryWithIcon,
    ShortBlog,
    ShortBlogWithIcon
}