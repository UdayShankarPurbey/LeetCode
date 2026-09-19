function isStrictlyPalindromic(n: number): boolean {
    for(let i = 2; i<=(n - 2); i++) {
        if(n.toString(i) !== n.toString(i).split('').reverse().join('')) {
            return false;
        }
    }    
    return true;
};