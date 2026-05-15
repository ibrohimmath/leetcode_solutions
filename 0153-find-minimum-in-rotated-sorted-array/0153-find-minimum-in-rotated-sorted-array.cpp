class Solution {
public:
    int findMin(vector<int>& nums) {
        int l = 0, r = (int)size(nums) - 1, mid; 
        if (nums[l] <= nums[r]) return nums[l];
        while (l < r) {
            // cout << l << ' ' << r << "\n";
            mid = (l + r) / 2;
            if (nums[mid] < nums[0]) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }
        return nums[r];
    }
};