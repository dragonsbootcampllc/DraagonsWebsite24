import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import saveDetailsToFile from '../utils/saveBlogDetailsToFile';
import { Details } from '@/types';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { category, blogName, content, details } = req.body;
    const categoryPath = path.join(process.cwd(), 'content', category);

    if (!fs.existsSync(categoryPath) || !fs.statSync(categoryPath).isDirectory()) {
        return res.status(404).json({ error: 'Category not found' });
    }

    const blogPath = path.join(categoryPath, `${blogName}.md`);

    if (fs.existsSync(blogPath)) {
        return res.status(409).json({ error: 'Blog already exists' });
    }

    const createJsonRespone = saveDetailsToFile(details as Details, categoryPath, blogName);

    if (createJsonRespone?.statusCode == 200) {
        fs.writeFileSync(blogPath, content);
        res.status(201).json({ message: 'Blog created successfully' });
    } else {
        res.status(createJsonRespone?.statusCode || 500).json({ message: createJsonRespone?.error || 'Internal Server Error' });
    }
}
