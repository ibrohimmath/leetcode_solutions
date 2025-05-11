class Solution {
public:
    using int3 = pair<int, pair<int, int>>;

    int minTimeToReach(vector<vector<int>>& moveTime) {
        const int m = moveTime.size(), n = moveTime[0].size();
        int dx[] = {1, 0, -1, 0}, dy[] = {0, 1, 0, -1};
        priority_queue<int3, vector<int3>, greater<int3>> pq;
        vector<vector<int>> dp(m, vector<int>(n, 1e9 + 99));
        pq.push({0, {0, 0}});
        dp[0][0] = 0;
        while (!pq.empty()) {
            auto [dist, point] = pq.top();
            pq.pop();
            auto [x, y] = point;

            if (x == m - 1 && y == n - 1) {
                return dist;
            }

            for (int k = 0; k < 4; k++) {
                int xx = x + dx[k], yy = y + dy[k];
                if (xx < 0 || xx >= m || yy < 0 || yy >= n)
                    continue;
                int val = max(dp[x][y], moveTime[xx][yy]) + 1;
                if (val < dp[xx][yy]) {
                    dp[xx][yy] = val;
                    pq.push({dp[xx][yy], {xx, yy}});
                } 
            }
        }

        return dp[m - 1][n - 1];
    }
};