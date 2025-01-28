/*
 * @lc app=leetcode id=995 lang=typescript
 *
 * [995] Minimum Number of K Consecutive Bit Flips
 */

// @lc code=start
function minKBitFlips(nums: number[], k: number): number {
    const n: number = nums.length;
    let minFlips: number = 0;
    for (let l = 0; l <= n - k; l++) {
        console.log(l);
        let isValid: boolean = true;
        for (let j = l; j < l + k; j++) {
            if (nums[j] === 0) {
                isValid = false;
                break;
            }
        }
        if (isValid) {
            l = l + k - 1;
            continue;
        }
        let mn: number = 1e9;
        for (let j = l; j < l + k; j++) {
            nums[j] = 1 - nums[j];
            if (!nums[j]) {
                mn = Math.min(mn, j);
            }
        }
        minFlips++;
        console.log(nums);
        if (l !== 1e9) l = mn - 1;
    }
    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            return -1;
        }
    }
    return minFlips++;
};
// @lc code=end

