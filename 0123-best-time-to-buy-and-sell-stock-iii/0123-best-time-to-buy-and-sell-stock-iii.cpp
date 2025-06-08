class Solution {
public:
    int n;
    vector<vector<vector<int>>> dp;

    int sol(vector<int> &prices, int i, int cnt, int buy = 1) {
        if (i >= n || cnt <= 0 && buy) return 0;

        if (dp[i][cnt][buy] != INT_MIN) return dp[i][cnt][buy];

        int skip = sol(prices, i + 1, cnt, buy);
        int trade = (buy ? -1 : 1) * prices[i] + sol(prices, i + 1, cnt - buy, 1 - buy); 
        return dp[i][cnt][buy] = max(skip, trade);
    }
    
    int maxProfit(vector<int>& prices) {
        n = prices.size();
        dp.resize(n, vector<vector<int>>(3, vector<int>(2, INT_MIN)));

        return sol(prices, 0, 2, 1); 
    }
};