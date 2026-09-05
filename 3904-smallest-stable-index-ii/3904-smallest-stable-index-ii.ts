function firstStableIndex(nums: number[], k: number): number {
    let max = -Infinity;
    let min = Math.min(...nums);

    if(nums.length === 1 && nums[0] ===0) return 0; 

    for(let i = 0 ; i<nums.length; i++) {
        if(max < nums[i]) max = nums[i];
        if(nums[i] === min) min = null;
        if(!((max - k) <= nums[i])) continue;
        if(!min) min = Math.min(...nums.slice(i));
        if((max - min ) <= k) return i;
    }
    return -1;
};