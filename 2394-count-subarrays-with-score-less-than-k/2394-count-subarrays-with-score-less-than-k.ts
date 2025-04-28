function countSubarrays(nums: number[], k: number): number {
    const n: number = nums.length;
    let ans: number = 0;
    for (let i = 0, l = 0, sum = 0; i < n; i++) {
        sum += nums[i];
        while (l <= i && sum * (i - l + 1) >= k) {
            sum -= nums[l];
            l++;
        }
        ans += (i - l + 1);
    }
    return ans;
};