class Solution {
public:
    int repeatedNTimes(vector<int>& nums) {
        const int n = (int)size(nums);

        for (int i = 0; i < n; ++i) {
            for (int k = 1; k <= 3; ++k) {
                if (i + k < n && nums[i] == nums[i + k]) return nums[i];
            }
        }
    
        return -1;
    }
};