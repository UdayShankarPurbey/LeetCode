function reverse(x: number): number {
    const safeInt32 = (2 ** 31);
    if (x < -safeInt32 || x > safeInt32 - 1) return 0;    
    const reversedVal = (x >= 0) ? Number(x.toString().split('').reverse().join('')) : (Number((x * -1 ).toString().split('').reverse().join('')) * -1)
    return (reversedVal < -safeInt32 || reversedVal > safeInt32 - 1) ? 0 : reversedVal
};