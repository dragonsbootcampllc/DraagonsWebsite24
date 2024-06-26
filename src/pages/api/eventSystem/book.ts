import { NextApiRequest, NextApiResponse } from 'next';
import { readJSON, writeJSON } from '@/pages/api/utils/utils';
import path from 'path';
import fs from 'fs';
import Joi from 'joi';
import crypto from 'crypto';

const eventsDir = path.join(process.cwd(), 'db', 'events');
const bookingsDir = path.join(eventsDir, 'bookings');

interface User {
    name?: string,
    email?: string
}

const incrementBookingCounter = () => {
    const configPath = path.join(bookingsDir, 'config.json');
    const config = readJSON(configPath);
    config.bookingCounter += 1;
    writeJSON(configPath, config);
    return config.bookingCounter;
};

const bookingSchema = Joi.object({
    eventName: Joi.string().required(),
    user: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required()
    }).required(),
    is_paid: Joi.boolean().default(false)
});

const editBookingSchema = Joi.object({
    id: Joi.number().required(),
    eventName: Joi.string(),
    user: Joi.object({
        name: Joi.string(),
        email: Joi.string().email()
    }),
    is_paid: Joi.boolean()
});

const generateTicketNumber = (existingTickets: string[]) => {
    let ticketNumber;
    do {
        ticketNumber = crypto.randomBytes(6).toString('hex').toUpperCase();
    } while (existingTickets.includes(ticketNumber));
    return ticketNumber;
};

function handleGetBookings(req: NextApiRequest, res: NextApiResponse) {
    const { eventName, user, id } = req.query;
    let bookings = fs.readdirSync(bookingsDir).map(file => {
        const filePath = path.join(bookingsDir, file);
        return readJSON(filePath);
    });

    if (eventName) {
        bookings = bookings.filter(booking => booking.eventName === eventName);
    }

    if (user) {
        const { name, email }: Partial<User> = typeof user === 'string' ? JSON.parse(user) : user;
        bookings = bookings.filter(booking =>
            (name && booking.user.name === name) ||
            (email && booking.user.email === email)
        );
    }

    if (id) {
        bookings = bookings.filter(booking => booking.id === parseInt(id as string, 10));
    }

    res.status(200).json(bookings);
}

function handleBookTicket(req: NextApiRequest, res: NextApiResponse) {
    const { error, value } = bookingSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const { eventName, user, is_paid } = value;
    const eventPath = path.join(eventsDir, `${eventName}.json`);

    if (!fs.existsSync(eventPath)) {
        return res.status(404).json({ message: 'Event not found' });
    }

    const event = readJSON(eventPath);
    if (event.reservedTickets >= event.seatNumber) {
        return res.status(400).json({ message: 'No more seats available' });
    }

    let ticketNumber = "";

    if (is_paid) {
        ticketNumber = generateTicketNumber(event.ticketIds);
        event.ticketIds.push(ticketNumber);
        event.reservedTickets += 1;
        writeJSON(eventPath, event);
    }

    const id = incrementBookingCounter();
    const bookingPath = path.join(bookingsDir, `${id}.json`);

    const booking = { id, eventName, user, is_paid, ticketNumber, usageCount: 0, usedIps: [] };
    writeJSON(bookingPath, booking);

    res.status(201).json({ message: 'Booking created successfully', id });
}

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
    const eventPath = path.join(eventsDir, `${booking.eventName}.json`);
    const event = readJSON(eventPath);

    let updatedBooking = { ...booking, ...updates, eventName: booking.eventName };

    if (updates.hasOwnProperty('is_paid')) {
        if (updates.is_paid) {
            if (event.reservedTickets >= event.seatNumber) {
                return res.status(400).json({ message: 'No more seats available' });
            }

            const ticketNumber = generateTicketNumber(event.ticketIds);
            event.ticketIds.push(ticketNumber);
            event.reservedTickets += 1;
            writeJSON(eventPath, event);

            updatedBooking = { ...updatedBooking, ticketNumber };
        } else if (booking.ticketNumber) {
            event.ticketIds = event.ticketIds.filter((ticketId: string) => booking.ticketNumber !== ticketId);
            event.reservedTickets -= 1;
            writeJSON(eventPath, event);

            updatedBooking = { ...updatedBooking, ticketNumber: "" };
        }
    }

    writeJSON(bookingPath, updatedBooking);
    res.status(200).json({ message: 'Booking updated successfully' });
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'GET':
            return handleGetBookings(req, res);
        case 'POST':
            return handleBookTicket(req, res);
        case 'PUT':
            return handleEditBooking(req, res);
        default:
            res.status(405).json({ message: 'Method not allowed' });
    }
}
