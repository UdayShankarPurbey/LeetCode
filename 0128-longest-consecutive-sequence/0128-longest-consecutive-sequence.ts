function longestConsecutive(nums: number[]): number {
     if (nums.length < 1) return 0;
    if (nums.length === 1) return 1;

    let maxLongestSequence = 1;
    let currentSequence = 1;
    nums.sort((a: number, b: number) => a - b);
    let left = 0;
    let right = 1;

    while (left < right) {
        if(nums[right] ===undefined) return maxLongestSequence;

        if (nums[left] === nums[right]) { right++; continue }

         if (nums[left] + 1 === nums[right]) {
            currentSequence++;
            left = right;
            right = right + 1;
        } else {
            maxLongestSequence = maxLongestSequence<currentSequence ?currentSequence: maxLongestSequence;
            currentSequence = 1;
            left = right;
            right = right + 1;
        }

        if(maxLongestSequence<currentSequence) {
            maxLongestSequence = currentSequence;
        }
    }


    return maxLongestSequence;
};