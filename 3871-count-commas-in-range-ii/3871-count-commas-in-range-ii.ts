function countCommas(n: number): number {
    if (n < 999) return 0;
    let commaCount = 0;

    if (n >= 999999999999) {
        commaCount = commaCount + 4 * (n - 999999999999);
        n = 999999999999;
    }

    if (n >= 999999999) {
        commaCount = commaCount + 3 * (n - 999999999);
        n = 999999999;
    }

    if (n >= 999999) {
        commaCount = commaCount + 2 * (n - 999999);
        n = 999999;
    }

    if (n >= 999) {
        commaCount = commaCount + 1 * (n - 999);
        n = 999;
    }

    return commaCount;
};