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

function deepestLeavesSum(root: TreeNode | null): number {
    if (root == null) {
        return 0;
    }
    
    let ql: number = 0; 
    const q: TreeNode[] = [root];

    let deepestLeavesSum: number = 0;
    while (ql < q.length) {
        let len: number = q.length - ql;

        let levelSum: number = 0;
        while (len-- > 0) {
            const node: TreeNode = q[ql++];
            levelSum += node.val;
            if (node.left) q.push(node.left); 
            if (node.right) q.push(node.right);
        }

        deepestLeavesSum = levelSum;
    }

    return deepestLeavesSum;
};