/*
 * @lc app=leetcode id=1043 lang=csharp
 *
 * [1043] Partition Array for Maximum Sum
 */

// @lc code=start
public class Solution {
    public int MaxSumAfterPartitioning(int[] arr, int k) {
        int n = arr.Length;

        int[] dp = new int[n];
        for (int i = 0; i < n; ++i) {
            for (int j = i, mx = 0; j >= Math.Max(i - k + 1, 0); --j) {
                mx = Math.Max(mx, arr[j]);
                dp[i] = Math.Max(dp[i], (j > 0 ? dp[j - 1] : 0) + (i - j + 1) * mx);
            }
        }

        // for (int i = 0; i < n; ++i) {
        //     Console.WriteLine(dp[i]);
        // }
        return dp[n - 1];
    }
}
// @lc code=end

