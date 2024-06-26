// pages/api/minisprints.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { readJSON, writeJSON } from '@/pages/api/utils/utils';
import path from 'path';
import fs from 'fs';
import Joi from 'joi';

const minisprintsDir = path.join(process.cwd(), 'db', 'minisprint', 'minisprints');

const minisprintSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    shortDescription: Joi.string().required(),
    image: Joi.string().required()
});

const editMinisprintSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string(),
    shortDescription: Joi.string(),
    image: Joi.string()
});

function handleGetMinisprints(req: NextApiRequest, res: NextApiResponse) {
    const minisprints = fs.readdirSync(minisprintsDir).map(file => {
        const filePath = path.join(minisprintsDir, file);
        return readJSON(filePath);
    });

    res.status(200).json(minisprints);
}

function handleAddMinisprint(req: NextApiRequest, res: NextApiResponse) {
    const { error, value } = minisprintSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const { name, description, shortDescription, image } = value;
    const minisprintPath = path.join(minisprintsDir, `${name}.json`);

    if (fs.existsSync(minisprintPath)) {
        return res.status(409).json({ message: 'Minisprint already exists' });
    }

    const minisprint = { name, description, shortDescription, image };
    writeJSON(minisprintPath, minisprint);

    res.status(201).json({ message: 'Minisprint created successfully' });
}

function handleEditMinisprint(req: NextApiRequest, res: NextApiResponse) {
    const { error, value } = editMinisprintSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const { name, ...updates } = value;
    const minisprintPath = path.join(minisprintsDir, `${name}.json`);

    if (!fs.existsSync(minisprintPath)) {
        return res.status(404).json({ message: 'Minisprint not found' });
    }

    const minisprint = readJSON(minisprintPath);
    const updatedMinisprint = { ...minisprint, ...updates };
    writeJSON(minisprintPath, updatedMinisprint);

    res.status(200).json({ message: 'Minisprint updated successfully' });
}

function handleDeleteMinisprint(req: NextApiRequest, res: NextApiResponse) {
    const { name } = req.query;
    const minisprintPath = path.join(minisprintsDir, `${name}.json`);

    if (!fs.existsSync(minisprintPath)) {
        return res.status(404).json({ message: 'Minisprint not found' });
    }

    fs.unlinkSync(minisprintPath);
    res.status(200).json({ message: 'Minisprint deleted successfully' });
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'GET':
            return handleGetMinisprints(req, res);

        case 'POST':
            return handleAddMinisprint(req, res);

        case 'PUT':
            return handleEditMinisprint(req, res);

        case 'DELETE':
            return handleDeleteMinisprint(req, res);

        default:
            res.status(405).json({ message: 'Method not allowed' });
    }
}
