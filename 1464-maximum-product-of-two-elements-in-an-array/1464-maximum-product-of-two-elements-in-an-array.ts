function maxProduct(nums: number[]): number {
    const numLength = nums.length;
    const possiblePair = [];
    let max = 0;

    for(let i = 0 ; i<numLength;i++) {
        const num = nums[i]
        for(let j= i+1; j<numLength;j++) {
            possiblePair.push([num , nums[j]])
        }
    }

    for(let pp of possiblePair) {
        const left = pp[0] 
        const right = pp[1]
        const productValue = (left-1)*(right-1)
        if(max<productValue) {
            max = productValue
        }
    }
    return max;
};