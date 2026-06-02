#define all(x) (x).begin(), (x).end()

class Solution {
public:
    int earliestFinishTime(
        vector<int>& landStartTime, 
        vector<int>& landDuration, 
        vector<int>& waterStartTime, 
        vector<int>& waterDuration
    ) {
        const int m = size(landStartTime), n = size(waterStartTime);

        vector<int> landInd(m), waterInd(n);

        iota(landInd.begin(), landInd.end(), 0);
        iota(waterInd.begin(), waterInd.end(), 0);

        sort(all(landInd), [&](int x, int y) {
            int stX = landStartTime[x], stY = landStartTime[y];
            int endX = stX + landDuration[x], endY = stY + landDuration[y];
            if (endX != endY) return endX < endY;
            return stX < stY; 
        });

        sort(all(waterInd), [&](int x, int y) {
            int stX = waterStartTime[x], stY = waterStartTime[y];
            int endX = stX + waterDuration[x], endY = stY + waterDuration[y]; 
            if (endX != endY) return endX < endY;
            return stX < stY; 
        });

        const int INF = 1e9;
        int waterEndMin = INF,
            landEndMin = INF,
            mn = INF;

        for (int x = 0, y = 0; x < m || y < n; ) {
            if (x < m && y >= n) {
                int i = landInd[x];

                int landStart = landStartTime[i];
                int landEnd = landStart + landDuration[i]; 
    
                landEndMin = min(landEndMin, landEnd);
    
                if (waterEndMin > landStart)
                    mn = min(mn, waterEndMin + landDuration[i]);
                else
                    mn = min(mn, landEnd);

                x++; 
                continue;
            } else if (y < n && x >= m) {
                int j = waterInd[y];

                int waterStart = waterStartTime[j];
                int waterEnd = waterStart + waterDuration[j];
    
                waterEndMin = min(waterEndMin, waterEnd);
    
                if (landEndMin > waterStart)
                    mn = min(mn, landEndMin + waterDuration[j]);
                else
                    mn = min(mn, waterEnd);

                y++;
                continue;
            }

            int i = landInd[x], j = waterInd[y];

            int landStart = landStartTime[i], 
                waterStart = waterStartTime[j];

            int landEnd = landStart + landDuration[i], 
                waterEnd = waterStart + waterDuration[j];
            
            landEndMin = min(landEndMin, landEnd);
            waterEndMin = min(waterEndMin, waterEnd);

            if (waterEndMin > landStart)
                mn = min(mn, waterEndMin + landDuration[i]);
            else
                mn = min(mn, landEnd);
            if (landEndMin > waterStart)
                mn = min(mn, landEndMin + waterDuration[j]);
            else
                mn = min(mn, waterEnd);

            if (landEnd < waterEnd) ++x;
            else ++y;
        }

        return mn;
    }
};