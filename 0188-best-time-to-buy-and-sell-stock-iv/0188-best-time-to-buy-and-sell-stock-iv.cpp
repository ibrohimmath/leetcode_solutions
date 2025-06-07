using pair2 = pair<int, int>;

class Solution {
public:
    int maxProfit(int k, vector<int>& prices) {
        const int n = prices.size();
        
        // dp[i][s][b] -> ith day s sells b boughts
        // dp[i][s][b] = 
        // 0 -> buys, 1 -> sells  
        
        int mx = 0;
        k *= 2;
        vector<pair2> dp(k + 1, {-1e9, -1e9});
        for (int i = 0; i < n; i++) {
            vector<pair2> prev(dp.begin(), dp.end());
            for (int j = 1; j <= min(i + 1, k); j++) {
                dp[j].first = max(prev[j].first, (j > 1 ? prev[j - 1].second : 0) - prices[i]);
                if (j > 1) dp[j].second = max(prev[j].second, prev[j - 1].first + prices[i]); 
                mx = max({mx, dp[j].first, dp[j].second});
                // cout << i << ' ' << j << ' ' << dp[j].first << ' ' << dp[j].second << "\n"; 
            }
        }
        return mx;
    }
};