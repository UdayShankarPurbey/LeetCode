/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let first_val = null
    let second_val = null;
    const remainder_num = {};

    for(let i = 0 ; i< nums.length ; i++) {
         if(remainder_num[nums[i]] !== undefined){
           first_val = remainder_num[nums[i]];
           second_val = i
           break;
         }
        const rem = target - nums[i];


        if(remainder_num[rem] === undefined) {
            remainder_num[rem] = i
        }
    }
    return first_val !== null && second_val !== null ? [first_val,second_val] : []
    
};