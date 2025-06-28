#define all(x) (x).begin(), (x).end()
#define each(item, a) for (auto &item : a)

class Solution {
public:
    using tpl2 = pair<int, int>;

    vector<int> maxSubsequence(vector<int>& nums, int k) {
        priority_queue<tpl2, vector<tpl2>, greater<tpl2>> pq;
        for (int i = 0; i < nums.size(); i++) {
            if (pq.size() < k) {
                pq.emplace(nums[i], i);
            } else if (pq.top().first < nums[i]) {
                pq.pop();
                pq.emplace(nums[i], i);
            }
        }

        vector<tpl2> pairList;
        while (!pq.empty()) {
            pairList.push_back(pq.top());
            pq.pop();
        }
        sort(all(pairList), [&](tpl2 &a, tpl2 &b) {
            return a.second < b.second;
        });
        
        vector<int> ans;
        each(item, pairList) {
            ans.push_back(item.first);
        }

        return ans;
    }
};