function addDigits(num: number): number {
    if(num<10) return num;
    return addDigits(num.toString().split('').reduce((a,b) => Number(a)+Number(b) , 0))
};