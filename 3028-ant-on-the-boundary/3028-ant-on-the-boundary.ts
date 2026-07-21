function returnToBoundaryCount(nums: number[]): number {
    let numberOfCountAntAtBoundary = 0;
    let positionOfAnt = 0 ;
    for(let num of nums) {
        positionOfAnt+= num;
        if(positionOfAnt === 0) numberOfCountAntAtBoundary++;
    }

    return numberOfCountAntAtBoundary;
};