function pivotInteger(n: number): number {
    const sumofNFromLeft = new Array(n+1).fill(0);
    const sumofNFromRight = new Array(n+1).fill(0);

    for(let i = 1 ; i<= n ; i++) {
        sumofNFromLeft[i] = sumofNFromLeft[i-1] + i 
    }

    for(let i = n ; i> 0; i--) {
        sumofNFromRight[ i - 1] = sumofNFromRight[i] + i
    }

    for(let i = 0 ; i<(n+1); i++) {
        if(sumofNFromLeft[i+1] === sumofNFromRight[i]) return (i + 1)
    }

    return -1;
};