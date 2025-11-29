function minOperations(nums: number[], k: number): number {
    return nums.reduce((acc, item) => acc + item, 0) % k;
};