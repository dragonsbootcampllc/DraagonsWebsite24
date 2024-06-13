import { Details } from '@/types';
import fs from 'fs';
import path from 'path'

export default function saveDetailsToFile(details: Details | null, categoryPath: string, blogName: string) {
    if (details) {
        const jsonPath = path.join(categoryPath, `${blogName}.json`);
        try {
            fs.writeFileSync(jsonPath, JSON.stringify(details, null, 4), 'utf-8');
            return { statusCode: 200 };
        } catch (err) {
            return { statusCode: 500, error: (`Error writing file to ${jsonPath}\n${err}`)};
        }
    }
}