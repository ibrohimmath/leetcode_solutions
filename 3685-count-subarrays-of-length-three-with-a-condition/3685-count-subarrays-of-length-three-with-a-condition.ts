function countSubarrays(nums: number[]): number {
    let counter: number = 0;
    for (let i = 2; i < nums.length; i++) {
        counter += Number((nums[i - 2] + nums[i]) * 2 == nums[i - 1]);
    }
    return counter;
};