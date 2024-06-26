export function calculateSpan (minPrice: number, maxPrice: number, startDate: string, endDate: string, duration: number) {
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    const totalDuration = (end - start) / (1000 * 60 * 60 * 24);
    const span = (maxPrice - minPrice) / ((totalDuration - duration) / duration);
    return span;
}
