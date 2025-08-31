class Solution {
public:
    vector<vector<vector<vector<int>>>> dp;
    vector<pair<int, int>> dirs;
    int m, n;

    template<typename ...Args>
    void println(Args ...args) {
        ((cout << args << ' '), ...) << "\n";
    }

    bool isValid(int i, int j) {
        return (i >= 0 && i < m && j >= 0 && j < n);
    }

    bool areValidValues(int val, int nextVal) {
        int total = val * 10 + nextVal;
        return (total == 12 || total == 20 || total == 2);
    }

    int solve(int i, int j, int dir, int hasTurned, vector<vector<int>>& grid) {
        if (!isValid(i, j)) return 0;

        if (dp[i][j][dir][hasTurned] != -1) {
            return dp[i][j][dir][hasTurned];
        }
        
        int val = grid[i][j];
        // println(i, j, val);

        int next_i = i + dirs[dir].first, 
            next_j = j + dirs[dir].second;
        int nextVal = isValid(next_i, next_j) ? grid[next_i][next_j] : 0;

        if (isValid(next_i, next_j) && areValidValues(val, nextVal)) {
            // println(i, j, val, next_i, next_j, nextVal, "same direction");
            dp[i][j][dir][hasTurned] = max({
                dp[i][j][dir][hasTurned], 
                solve(next_i, next_j, dir, hasTurned, grid) + 1 
            });
        }

        if (hasTurned == 0) {
            int nextDir = (dir + 1) % 4;
            int next_i = i + dirs[nextDir].first;
            int next_j = j + dirs[nextDir].second;
            int nextVal = isValid(next_i, next_j) ? grid[next_i][next_j] : 0;

            if (isValid(next_i, next_j) && areValidValues(val, nextVal)) {
                // println(i, j, val, next_i, next_j, nextVal, "has turned");
                dp[i][j][dir][hasTurned] = max({
                    dp[i][j][dir][hasTurned], 
                    solve(next_i, next_j, nextDir, 1, grid) + 1 
                });
            }
        }

        return dp[i][j][dir][hasTurned] = max(dp[i][j][dir][hasTurned], 1);
    } 

    int lenOfVDiagonal(vector<vector<int>>& grid) {
        dirs.assign({{-1, 1}, {1, 1}, {1, -1}, {-1, -1}});
        m = grid.size();
        n = grid[0].size();

        dp.assign(m,  
            vector<vector<vector<int>>>(n, 
                vector<vector<int>>(4,  
                    vector<int>(2, -1)))); 

        int mx = 0;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] != 1) continue;
                for (int dir = 0; dir < 4; dir++) {
                    mx = max(mx, solve(i, j, dir, 0, grid));
                }
            }
        }

        return mx;
    }
};