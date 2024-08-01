import { NextApiRequest, NextApiResponse } from 'next';
import { readJSON, writeJSON } from '@/pages/api/utils/utils';
import path from 'path';
import fs from 'fs';
import Joi from 'joi';

const minisprintsDir = path.join(process.cwd(), 'db', 'minisprint', 'minisprints');

const minisprintSchema = Joi.object({
    image: Joi.string().required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.string().required(),
    startDate: Joi.date().required(),
    duration: Joi.string().required(),
    isActive: Joi.bool().default(true),
    keyLearnings: Joi.array().items(Joi.string()).required(),
    content: Joi.array().items(Joi.object({
        icon: Joi.string(),
        title: Joi.string().required(),
        description: Joi.string().required(),
    })),
    requirements: Joi.array().items(Joi.string()).required()
});

const editMinisprintSchema = Joi.object({
    image: Joi.string(),
    name: Joi.string().required(),
    description: Joi.string(),
    price: Joi.string(),
    startDate: Joi.date(),
    duration: Joi.string(),
    isActive: Joi.bool(),
    keyLearnings: Joi.array().items(Joi.string()),
    content: Joi.array().items(Joi.object({
        icon: Joi.string(),
        title: Joi.string(),
        description: Joi.string(),
    })),
    requirements: Joi.array().items(Joi.string())
});

function handleGetMinisprints(req: NextApiRequest, res: NextApiResponse) {
    const { name, isActive } = req.query;

    const minisprints = fs.readdirSync(minisprintsDir).map(file => {
        const filePath = path.join(minisprintsDir, file);
        const fileData = readJSON(filePath);
        return !name ? {
            image: fileData.image,
            name: fileData.name,
            description: fileData.description,
            price: fileData.price,
            startDate: fileData.startDate,
            duration: fileData.duration,
            isActive: fileData.isActive,
        } : fileData;
    });

    if (name) {
        const minisprint = minisprints.find(ms => ms.name === name);
        if (minisprint) {
            return res.status(200).json(minisprint);
        } else {
            return res.status(404).json({ error: 'Minisprint not found' });
        }
    } else if (typeof isActive !== 'undefined') {
        const filteredMinisprints = minisprints.filter(ms => ms.isActive == isActive);
        return res.status(200).json(filteredMinisprints);
    } else {
        return res.status(200).json(minisprints);
    }
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
