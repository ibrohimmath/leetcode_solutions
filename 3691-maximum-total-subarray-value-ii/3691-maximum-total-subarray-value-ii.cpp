class Solution {
public:
    long long maxTotalValue(vector<int>& nums, int k) {
        const int n = size(nums);

        int twos[n + 1];
        twos[0] = twos[1] = 0;
        for (int i = 2; i <= n; ++i) {
            twos[i] = twos[i - 1] + (int)((i & (i - 1)) == 0);
        }

        const int m = twos[n];
        vector<vector<array<int, 2>>> sp(n, vector<array<int, 2>>(m + 1));

        for (int i = 0; i < n; ++i) sp[i][0] = {nums[i], nums[i]};
        for (int bit = 1; bit <= m; ++bit) {
            for (int i = 0; i + (1 << bit) - 1 < n; ++i) {
                sp[i][bit][0] = max(sp[i][bit - 1][0], sp[i + (1 << (bit - 1))][bit - 1][0]);
                sp[i][bit][1] = min(sp[i][bit - 1][1], sp[i + (1 << (bit - 1))][bit - 1][1]);
            }
        }

        auto minQuery = [&](int l, int r) {
            int len = r - l + 1;
            int mask = twos[len];

            return min(sp[l][mask][1], sp[r - (1 << mask) + 1][mask][1]);
        };

        auto maxQuery = [&](int l, int r) {
            int len = r - l + 1;
            int mask = twos[len];
            return max(sp[l][mask][0], sp[r - (1 << mask) + 1][mask][0]);
        };

        auto getQuery = [&](int l, int r) {
            return maxQuery(l, r) - minQuery(l, r);
        };

        priority_queue<tuple<long long, int, int>> pq;
        long long res = 0LL;

        for (int i = 0; i < n; ++i) pq.emplace(getQuery(i, n - 1), i, n - 1);

        for (int t = 0; t < k; ++t) {
            auto [val, l, r] = pq.top(); pq.pop();
            res += val;
            if (l < r) pq.emplace(getQuery(l, r - 1), l, r - 1);
        }

        return res;
    }
};