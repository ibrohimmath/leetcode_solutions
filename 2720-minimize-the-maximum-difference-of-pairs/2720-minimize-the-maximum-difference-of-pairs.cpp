#define each(i, a) for (auto &i : a)
#define all(a) (a).begin(), (a).end()

class Solution {
public:
    int minimizeMax(vector<int>& nums, int p) {
        const int n = nums.size();

        sort(all(nums)); 

        int l = 0, r = 1e9, mid; 
        while (l < r) {
            mid = (l + r) >> 1; 

            int counter = 0;
            vector<int> st(nums.rbegin(), nums.rend());
            
            for (int i = 0; i < n - 1; i++) {
                const int item = nums[i];
                const int nextItem = nums[i + 1];

                st.pop_back();

                if (nextItem - item <= mid) {
                    counter++;
                    st.pop_back();
                    i++;
                }
            }

            if (counter >= p) {
                r = mid;
            } else {
                l = mid + 1;
            } 
        }

        return r;
    }
};