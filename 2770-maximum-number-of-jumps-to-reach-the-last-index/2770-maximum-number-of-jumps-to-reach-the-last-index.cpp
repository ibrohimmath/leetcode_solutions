int dp[1001];

class Solution {
public:
    static int maximumJumps(vector<int>& nums, int target) {
        int n = size(nums);

        fill(dp, dp + 1001, -1);
        dp[0] = 0;

         
        for (int i = 0; i < n - 1; ++i) {
            for (int j = i + 1; j < n; ++j) {
                if (abs(nums[j] - nums[i]) <= target && dp[i] != -1) {
                    dp[j] = max(dp[j], dp[i] + 1);
                }
            }
        }

        return dp[n - 1];
    }
};

auto init = []() {
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    return 0;
};
