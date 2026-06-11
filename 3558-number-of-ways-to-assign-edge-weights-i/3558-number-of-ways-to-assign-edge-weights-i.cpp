using ll = long long;
const static inline int MOD = 1e9 + 7;

inline ll binpow(ll a, int n) {
    if (a == 0) return 0;
    if (n == 0) return 1;
    ll res = 1LL;

    while (n > 0) {
        if (n & 1) res = res * a % MOD;
        a = a * a % MOD;
        n /= 2;
    }

    return res;
}

inline ll inv(ll a) {
    return binpow(a, MOD - 2);
}

class Solution {
    const static inline int N = 1e5 + 1;

    static inline ll fib[N];
    static inline ll invFib[N];
    static inline bitset<N> vis;

    vector<vector<int>> g;

    static inline bool init = []() {
        fib[0] = fib[1] = 1;
        for (int i = 2; i < N; ++i) fib[i] = fib[i - 1] * i % MOD; 

        invFib[0] = invFib[1] = 1;
        invFib[N - 1] = inv(fib[N - 1]);
        for (int i = N - 2; i >= 2; --i) invFib[i] = invFib[i + 1] * (i + 1) % MOD;
        return false;
    }();

public:
    int assignEdgeWeights(vector<vector<int>>& edges) {
        const int n = size(edges) + 1;

        vis.reset();
        
        g.resize(n + 1);
        for (const auto& lst : edges) {
            g[lst[0]].push_back(lst[1]);
            g[lst[1]].push_back(lst[0]);
        }

        int depth = 0;
        queue<int> q;
        q.push(1);
        for (; size(q) > 0; ++depth) {
            int sz = size(q);
            while (sz-- > 0) {
                int node = q.front(); q.pop();

                vis[node] = 1;

                for (const int& adjNode : g[node]) {
                    if (vis[adjNode]) continue;
                    q.push(adjNode);
                }
            }
        }

        depth--;
        ll res = 0;
        for (int odd = 1; odd <= depth; odd += 2) {
            res = (res + fib[depth] * invFib[odd] % MOD * invFib[depth - odd] % MOD) % MOD;
        }

        return res;
    }
};