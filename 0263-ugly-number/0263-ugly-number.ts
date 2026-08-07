function isUgly(n: number): boolean {
    if(n <1) return false;
    let num = n;
    while(num >= 2) {
        if(num%2 === 0) num /= 2;
        else if(num%3 === 0) num /= 3;
        else if(num%5 === 0) num /= 5;
        else return false;
    }
    return true;
    
};