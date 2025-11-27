class Solution {
public:
    int minimumOneBitOperations(int n) {
        int ans = 0;
        for (int i = 0; i < 31; ++i) {
            if (n & (1 << i)) {
                ans = (1 << (i + 1)) - 1 - ans;
            }
        }
        return ans;
    }
};