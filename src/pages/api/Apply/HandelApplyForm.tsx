// src/pages/api/Apply/HandelApplyForm.ts

import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const formData = req.body;
        const filePath = path.resolve('src/DATA/ApplyFormData.json');

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                return res.status(500).json({ message: 'Internal server error' });
            }

            const existingData = data ? JSON.parse(data) : [];
            existingData.push(formData);

            fs.writeFile(filePath, JSON.stringify(existingData, null, 2), (err) => {
                if (err) {
                    console.error('Error writing file:', err);
                    return res.status(500).json({ message: 'Internal server error' });
                }
                return res.status(200).json({ message: 'Data saved successfully' });
            });
        });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ message: 'Method not allowed' });
    }
}
