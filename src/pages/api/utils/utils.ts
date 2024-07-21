import fs from 'fs';

export const readJSON = (filePath: string) => {
    if (!fs.existsSync(filePath)) return null;
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
};

export const writeJSON = (filePath: string, data: any) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4), 'utf8');
};

export type AnyObject = { [key: string]: any };

export function removeUnderscoreKeys(obj: AnyObject): AnyObject {
    const newObj: AnyObject = {};
    for (const key in obj) {
        if (!key.startsWith("_")) {
            const value = obj[key];
            if (typeof value === "object" && value !== null) {
                newObj[key] = removeUnderscoreKeys(value);
            } else {
                newObj[key] = value;
            }
        }
    }
    return newObj;
}