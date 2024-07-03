import fs from 'fs';

export const readJSON = (filePath: string) => {
    if (!fs.existsSync(filePath)) return null;
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
};

export const writeJSON = (filePath: string, data: any) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4), 'utf8');
};
