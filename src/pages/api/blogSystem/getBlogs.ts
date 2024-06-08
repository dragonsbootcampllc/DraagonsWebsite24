import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { category } = req.query;
    const categoryPath = path.join(process.cwd(), 'content', category as string);

    if (!fs.existsSync(categoryPath) || !fs.statSync(categoryPath).isDirectory()) {
        return res.status(404).json({ error: 'Category not found' });
    }

    const blogs = fs.readdirSync(categoryPath).filter((file) => file.endsWith('.json'));
    res.status(200).json({ blogs });
}
