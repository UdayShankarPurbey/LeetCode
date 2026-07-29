function subarraySum(nums: number[]): number {
    const sum = new Array(nums.length + 1).fill(0);

    for(let i = 0 ; i<nums.length; i++) {
        const num = nums[i];
        sum[i+1] = sum[i] + num
    }

    let totalSum = 0;

    for(let i = 0 ; i<nums.length; i++) {
        const start = Math.max(0, i - nums[i]);
        totalSum += sum[i + 1] -  sum[start];
    }

    return totalSum;
};