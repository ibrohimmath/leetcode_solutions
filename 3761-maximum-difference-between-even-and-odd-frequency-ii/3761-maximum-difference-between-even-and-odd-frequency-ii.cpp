
class Solution {
public:
    int maxDifference(std::string s, int k) {
        const int n = s.size();
        
        // Initialize alphaList: 5 vectors for indices
        std::vector<std::vector<int>> alphaList(5);
        
        // Initialize mn: n x 5 x 5 x 4 vector, filled with 1e9
        std::vector<std::vector<std::vector<std::vector<int>>>> mn(
            n, std::vector<std::vector<std::vector<int>>>(
                5, std::vector<std::vector<int>>(
                    5, std::vector<int>(4, 1e9))));
        
        int mx = -1e9;
        for (int i = 0; i < n; i++) {
            // Convert character to code (assuming '0' to '4')
            const int code = s[i] - '0';
            alphaList[code].push_back(i);
            
            for (int x = 0; x < 5; x++) {
                for (int y = 0; y < 5; y++) {
                    if (i > 0) {
                        for (int bit = 0; bit < 4; bit++) {
                            mn[i][x][y][bit] = mn[i - 1][x][y][bit];
                        }
                    }
                    
                    const int xVal = alphaList[x].size();
                    const int yVal = alphaList[y].size();
                    
                    const int xBit = xVal % 2;
                    const int yBit = yVal % 2;
                    const int bit = xBit * 2 + yBit;
                    
                    if (x == y) continue;
                    
                    mn[i][x][y][bit] = std::min(mn[i][x][y][bit], xVal - yVal);
                    
                    if (i >= k - 1 && bit == 2 && yVal > 0) {
                        mx = std::max(mx, xVal - yVal);
                    }
                    
                    if (i < k) continue;
                    
                    if (alphaList[x].size() >= 1 && alphaList[y].size() >= 2) {
                        const int l = alphaList[x].back() - 1;
                        const int r = alphaList[y][alphaList[y].size() - 2] - 1;
                        if (l < 0 || r < 0) continue;
                        int ind = std::min(l, r);
                        if (i - ind < k) {
                            ind = i - k;
                        }
                        mx = std::max(mx, xVal - yVal - mn[ind][x][y][(bit + 2) % 4]);
                    }
                }
            }
        }
        
        return mx == -1e9 ? -1 : mx;
    }
};