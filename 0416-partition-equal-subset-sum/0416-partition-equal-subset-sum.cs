public class Solution {
    public bool CanPartition(int[] nums) {
        int sm = 0; 
        foreach (int item in nums) {
            sm += item;
        }
        if ((sm & 1) == 1) {
            return false;
        } 

        bool[] dp = new bool[sm + 1];
        dp[0] = true;
        foreach (int item in nums) {
            for (int j = sm; j >= 0; j--) {
                if (dp[j]) {
                    dp[j + item] = true;
                }
            }
        }
        return dp[sm / 2];
    }
}