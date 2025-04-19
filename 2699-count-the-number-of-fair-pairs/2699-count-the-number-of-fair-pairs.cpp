class Solution {
public:
    long long countValid(vector<int> &nums, int target) {
        const int n = nums.size();
        long long ans = 0; 
        for (int i = n - 1, l = 0; i >= 0; i--) {
            while (l < i && nums[l] + nums[i] <= target) {
                l++;
            }
            ans += min(l, i);
            // cout << l << ' ' << i << ' ' << target << "\n"; 
        }
        // cout << "###\n";
        return ans;
    }
    long long countFairPairs(vector<int> &nums, int lower, int upper) {
        sort(nums.begin(), nums.end()); 
        // for (const int &item : nums) {
        //     cout << item << " ";
        // }
        // cout << "\n";
        return countValid(nums, upper) - countValid(nums, lower - 1);
    }
};