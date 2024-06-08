import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import saveDetailsToFile from '../utils/saveBlogDetailsToFile';
import { Details } from '@/types';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { category, blogName, content, details } = req.body;
    const categoryPath = path.join(process.cwd(), 'content', category);
    const blogPath = path.join(categoryPath, `${blogName}.md`);

    if (!fs.existsSync(blogPath)) {
        return res.status(404).json({ error: 'Blog not found' });
    }

    const updateJsonRespone = saveDetailsToFile(details as Details, categoryPath, blogName);

    if (updateJsonRespone?.statusCode == 200) {
        fs.writeFileSync(blogPath, content);
        res.status(200).json({ message: 'Blog updated successfully' });
    } else {
        res.status(updateJsonRespone?.statusCode || 500).json({ message: updateJsonRespone?.error || 'Internal Server Error' });
    }
}
