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

    if (req.method == "GET") {
        const categories = fs.readdirSync(contentPath).filter((file) => {
            return fs.statSync(path.join(contentPath, file)).isFile() && file.endsWith('.json');
        }).map((file) => {
            const filePath = path.join(contentPath, file);
            return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        });
        res.status(200).json(categories);
    } else if (req.method == "DELETE") {
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

                if (dirPath != contentPath) fs.rmdirSync(dirPath);
            }
        };

        deleteDirectoryRecursive(contentPath);
        res.status(200).json({ message: 'All content deleted' });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
