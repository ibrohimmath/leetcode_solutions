/*
 * @lc app=leetcode id=871 lang=cpp
 *
 * [871] Minimum Number of Refueling Stops
 */

// @lc code=start
class Solution {
public:
    int minRefuelStops(int target, int startFuel, vector<vector<int>>& stations) {
        const int n = stations.size();

        if (startFuel >= target) {
            return 0;
        }
        if (startFuel < target && n == 0) {
            return -1;
        }

        priority_queue<int> pq; 
        long long pos = startFuel, counter = 0;
        for (int i = 0; pos < target; ++counter) {
            while (i < n && stations[i][0] <= pos) {
                pq.push(stations[i][1]);
                ++i;
            }
            if (pq.empty()) {
                return -1;
            }
            // cout << pos << " before\n";
            pos += pq.top(); pq.pop();
            // cout << pos << " after\n";
        }
        return (pos < target ? -1 : counter);
    }
};
// @lc code=end

