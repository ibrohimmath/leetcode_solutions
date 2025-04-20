class Solution {
public:
    int maxResult(vector<int>& nums, int k) {
        int n = nums.size();
        deque<int> dq;
        vector<int> dp(n);
        dp[0] = nums[0];
        dq.push_back(0);

        for (int i = 1; i < n; ++i) {
            // remove out-of-range indices
            while (!dq.empty() && dq.front() < i - k) {
                dq.pop_front();
            }
            // dp[i] is best of last k results + nums[i]
            dp[i] = dp[dq.front()] + nums[i];

            // maintain decreasing order in dp[]
            while (!dq.empty() && dp[dq.back()] < dp[i]) {
                dq.pop_back();
            }

            dq.push_back(i);
        }
        return dp[n - 1];
    }
};
