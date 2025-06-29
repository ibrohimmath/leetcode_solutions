class Solution {
public:
    int MOD = 1e9 + 7;

    int binpow(int a, int n) {
        if (a == 0) {
            return 0;
        }
        if (n == 0) {
            return 1;
        }
        int res = 1;
        while(n > 0) {
            if (n & 1) {
                res = int(1LL * res * a % MOD);
            }
            a = int(1LL * a * a % MOD);
            n >>= 1;
        }
        return res;
    }
    
    int numSubseq(vector<int>& nums, int target) {
        sort(nums.begin(), nums.end());
        const int n = nums.size();
        int ans = 0;
        for (int l = 0, r = n - 1; r >= 1; r--) {
            while (l <= r && nums[l] + nums[r] <= target) {
                ans = (ans + binpow(2, r - l)) % MOD;
                l++;
            }
        }
        // for (int i = 0; i < n; i++) {
        //    ans = (ans + (2 * nums[i] <= target)) % MOD;
        // }
        return ans;
    }
};