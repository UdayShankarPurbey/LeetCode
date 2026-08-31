function countDigitOccurrences(nums: number[], digit: number): number {
    let digitCount = 0;
    const digitStr = digit.toString();
    for(let char of nums.join('')) {
        if(char === digitStr) digitCount++;
    }
    return digitCount;
};