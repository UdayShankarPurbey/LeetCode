function twoSum(numbers: number[], target: number): number[] {
    const remainerTarget = new Map();

    for(let i = 0 ; i<numbers.length; i++) {
        const num = numbers[i];
        const reaminder = target - num 
        if(remainerTarget.has(num)) {
            return [(remainerTarget.get(num) + 1),(i + 1)]
        }
        else {
            remainerTarget.set(reaminder , i)
        }
    }
};