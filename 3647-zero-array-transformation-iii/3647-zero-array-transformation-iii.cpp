class Solution {
public:
    int maxRemoval(vector<int>& nums, vector<vector<int>>& queries) {
        const int n = nums.size();
        priority_queue<int> pq;
        vector<int> counter(n + 1); 
        sort(queries.begin(), queries.end(), [&](auto &x, auto &y) {
            return x[0] < y[0];
        }); 
        int operations = 0; 
        for (int i = 0, j = 0; i < n; i++) {
            operations += counter[i];
            while (j < queries.size() && queries[j][0] <= i) {
                pq.push(queries[j][1]); 
                j++;
            }
            while (pq.size() && pq.top() >= i && operations < nums[i]) {
                operations++;
                counter[pq.top() + 1]--;
                pq.pop();
            }
            if (operations < nums[i]) {
                return -1;
            }
        }
        return pq.size();
    }
};