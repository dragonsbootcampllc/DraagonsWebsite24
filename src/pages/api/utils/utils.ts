import fs from 'fs';
import path from 'path';

export const readJSON = (filePath: string) => {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

export const writeJSON = (filePath: string, data: any) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
}
