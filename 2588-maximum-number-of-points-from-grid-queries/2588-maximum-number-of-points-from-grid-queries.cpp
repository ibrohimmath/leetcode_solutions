class Solution {
public:
    vector<int> maxPoints(vector<vector<int>>& grid, vector<int>& queries) {
        vector<pair<int, int>> pairQueries;
        for (int i = 0; i < queries.size(); i++) {
            pairQueries.emplace_back(queries[i], i);
        }
        sort(pairQueries.begin(), pairQueries.end());
        
        int dx[] = {1, -1, 0, 0};
        int dy[] = {0, 0, 1, -1};

        int q = queries.size();
        int m = grid.size();
        int n = grid[0].size();
        vector<vector<char>> vis(m + 1, vector<char>(n + 1)); 
        
        const int N = 1e6 + 1;
        vector<int> memo(N);
        vector<int> ans(q);

        vector<pair<int, int>> prev{{0, 0}};
        for (const auto &[query, ind] : pairQueries) {
            if (memo[query]) continue;

            queue<pair<int, int>> q;
            for (const auto &pairs : prev) {
                q.push(pairs);
            }
            prev.clear();

            while (q.size()) {
                auto [x, y] = q.front(); q.pop(); 
                if (vis[x][y]) continue;
                if (grid[x][y] >= query) {
                    prev.emplace_back(x, y);
                    continue;
                }
                vis[x][y] = true;

                memo[query]++;
                for (int k = 0; k < 4; k++) {
                    int xx = x + dx[k];
                    int yy = y + dy[k];
                    if (xx < 0 || xx >= m || yy < 0 || yy >= n || vis[xx][yy]) continue;
                    q.emplace(xx, yy);
                }
            }
        }

        for (int i = 1; i < N; i++) {
            memo[i] += memo[i - 1];
        }
        for (auto &[query, ind] : pairQueries) {
            ans[ind] += memo[query];
        }

        return ans;
    }
};