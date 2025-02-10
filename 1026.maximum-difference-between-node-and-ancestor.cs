/*
 * @lc app=leetcode id=1026 lang=csharp
 *
 * [1026] Maximum Difference Between Node and Ancestor
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public int dfs(TreeNode root, int mn = (int)1e5, int mx = 0) {
        if (root == null) return 0;

        int diff = Math.Max(mn != (int)1e5 ? Math.Abs(mn - root.val) : 0, mx != 0 ? Math.Abs(mx - root.val) : 0);
        mn = Math.Min(mn, root.val);
        mx = Math.Max(mx, root.val);

        int lDiff = dfs(root.left, mn, mx); 
        int rDiff = dfs(root.right, mn, mx);

        return Math.Max(diff, Math.Max(lDiff, rDiff));
    }  

    public int MaxAncestorDiff(TreeNode root) {
       return dfs(root); 
    }
}
// @lc code=end

