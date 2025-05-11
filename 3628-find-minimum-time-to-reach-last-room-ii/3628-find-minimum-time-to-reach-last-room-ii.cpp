class Solution {
public:
    using int4 = array<int, 4>; 

    int minTimeToReach(vector<vector<int>>& moveTime) {
        int dx[] = {1, -1, 0, 0}, dy[] = {0, 0, 1, -1};
        const int m = moveTime.size(), n = moveTime[0].size();

        vector<vector<int>> dp(m, vector<int>(n, 1e9 + 2e4));
        dp[0][0] = 0;

        // item -> [dist, step, x, y] 
        priority_queue<int4, vector<int4>, greater<int4>> pq;
        pq.push(int4{0, 1, 0, 0});

        while (!pq.empty()) {
            int4 lst = pq.top(); pq.pop();
            int dist = lst[0], step = lst[1], 
                x = lst[2], y = lst[3]; 

            if (x == m - 1 && y == n - 1) {
                return dist;
            }
            
            for (int k = 0; k < 4; k++) {
               int xx = x + dx[k], yy = y + dy[k]; 
               if (xx < 0 || xx >= m || yy < 0 || yy >= n) continue;
               int val = max(dp[x][y], moveTime[xx][yy]) + step;
               if (val < dp[xx][yy]) {
                    dp[xx][yy] = val;
                    pq.push(int4{val, 3 - step, xx, yy});
               }
            }
        }
        return dp[m - 1][n - 1];
    }
};