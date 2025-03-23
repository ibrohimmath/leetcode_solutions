using ll = long long;
const int MOD = 1e9 + 7;
const ll INF = 1e18;

class Solution {
public:
    int countPaths(int n, vector<vector<int>>& roads) {
        vector<vector<pair<int, int>>> g(n);
        for (const vector<int> &lst : roads) {
            int x = lst[0], y = lst[1], w = lst[2]; 
            g[y].emplace_back(x, w);
            g[x].emplace_back(y, w);
        }

        vector<ll> dist(n, INF);
        vector<ll> dp(n, 0);
        dist[0] = 0; 
        dp[0] = 1;

        priority_queue<pair<ll, int>, vector<pair<ll, int>>, greater<pair<ll, int>>> pq;
        pq.emplace(0, 0);
        while (!pq.empty()) {
            auto [distance, node] = pq.top(); pq.pop();

            for (const auto &[adjNode, w] : g[node]) {
                if (distance + w < dist[adjNode]) {
                    dist[adjNode] = distance + w;
                    dp[adjNode] = dp[node];
                    pq.emplace(dist[adjNode], adjNode);
                } else if (distance + w == dist[adjNode]) {
                    dp[adjNode] = (dp[adjNode] + dp[node]) % MOD;
                }
            }
        }

        return (int)dp.back();
    }
};