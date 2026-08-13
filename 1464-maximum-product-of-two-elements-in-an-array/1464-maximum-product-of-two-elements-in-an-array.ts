function maxProduct(nums: number[]): number { 
    if(nums.length<2) return 0;
    nums.sort((a : number , b: number) => b - a);
    return (nums[0] - 1) * (nums[1] -1);
}