class Solution {
    long long sequenceCost(int mx, int len) {
        int mn = max(0, mx - len + 1);
        return 1LL * max(0, len - mx) + 1LL * (mx - mn + 1) * (mn + mx) / 2;
    }

public:
    int maxValue(int n, int index, int maxSum) {
        ++index;
        int l = 1, r = maxSum, mid;
        while (l < r) {
            mid = (l + r + 1) / 2;
            long long cost = sequenceCost(mid, index) + sequenceCost(mid, n + 1 - index) - mid;
            // cout << sequenceCost(mid, index) << ' ' << sequenceCost(mid, n + 1 - index) << ' ' << mid << ' ' << cost << "\n";
            if (cost <= maxSum) l = mid;
            else r = mid - 1;
        }
        return l;
    }
};