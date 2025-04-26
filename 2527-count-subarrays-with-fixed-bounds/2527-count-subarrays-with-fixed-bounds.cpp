class Solution {
public:
    long long countSubarrays(vector<int>& nums, int minK, int maxK) {
        multiset<int> st;
        map<int, set<int>> mp;

        auto add = [&](int x, int ind) {
            st.insert(x);

            mp[x].insert(ind);
        };

        auto pop = [&](int ind) {
            int elem = nums[ind];
            if (st.find(elem) != st.end()) {
                st.erase(st.find(elem));
            }

            if (mp.find(elem) == mp.end()) return;
            if (mp[elem].find(ind) != mp[elem].end()) {
                mp[elem].erase(ind);
            }
            if (mp[elem].size() == 0) {
                mp.erase(elem);
            }
        };

        const int n = nums.size();
        long long ans = 0;
        for (int i = 0, l = 0; i < n; i++) {
            add(nums[i], i);
            
            while (l <= i && (*st.begin() < minK || *st.rbegin() > maxK)) {
                pop(l);
                l++;
            }

            if (*st.begin() == minK && *st.rbegin() == maxK) {
                int mx = min(*mp[minK].rbegin(), *mp[maxK].rbegin());
                // cout << i << ' ' << l << ' ' << mx << "\n"; 
                ans += max(0, mx - l + 1); 
            }
        }

        return ans;
    }
};