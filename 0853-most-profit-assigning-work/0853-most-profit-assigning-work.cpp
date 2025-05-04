class Solution {
public:
    int maxProfitAssignment(vector<int>& difficulty, vector<int>& profit, vector<int>& worker) {
        const int n = difficulty.size();
        vector<pair<int, int>> pairs;
        for (int i = 0; i < n; i++) {
            pairs.emplace_back(difficulty[i], profit[i]);
        }
        sort(pairs.begin(), pairs.end());
        for (int i = 1; i < n; i++) {
            pairs[i].second = max(pairs[i].second, pairs[i - 1].second);
        }
        int totalProfit = 0;
        for (int skill : worker) {
            auto it = upper_bound(pairs.begin(), pairs.end(), make_pair(skill, INT_MAX));
            if (it != pairs.begin()) {
                totalProfit += prev(it)->second;
            }
        }
        return totalProfit;
    }
};