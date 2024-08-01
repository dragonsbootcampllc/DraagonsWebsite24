import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { readJSON, writeJSON } from '@/pages/api/utils/utils';

const configPath = path.join(process.cwd(), 'db', 'events', 'config.json');

function handleOptions(res: NextApiResponse) {
    res.status(200).end();
}

function handleGet(req: NextApiRequest, res: NextApiResponse) {
    const config = readJSON(configPath);
    res.status(200).json(config);
}

function handleDelete(req: NextApiRequest, res: NextApiResponse) {
    const eventsDir = path.join(process.cwd(), 'db', 'events');
    const config = readJSON(configPath);

    fs.readdirSync(eventsDir).forEach(file => {
        if (file !== 'config.json') {
            fs.unlinkSync(path.join(eventsDir, file));
        }
    });

    config.events = [];
    config.eventsCount = 0;
    writeJSON(configPath, config);

    res.status(200).json({ message: 'All events deleted successfully' });
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'OPTIONS':
            return handleOptions(res);
        case 'GET':
            return handleGet(req, res);
        case 'DELETE':
            return handleDelete(req, res);
        default:
            res.status(405).json({ message: 'Method not allowed' });
    }
}
