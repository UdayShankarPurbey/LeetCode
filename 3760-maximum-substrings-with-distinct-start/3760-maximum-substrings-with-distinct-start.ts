function maxDistinct(s: string): number {
    return new Set(s.split('')).size
};