class Solution {
    constexpr static inline long long INF = 1e18;
public:
    long long maxSubarraySum(vector<int>& nums, int k) {
        long long dp0 = -INF, dp1 = -INF, dp2 = -INF, dp3 = -INF;
        long long res = -INF;
        for (const int& item : nums) {
            long long x = 1LL * item * k, y = item / k;
            dp3 = max({dp0, dp1, dp2, dp3}) + item;
            dp1 = max({dp0 + x, dp1 + x, x});
            dp2 = max({dp0 + y, dp2 + y, y});
            dp0 = max(dp0 + item, 0LL + item);
            res = max({res, dp0, dp1, dp2, dp3});
        }
        return res;
    }
};