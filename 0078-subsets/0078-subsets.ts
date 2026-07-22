function subsets(nums: number[]): number[][] {
    return generateAllSubsets(nums)
};


function generateAllSubsets(num: number[] , subsets :number [][] =[[]]): number[][] {
    const subsetLength : number = subsets.length
    const numLength : number = num.length;
    
    for(let i = 0 ; i< subsetLength ; i++) {
        subsets.push([...subsets[i] ,num[0]])
    }
        
    if(numLength > 1) return generateAllSubsets(num.slice(1) , subsets)
    
    return subsets
}
