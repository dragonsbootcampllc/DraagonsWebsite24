import { useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";

// Define Constants
const BASE_URL = '/blogs';

// Define types/interfaces
interface CategorySummary {
    icon: string; // SVG HTML string
    category: string;
    description: string;
    blogs: string[];
}

interface BlogSummary {
    icon: string; // SVG HTML string
    title: string;
    description: string;
}

interface BlogDetails {
    title: string;
    icon: string; // SVG HTML string
    description: string;
    content: string;
}

interface Category {
    icon: string; // SVG HTML string
    category: string;
    description: string;
    blogs: BlogSummary[];
}

// Define fetchers
const get_fetcher = (url: string) => axios.get(url).then(res => res.data);

// Utility function to import icons
const importIcon = async (iconName: string) => {
    try {
        const iconImport = await import("react-icons/fa6");
        return iconImport[iconName as keyof typeof iconImport] || null;
    } catch {
        return null;
    }
};

function useCategories() {
    const { data: categories, error, isValidating } = useSWR<Category[]>('/api/blogSystem/categories', get_fetcher);

    return { categories, error, isLoading: isValidating };
}

function useCategory(categoryName: string) {
    const { data: category, error, isValidating } = useSWR<Category>(`/api/blogSystem/category?category=${categoryName}`, get_fetcher);

    return { category, error, isLoading: isValidating };
}

function useBlog(categoryName: string, blogName: string) {
    const { data: blog, error, isValidating } = useSWR<BlogDetails>(
        `/api/blogSystem/blog?category=${categoryName}&blog=${blogName}`,
        get_fetcher
    );

    return { blog, error, isLoading: isValidating };
}

export {
    useCategories,
    useCategory,
    useBlog,
    BASE_URL,
    importIcon
};

export type {
    CategorySummary,
    BlogSummary,
    BlogDetails,
    Category
};
