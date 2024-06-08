import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { category } = req.body;
    const categoryPath = path.join(process.cwd(), 'content', category);

    if (fs.existsSync(categoryPath)) {
        return res.status(409).json({ error: 'Category already exists' });
    }

    fs.mkdirSync(categoryPath);
    res.status(201).json({ message: 'Category created successfully' });
}
