import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { category, blog } = req.query;
    const blogJsonPath = path.join(process.cwd(), 'content', category as string, `${blog}.json`);
    const blogContentPath = path.join(process.cwd(), 'content', category as string, `${blog}.md`);

    if (!fs.existsSync(blogContentPath)) {
        return res.status(404).json({ error: 'Blog not found' });
    }

    const details = fs.readFileSync(blogJsonPath, 'utf-8');
    const content = fs.readFileSync(blogContentPath, 'utf-8');

    res.status(200).json({ content, details });
}
