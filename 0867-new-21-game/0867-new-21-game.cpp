class Solution {
public:
    double new21Game(int n, int k, int maxPts) {
        if (k == 0 || k + maxPts - 1 <= n) return 1;

        vector<double> dp(n + 1);
        dp[0] = 1;
        double wind = 1, ans = 0;

        for (int l = 0, i = 1; i <= n; i++) {
            dp[i] = wind / maxPts;

            if (i < k)
                wind += dp[i];
            else
                ans += dp[i];

            if (i >= maxPts) {
                wind -= dp[l++];
            }
        }

        return ans;
    }
};