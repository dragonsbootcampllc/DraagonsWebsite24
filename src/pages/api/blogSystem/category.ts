import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const contentPath = path.join(process.cwd(), 'db', 'content');

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method == "POST") {
        const { category, description, icon } = req.body;

        // category didn't provided error
        if (!category) {
            return res.status(400).json({ error: 'Please provide category as body' });
        }

        const categoryPath = path.join(contentPath, category);

        // icon didn't provided error
        if (!icon) {
            return res.status(400).json({ error: 'Please provide icon as body' });
        }

        // description didn't provided error
        if (!description) {
            return res.status(400).json({ error: 'Please provide description as body' });
        }

        // the category is exit already error
        if (fs.existsSync(categoryPath)) {
            return res.status(409).json({ error: 'Category already exists' });
        }

        const categoryDetails = {
            icon,
            category,
            description
        };

        fs.mkdirSync(categoryPath);
        fs.writeFileSync(path.join(contentPath, `${category}.json`), JSON.stringify({ ...categoryDetails, blogs: [] }, null, 4));

        res.status(201).json({ message: 'Category created successfully' });
    } else if (req.method == "GET") {
        const { category } = req.query;

        // category didn't provided error
        if (!category) {
            return res.status(400).json({ error: 'Please provide category as query' });
        }

        const categoryPath = path.join(contentPath, category as string);
        const categoryDetailsPath = path.join(contentPath, `${category}.json`);
        let categoryDetails = {};

        if (!fs.existsSync(categoryPath) || !fs.statSync(categoryPath).isDirectory()) {
            return res.status(404).json({ error: 'Category not found' });
        }

        if (fs.existsSync(categoryDetailsPath) && fs.statSync(categoryDetailsPath).isFile()) {
            categoryDetails = JSON.parse(fs.readFileSync(categoryDetailsPath, 'utf-8') as string);
        }

        const blogs = fs.readdirSync(categoryPath).filter((file) => file.endsWith('.json')).map((file) => JSON.parse(fs.readFileSync(path.join(categoryPath, file), 'utf-8')));
        res.status(200).json({ blogs, ...categoryDetails });
    } else if (req.method == "DELETE") {
        const { category } = req.query;

        // category didn't provided error
        if (!category) {
            return res.status(400).json({ error: 'Please provide category as query' });
        }

        const categoryPath = path.join(contentPath, category as string);

        // Check if the category path exists
        if (!fs.existsSync(categoryPath)) {
            return res.status(404).json({ error: 'Category not found' });
        }

        const deleteDirectoryRecursive = (dirPath: string) => {
            if (fs.existsSync(dirPath)) {
                fs.readdirSync(dirPath).forEach((file) => {
                    const currentPath = path.join(dirPath, file);

                    if (fs.lstatSync(currentPath).isDirectory()) {
                        // Recurse
                        deleteDirectoryRecursive(currentPath);
                    } else {
                        // Delete file
                        fs.unlinkSync(currentPath);
                    }
                });

                fs.rmdirSync(dirPath);
            }
        };

        deleteDirectoryRecursive(categoryPath);
        fs.unlinkSync(path.join(contentPath, `${category}.json`));
        res.status(200).json({ message: 'Category deleted successfully' });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
