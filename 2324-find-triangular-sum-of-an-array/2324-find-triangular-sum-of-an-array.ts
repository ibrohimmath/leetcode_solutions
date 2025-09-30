function triangularSum(nums: number[]): number {
    let len: number = nums.length;
    while (len > 1) {
        for (let i = 1; i < len; i++)
            nums[i - 1] = (nums[i - 1] + nums[i]) % 10;
        len--;
    }
    return nums[0];
};