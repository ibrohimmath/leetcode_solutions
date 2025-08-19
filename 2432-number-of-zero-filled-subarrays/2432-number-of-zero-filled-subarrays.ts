function zeroFilledSubarray(nums: number[]): number {
    let zeros: number = 0;
    let ans: number = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            ans += (zeros + 1) * zeros / 2;
            zeros = 0;
        } else {
            zeros++;
        }
    }
    ans += (zeros + 1) * zeros / 2;
    return ans;
};