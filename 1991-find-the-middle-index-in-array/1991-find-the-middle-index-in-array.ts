function findMiddleIndex(nums: number[]): number {
    const numLength =  nums.length;
    const sumFromLeft = new Array(numLength + 1).fill(0);
    const sumFromRight = new Array(numLength + 1).fill(0);


    for(let i = 0 ; i< numLength ; i++) {
        const num = nums[i]
        sumFromLeft[i+1] = sumFromLeft[i] + num;
    }

    for(let i = (numLength)  ; i > 0 ; i--) {
        const num = nums[i -1 ]
        sumFromRight[i -1] = sumFromRight[i] + num;
    }

    for(let i = 0 ; i< numLength ; i++) {
        if(sumFromLeft[i+1] == sumFromRight[i]) return i
    }

    return -1
};