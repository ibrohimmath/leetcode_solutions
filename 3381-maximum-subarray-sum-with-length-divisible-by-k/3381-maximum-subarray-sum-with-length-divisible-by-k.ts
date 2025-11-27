function maxSubarraySum(nums: number[], k: number): number {
    const N: number = nums.length;
    let mx: number = -1e18, pref: number = 0;

    const kMin: number[] = Array(k).fill(Infinity);
    kMin[k - 1] = 0;

    for (let i = 0; i < N; i++) {
        pref += nums[i];
        mx = Math.max(mx, pref - kMin[i % k]);
        kMin[i % k] = Math.min(kMin[i % k], pref);
    }
    
    return mx;
};