function leftRightDifference(nums: number[]): number[] {
    const numsLength : number = nums.length;
    const leftSum : number[] = new Array(numsLength).fill(0);
    const rightSum : number[] = new Array(numsLength).fill(0);
    const differenceArray : number[] = [];

    for(let i = 1 ; i< numsLength; i++) {
        const num = nums[i - 1];
        leftSum[i] = leftSum[i-1] + num;
    }

    for(let i = (numsLength -1 ) ; i > 0; i--) {
        const num = nums[i];
        rightSum[i -1] = rightSum[i] + num;
    }

    for(let i = 0 ; i<numsLength ; i++ ) {
        const left = leftSum[i];
        const right = rightSum[i]
        const ans = Math.abs(left - right)
        differenceArray.push(ans)
    }

    return differenceArray
};