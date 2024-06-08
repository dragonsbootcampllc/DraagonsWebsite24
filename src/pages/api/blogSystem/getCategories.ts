import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
    const contentPath = path.join(process.cwd(), 'content');
    const categories = fs.readdirSync(contentPath).filter((file) => {
        return fs.statSync(path.join(contentPath, file)).isDirectory();
    });

    res.status(200).json({ categories });
}
