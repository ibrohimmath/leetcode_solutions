class Solution {
public:
    int maximumLength(vector<int>& nums) {
        const int n = size(nums);
        sort(nums.begin(), nums.end());

        unordered_map<int, int> counter;
        for (const int& item : nums) {
            counter[item]++;
            // cout << item << ' ' << counter[item] << "\n";
        }

        int mx = 1;
        for (int i = 0; i < n; ++i) {
            if (counter[nums[i]] < 2) continue;

            long long item = nums[i];
            int res = 0;

            while (counter[item] >= 2) {
                // cout << item << ' ';
                res += 2;
                counter[item] -= 2;
                if (item >= 1e9) break;
                item = 1LL * item * item;
            }
            // cout << "\n";

            if (counter[item] == 1) {
                mx = max(mx, res + 1);
            }
            else {
                mx = max(mx, res - 1);
            }
        }

        return mx;
    }
};