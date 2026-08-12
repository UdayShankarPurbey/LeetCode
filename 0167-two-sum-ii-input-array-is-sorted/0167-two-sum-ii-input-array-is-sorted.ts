function twoSum(numbers: number[], target: number): number[] {
    const remainderMap = new Map();
    for(let i = 0; i<numbers.length; i++) {
        const num = numbers[i];
        if(remainderMap.has(num)) return[remainderMap.get(num),i+1];

        remainderMap.set((target - num) , i+1);
    }

    return [];
}