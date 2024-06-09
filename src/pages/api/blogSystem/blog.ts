import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import saveDetailsToFile from '../utils/saveBlogDetailsToFile';
import { Details } from '@/types';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method === 'POST') {
        const { category, blogName, content, details } = req.body;

        // category didn't provided error
        if (!category) {
            return res.status(400).json({ error: 'Please provide category as body' });
        }

        const categoryPath = path.join(process.cwd(), 'db', 'content', category as string);

        // blogName didn't provided error
        if (!blogName) {
            return res.status(400).json({ error: 'Please provide blogName as body' });
        }

        // content didn't provided error
        if (!content) {
            return res.status(400).json({ error: 'Please provide content as body' });
        }

        // details didn't provided error
        if (!details) {
            return res.status(400).json({ error: 'Please provide details as body' });
        } else if (!details.icon) {
            return res.status(400).json({ error: 'Please provide icon in details' });
        } else if (!details.description) {
            return res.status(400).json({ error: 'Please provide description in details' });
        }

        // category not exit error
        if (!fs.existsSync(categoryPath) || !fs.statSync(categoryPath).isDirectory()) {
            return res.status(404).json({ error: 'Category not found' });
        }

        const blogPath = path.join(categoryPath, `${blogName}.md`);

        // file is already exit error
        if (fs.existsSync(blogPath)) {
            return res.status(409).json({ error: 'Blog already exists' });
        }

        const createJsonRespone = saveDetailsToFile({title: blogName, ...details} as Details, categoryPath, blogName);

        // update category details content
        {
            const categoryDetailsPath = categoryPath + '.json';
            const content = JSON.parse(fs.readFileSync(categoryDetailsPath, 'utf-8'));
            content.blogs.push(blogName);
            fs.writeFileSync(categoryDetailsPath, JSON.stringify(content, null, 4));
        }

        // check create json status
        if (createJsonRespone?.statusCode == 200) {
            fs.writeFileSync(blogPath, content);
            res.status(201).json({ message: 'Blog created successfully' });
        } else {
            res.status(createJsonRespone?.statusCode || 500).json({ message: createJsonRespone?.error || 'Internal Server Error' });
        }
    } else if (req.method == "GET") {
        const { category, blog } = req.query;

        // category didn't provided error
        if (!category) {
            return res.status(400).json({ error: 'Please provide category as query' });
        }

        const categoryPath = path.join(process.cwd(), 'db', 'content', category as string);
        const blogJsonPath = path.join(categoryPath, `${blog}.json`);
        const blogContentPath = path.join(categoryPath, `${blog}.md`);

        // category not exit error
        if (!fs.existsSync(categoryPath) || !fs.statSync(categoryPath).isDirectory()) {
            return res.status(404).json({ error: 'Category not found' });
        }

        // blog didn't provided error
        if (!blog) {
            return res.status(400).json({ error: 'Please provide blog as query' });
        }

        // blog not exit error
        if (!fs.existsSync(blogContentPath)) {
            return res.status(404).json({ error: 'Blog not found' });
        }

        const details = JSON.parse(fs.readFileSync(blogJsonPath, 'utf-8'));
        const content = fs.readFileSync(blogContentPath, 'utf-8');

        res.status(200).json({ ...details, content });
    } else if (req.method == "DELETE") {
        const { category, blog } = req.query;

        // category didn't provided error
        if (!category) {
            return res.status(400).json({ error: 'Please provide category as query' });
        }

        const categoryPath = path.join(process.cwd(), 'db', 'content', category as string);
        const blogJsonPath = path.join(categoryPath, `${blog}.json`);
        const blogContentPath = path.join(categoryPath, `${blog}.md`);

        // category not exit error
        if (!fs.existsSync(categoryPath) || !fs.statSync(categoryPath).isDirectory()) {
            return res.status(404).json({ error: 'Category not found' });
        }

        // blog didn't provided error
        if (!blog) {
            return res.status(400).json({ error: 'Please provide blog as query' });
        }

        // blog not exit error
        if (!fs.existsSync(blogContentPath)) {
            return res.status(404).json({ error: 'Blog not found' });
        }

        // update category details content
        {
            const categoryDetailsPath = categoryPath + '.json';
            const content = JSON.parse(fs.readFileSync(categoryDetailsPath, 'utf-8'));
            content.blogs.filter((blogName: string) => blogName != blog);
            fs.writeFileSync(categoryDetailsPath, JSON.stringify(content, null, 4));
        }

        fs.unlinkSync(path.join(blogContentPath));
        fs.unlinkSync(path.join(blogJsonPath));
        res.status(200).json({ message: 'Blog Deleted Successfully' });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
