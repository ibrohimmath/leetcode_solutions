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

function maxPathSum(root: TreeNode | null): number {
    function dfs(root: TreeNode | null) {
        if (root == null) {
            return -1e9; 
        }
        let leftMax = dfs(root.left); 
        let rightMax = dfs(root.right);
        mx = Math.max(mx, root.val + leftMax + rightMax); 
        const branch: number = root.val + Math.max(leftMax, rightMax, 0); 
        mx = Math.max(mx, branch);
        return branch;
    }
    let mx: number = -1e9;
    dfs(root);
    return mx;
};