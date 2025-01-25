/*
 * @lc app=leetcode id=239 lang=typescript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
function maxSlidingWindow(nums: number[], k: number): number[] {
    const n: number = nums.length;
    const dec: number[] = [];
    const ans: number[] = [];
    for (let i = 0; i < k; i++) {
        while (dec.length && nums[dec.at(-1)] < nums[i]) {
           dec.pop(); 
        }
        dec.push(i);
    }
    ans.push(nums[dec[0]]);
    for (let i = k; i < n; i++) {
        while (dec.length && nums[dec.at(-1)] < nums[i]) {
            dec.pop();
        }
        dec.push(i);
        if (dec[0] <= i - k) {
            dec.shift();
        }
        ans.push(nums[dec[0]]);
    }
    return ans;
};
// @lc code=end

