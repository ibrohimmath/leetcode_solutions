class Solution {
public:
    int numberOfPaths(vector<vector<int>>& grid, int k) {
        const int MOD = 1e9 + 7; 
        int M = size(grid), N = size(grid[0]);
        vector<vector<vector<int>>> dp(M, vector<vector<int>> (N, vector<int> (k)));
        dp[0][0][grid[0][0] % k] = 1;
        for (int i = 0; i < M; i++) {
            for (int j = 0; j < N; j++) {
                if (i == 0 && j == 0) continue;
                if (i > 0) {
                    for (int z = 0; z < k; z++) {
                       dp[i][j][z] = static_cast<int>((0LL + dp[i][j][z] + dp[i - 1][j][(z - grid[i][j] % k + k) % k]) % MOD); 
                    }
                }
                if (j > 0) {
                    for (int z = 0; z < k; z++) {
                        dp[i][j][z] = static_cast<int>((0LL + dp[i][j][z] + dp[i][j - 1][(z - grid[i][j] % k + k) % k]) % MOD);        
                    }
                }
            }
        }

        return dp[M - 1][N - 1][0];
    }
};