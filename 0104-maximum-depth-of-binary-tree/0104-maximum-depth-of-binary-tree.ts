/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {
    return getNextNodevalue(root , 0);
};

function getNextNodevalue(root: TreeNode | null ,maxDepth) {
    if(root === null ) return maxDepth;

    maxDepth += 1;
    
    if(root.left === null &&  root.right === null) return maxDepth;

    return Math.max(
        getNextNodevalue(root.left , maxDepth),
        getNextNodevalue(root.right , maxDepth)
    );

}