import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { readJSON, writeJSON } from '@/pages/api/utils/utils';
import { validateEventDetails, calculateSpan } from '@/pages/api/utils/event';

const configPath = path.join(process.cwd(), 'db', 'events', 'config.json');

function handleOptions(res: NextApiResponse) {
    res.status(200).end();
}

function handlePost(req: NextApiRequest, res: NextApiResponse) {
    const { name, startDate, webinarDate, speakers, dragonsMembersNumber, seatNumber, duration, minPrice, maxPrice } = req.body;

    // Validate event details
    const validationError = validateEventDetails(req.body);
    if (validationError) {
        return res.status(400).json({ message: validationError });
    }

    // Calculate ticket number
    const config = readJSON(configPath);

    const event = {
        name,
        startDate,
        webinarDate,
        speakers,
        dragonsMembersNumber,
        status: "waiting",
        duration,
        minPrice,
        maxPrice,
        reservedTickets: 0,
        seatNumber
    };

    const eventPath = path.join(process.cwd(), 'db', 'events', `${name}.json`);
    if (fs.existsSync(eventPath)) {
        return res.status(409).json({ message: 'Event with this name already exists' });
    }

    writeJSON(eventPath, event);

    // Update config
    config.eventsCount += 1;
    config.events.push(name);
    writeJSON(configPath, config);

    res.status(201).json({ message: 'Event created successfully' });
}

function handlePut(req: NextApiRequest, res: NextApiResponse) {
    const { name, ...updates } = req.body;
    const eventPath = path.join(process.cwd(), 'db', 'events', `${name}.json`);

    if (!fs.existsSync(eventPath)) {
        return res.status(404).json({ message: 'Event not found' });
    }

    const event = readJSON(eventPath);
    const updatedEvent = { ...event, ...updates };

    // Validate updated event details
    const validationError = validateEventDetails(updatedEvent);
    if (validationError) {
        return res.status(400).json({ message: validationError });
    }

    writeJSON(eventPath, updatedEvent);

    res.status(200).json({ message: 'Event updated successfully' });
}

function handleGet(req: NextApiRequest, res: NextApiResponse) {
    const { name } = req.query;
    const eventPath = path.join(process.cwd(), 'db', 'events', `${name}.json`);

    if (!fs.existsSync(eventPath)) {
        return res.status(404).json({ message: 'Event not found' });
    }

    const event = readJSON(eventPath);
    const config = readJSON(configPath);

    const ticketNumber = event.seatNumber - config.dragonsMembersNumber;
    const span = calculateSpan(event.minPrice, event.maxPrice, event.startDate, event.webinarDate, config.duration);

    event.ticketNumber = ticketNumber;
    event.span = span;

    res.status(200).json(event);
}

function handleDelete(req: NextApiRequest, res: NextApiResponse) {
    const { name } = req.body;
    const eventPath = path.join(process.cwd(), 'db', 'events', `${name}.json`);

    if (!fs.existsSync(eventPath)) {
        return res.status(404).json({ message: 'Event not found' });
    }

    fs.unlinkSync(eventPath);

    // Update config
    const config = readJSON(configPath);
    config.events = config.events.filter((eventName: string) => eventName !== name);
    config.eventsCount -= 1;
    writeJSON(configPath, config);

    res.status(200).json({ message: 'Event deleted successfully' });
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'OPTIONS':
            return handleOptions(res);
        case 'POST':
            return handlePost(req, res);
        case 'PUT':
            return handlePut(req, res);
        case 'DELETE':
            return handleDelete(req, res);
        case 'GET': 
            return handleGet(req, res);
        default:
            res.status(405).json({ message: 'Method not allowed' });
    }
}
