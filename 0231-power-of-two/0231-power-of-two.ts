function isPowerOfTwo(n: number): boolean {
    if(n <= 0) return false;
    if(n=== 1) return true;
    
    for(let i = 1; i<n; i++) {
        if(Math.pow(2 , i) === n) return true;
        if(Math.pow(2 , i) > n) return false;
    }    
};