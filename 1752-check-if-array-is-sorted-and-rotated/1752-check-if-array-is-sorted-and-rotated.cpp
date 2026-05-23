class Solution {
public:
    bool check(vector<int>& nums) {
        const int n = (int)size(nums);
        int seq = 1, mx = 0;
        for (int i = 0, t = 2 * n; t > 0; --t, i = (i + 1) % n) {
            if (t > 1 && nums[i] <= nums[(i + 1) % n]) {
                mx = max(mx, ++seq);
            } else {
                seq = 1;
            }
        }
        // cout << mx;
        return mx >= n;
    }
};