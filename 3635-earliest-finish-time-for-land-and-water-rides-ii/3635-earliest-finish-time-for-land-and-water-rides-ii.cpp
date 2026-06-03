class Solution {
public:
    int earliestFinishTime(vector<int>& landStartTime, vector<int>& landDuration, vector<int>& waterStartTime, vector<int>& waterDuration) {
        const int INF = 1e9, 
            m = size(landStartTime), 
            n = size(waterStartTime);

        int landEndMin = INF, waterEndMin = INF, mn = INF;
        for (int i = 0; i < max(m, n); ++i) {
            if (i < m) landEndMin = min(landEndMin, landStartTime[i] + landDuration[i]);
            if (i < n) waterEndMin = min(waterEndMin, waterStartTime[i] + waterDuration[i]);
        }

        for (int i = 0; i < max(m, n); ++i) {
            if (i < m) {
                mn = min(mn, max(waterEndMin, landStartTime[i]) + landDuration[i]);
            }
            if (i < n) {
                mn = min(mn, max(landEndMin, waterStartTime[i]) + waterDuration[i]);
            }
        } 

        return mn;
    }
};