import { NextApiRequest, NextApiResponse } from 'next';
import { readJSON, writeJSON } from '@/pages/api/utils/utils';
import path from 'path';
import fs from 'fs';
import Joi from 'joi';

const bookingsDir = path.join(process.cwd(), 'db', 'minisprint', 'bookings');

const incrementBookingCounter = () => {
    const configPath = path.join(bookingsDir, 'config.json');
    var config = readJSON(configPath);
    config.bookingCounter += 1;
    writeJSON(configPath, config);
    return config.bookingCounter;
};

const bookingSchema = Joi.object({
    minisprintName: Joi.string().required(),
    user: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required()
    }).required(),
    is_paid: Joi.boolean().default(false)
});

function handleGetBookings(req: NextApiRequest, res: NextApiResponse) {
    const bookings = fs.readdirSync(bookingsDir).map(file => {
        const filePath = path.join(bookingsDir, file);
        return readJSON(filePath);
    });

    res.status(200).json(bookings);
}

function handleBookMinisprint(req: NextApiRequest, res: NextApiResponse) {
    const { error, value } = bookingSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const { minisprintName, user, is_paid } = value;
    const id = incrementBookingCounter();
    const bookingPath = path.join(bookingsDir, `${id}.json`);

    const booking = { id, minisprintName, user, is_paid };
    writeJSON(bookingPath, booking);

    res.status(201).json({ message: 'Booking created successfully', id });
}

const editBookingSchema = Joi.object({
    id: Joi.number().required(),
    minisprintName: Joi.string(),
    user: Joi.object({
        name: Joi.string(),
        email: Joi.string().email()
    }),
    is_paid: Joi.boolean()
});

function handleEditBooking(req: NextApiRequest, res: NextApiResponse) {
    const { error, value } = editBookingSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const { id, ...updates } = value;
    const bookingPath = path.join(bookingsDir, `${id}.json`);

    if (!fs.existsSync(bookingPath)) {
        return res.status(404).json({ message: 'Booking not found' });
    }

    const booking = readJSON(bookingPath);
    const updatedBooking = { ...booking, ...updates };
    writeJSON(bookingPath, updatedBooking);

    res.status(200).json({ message: 'Booking updated successfully' });
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'GET':
            return handleGetBookings(req, res);
        case 'POST':
            return handleBookMinisprint(req, res);
        case 'PUT':
            return handleEditBooking(req, res);
        default:
            res.status(405).json({ message: 'Method not allowed' });
    }
}
