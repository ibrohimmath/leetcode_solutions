function maxAdjacentDistance(nums: number[]): number {
    const n: number = nums.length;
    let mx: number = -1e9;
    for (let i = 0; i < n; i++) {
        mx = Math.max(mx, Math.abs(nums[i] - nums[(i + 1) % n]));
    }
    return mx;
};