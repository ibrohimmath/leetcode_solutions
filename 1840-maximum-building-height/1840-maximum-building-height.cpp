class Solution {
public:
    int maxBuilding(int n, vector<vector<int>>& restrictions) {
        restrictions.push_back({1, 0});
        sort(restrictions.begin(), restrictions.end());
        if (restrictions.back()[0] != n)
            restrictions.push_back({n, n - 1});

        const int m = size(restrictions);
        int mx = 0;

        for (int i = 1; i < m; ++i) {
            restrictions[i][1] = min(
                restrictions[i][1],
                restrictions[i - 1][1] - restrictions[i - 1][0] + restrictions[i][0]
            );
            // mx = max(mx, (restrictions[i][0] - restrictions[i - 1][0] + restrictions[i][1] + restrictions[i - 1][1]) / 2);
            // x ... t ... y
            // t - h_x + t - h_y = y - x
            // 2 * t = y - x  + h_x + h_y
        }
        for (int i = m - 2; i >= 0; --i) {
            restrictions[i][1] = min(
                restrictions[i][1],
                restrictions[i + 1][1] - restrictions[i][0] + restrictions[i + 1][0]
            );
            mx = max(mx, (restrictions[i + 1][0] - restrictions[i][0] + restrictions[i + 1][1] + restrictions[i][1]) / 2);
            // x ... t ... y
            // t - h_x + t - h_y = y - x
            // 2 * t = y - x  + h_x + h_y 
        }

        return mx;
    }
};