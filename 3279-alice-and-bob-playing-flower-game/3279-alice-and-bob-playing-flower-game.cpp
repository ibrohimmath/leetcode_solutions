class Solution {
public:
    long long flowerGame(int n, int m) {
        return 1LL * (n >> 1) * ((m + 1) >> 1) + 1LL * ((n + 1) >> 1) * (m >> 1);
    }
};