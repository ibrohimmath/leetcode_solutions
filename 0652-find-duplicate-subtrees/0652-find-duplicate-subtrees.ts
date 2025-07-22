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

function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
    function dfs(node: TreeNode | null) {
        if (node == null) {
            return "";
        }

        const str: string = String(node.val) + "," + dfs(node.left) + "," + dfs(node.right);
        const val = memo.get(str) ?? []; 
        val.push(node);
        memo.set(str, val);

        return str;
    }

    const memo: Map<string, TreeNode[]> = new Map();
    dfs(root);

    const ans: TreeNode[] = [];
    for (const [_, value] of memo) {
        if (value.length > 1) {
            ans.push(value[0]);
        }
    }
    return ans;
};