function numberOfPoints(nums: number[][]): number {
    const points = new Set()
    for(let num of nums) {
        let left = num[0];
        let right = num[1];

        while(left <= right) {
            points.add(left);
            left++;
            points.add(right) 
            right--;
        }
    }
    return points.size;
    
};