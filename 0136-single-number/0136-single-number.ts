function singleNumber(nums: number[]): number {
    let newNum : number | undefined ;
    nums.forEach((x : number) => newNum =x^newNum)
    return newNum == undefined ? 0 : Number(newNum)
};
