class Solution {
    static inline int tens[6] = {1, 10, 100, 1000, 10000, 100000};
public:
    vector<int> separateDigits(vector<int>& nums) {
        const int N = 4e5;
        vector<int> ans;
        ans.reserve(N);

        for (int i = (int)size(nums) - 1; i >= 0; --i) {
            int item = nums[i];
            while (item > 0) {
                ans.push_back(item % 10);
                item /= 10;
            }
        }
        
        reverse(ans.begin(), ans.end());

        return ans;
    }
};