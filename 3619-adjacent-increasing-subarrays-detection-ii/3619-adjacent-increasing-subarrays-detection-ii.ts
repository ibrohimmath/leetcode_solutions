function maxIncreasingSubarrays(nums: number[]): number {
    let mx: number = 1;
    let prev: number = 1, curr: number = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            curr++;
        } else {
            prev = curr;
            curr = 1;
        }
        mx = Math.max(mx, Math.min(prev, curr), (curr >> 1)); 
    }

    return mx;
};