/*
 * @lc app=leetcode id=45 lang=cpp
 *
 * [45] Jump Game II
 */

// @lc code=start
class Solution {
public:
    int jump(vector<int>& nums) {
        const int n = nums.size();
        priority_queue<int> pq; 
        for (int counter = 1, pos = nums[0], i = 1; i < n; ++counter) {
            if (pos >= n - 1) {
                return counter; 
            }
            while (i < n && i < pos) {
                pq.push(nums[i]);
                ++i;
            } 
            if (pq.size()) {
                pos += pq.top(); pq.pop(); 
            }
        }
    }
};
// @lc code=end

