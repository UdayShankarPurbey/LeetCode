function findMissingElements(nums: number[]): number[] {
    if(nums.length < 1 ) return [];

    let min = nums[0];
    let max = 0;
    const elementPresenSet = new Set();
    const missingNumber = [];

    for(let i = 0 ;i < nums.length; i++) {
        const num = nums[i];
        elementPresenSet.add(num)
        if(max < num ) max = num;
        if(num < min) min = num
    }
    
    for(let i = min; i < max; i++ ) {
        if(!elementPresenSet.has(i)) {
            missingNumber.push(i)
        }
    }
    return missingNumber
    
};