function maximumLength(nums: number[], k: number): number {
    const n: number = nums.length;

    const dp: number[][] = Array.from({length: k}, () => Array(k).fill(0));
    const has: boolean[] = Array(k).fill(false); 

    let ans: number = 0;
    for (const item of nums) {
        for (let i = 0; i < k; i++) {
            const prev = (i - item % k + k) % k;
            if (has[prev]) {
                dp[i][item % k] = (dp[i][prev % k] == 0 ? 2 : dp[i][prev % k] + 1);
                // console.log(i, item, dp[i][item % k]);
                ans = Math.max(ans, dp[i][item % k]);
            }
        }
        has[item % k] = true;
    }

    return ans;
};