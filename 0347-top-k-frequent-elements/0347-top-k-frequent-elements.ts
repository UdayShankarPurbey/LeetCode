function topKFrequent(nums: number[], k: number): number[] {
    const numWithFrequency = new Map();

    for(let num of nums) {
        if(numWithFrequency.has(num)) {
            numWithFrequency.set(num , numWithFrequency.get(num) + 1)
        } else {
            numWithFrequency.set(num , 1)
        }
    }
    return [...numWithFrequency].sort((a : number[] , b : number[]) =>  b[1] - a[1]).slice(0,k).map((a : number[] ) => a[0])
};