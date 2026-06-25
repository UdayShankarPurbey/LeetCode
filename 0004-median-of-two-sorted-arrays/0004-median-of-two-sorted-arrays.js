/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const mergedArray = [...nums1 , ...nums2].sort((a,b) => a-b);
    const sizeOfMergedArray = mergedArray.length;
    let median = null;
    if(sizeOfMergedArray%2 == 0) {
        median = ( mergedArray[Math.floor(sizeOfMergedArray/2) - 1] + mergedArray[(Math.floor(sizeOfMergedArray/2) )] ) / 2;
    } else {
        median = mergedArray[Math.floor(sizeOfMergedArray/2)]
    }
    return median;
};