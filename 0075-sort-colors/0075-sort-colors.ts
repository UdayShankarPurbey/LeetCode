/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    if(nums.length <= 1) return;
    const obj = {
        0 : 0,
        1 : 0 ,
        2 : 0
    }
    for(let i= 0 ; i<nums.length; i++){
        obj[nums[i]] = obj[nums[i]] + 1
    }
    
    const keys = Object.keys(obj).filter((key) => obj[key] >= 1);
    let sort = 0;

    for(let i= nums.length; i>0; i--){
        if( ((nums.length) - (obj[keys[keys.length-1]] + sort )) === i) {
            sort = sort + obj[keys[keys.length-1]];
            keys.pop();
            }
                nums[i - 1] = Number(keys[keys.length-1]);


    }

};