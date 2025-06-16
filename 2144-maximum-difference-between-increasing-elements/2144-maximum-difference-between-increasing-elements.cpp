class Solution {
public:
    int maximumDifference(vector<int>& nums) {
        const int n = nums.size();
        int ans = -1;
        int mn = INT_MAX;
        for (int &item : nums) {
            if (mn != INT_MAX && item > mn) {
                ans = max(ans, item - mn);
            }
            mn = min(mn, item);
        }
        return ans;
    }
};