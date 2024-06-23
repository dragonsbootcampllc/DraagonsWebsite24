export function validateEventDetails(event: any, method = "POST") {
    const requiredFields = ['name', 'startDate', 'webinarDate', 'speakers', 'dragonsMembersNumber', 'seatNumber', 'reservedTickets', 'duration', 'minPrice', 'maxPrice'];
    for (const field of requiredFields) {
        if (method !== "PUT" && field === 'reservedTickets') continue;

        if (!event[field]) {
            return `Missing required field: ${field}`;
        }
    }
    if (new Date(event.startDate) >= new Date(event.webinarDate)) {
        return "Start date must be before the webinar date";
    }
    if (event.minPrice >= event.maxPrice) {
        return "Minimum price must be less than maximum price";
    }
    return null;
}

export function calculateSpan (minPrice: number, maxPrice: number, startDate: string, endDate: string, duration: number) {
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    const totalDuration = (end - start) / (1000 * 60 * 60 * 24);
    const span = (maxPrice - minPrice) / ((totalDuration - duration) / duration);
    return span;
}
