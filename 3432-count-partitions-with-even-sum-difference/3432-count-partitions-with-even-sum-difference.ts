function countPartitions(nums: number[]): number {
    let sumOfLeft = 0;
    let sumOfRight = nums.reduce((a : number,b : number) => a+b , 0);
    let countOfEvenPartion = 0;

    for(let i = 0; i< (nums.length - 1) ; i++) {
        const num = nums[i];
        sumOfLeft += num;
        sumOfRight -= num;
        if((sumOfLeft - sumOfRight) % 2 === 0 ) countOfEvenPartion++;
    }
    return countOfEvenPartion
};