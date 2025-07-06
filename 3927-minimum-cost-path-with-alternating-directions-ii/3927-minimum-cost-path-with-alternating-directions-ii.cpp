class Solution {
public:
    long long minCost(int m, int n, vector<vector<int>>& waitCost) {
        vector<vector< pair<long long, int> >> dp(m, vector<pair<long long, int>>(n, {LONG_LONG_MAX, 0}));
        dp[0][0] = {1LL, 1};
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (i == 0 && j == 0) continue; 

                if (i > 0) {
                    auto [cost, t] = dp[i - 1][j];
                    long long newCost = cost + (t % 2 == 0 ? waitCost[i - 1][j] : 0) + 1LL * (i + 1) * (j + 1);
                    if (newCost < dp[i][j].first) {
                        dp[i][j] = {newCost, t + 2 - (t & 1)};
                    }
                }
                if (j > 0) {
                    auto [cost, t] = dp[i][j - 1];
                    long long newCost = cost + (t % 2 == 0 ? waitCost[i][j - 1] : 0) + 1LL * (i + 1) * (j + 1);
                    if (newCost < dp[i][j].first) {
                        dp[i][j] = {newCost, t + 2 - (t & 1)};
                    }
                } 

                // cout << i << ' ' << j << ' ' << dp[i][j].first << ' ' << dp[i][j].second << "\n";
            }
        } 

        return dp.back().back().first;
    }
};