function subsetsWithDup(nums: number[]): number[][] {
    const subSets : number[][] = [[]]
    const subsetSet = new Set();
    for(let num of nums.sort()) {
        const numberSubset = [];
        for(let ss of subSets) {
            const key = [...ss , num]
            if(!subsetSet.has(key.join('')))  {
                numberSubset.push(key)
                subsetSet.add(key.join(''))
            }
        }
        subSets.push(...numberSubset)
    }
    return [...new Set([...subSets])]
};