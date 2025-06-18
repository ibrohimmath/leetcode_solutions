function divideArray(nums: number[], k: number): number[][] {
    const n: number = nums.length;
    nums.sort((x, y) => x - y);

    const ans: number[][] = [];
    for (let i = 0; i < n; i += 3) {
        if (nums[i + 2] - nums[i] > k) {
            return [];
        }
        ans.push([nums[i], nums[i + 1], nums[i + 2]]);
    }

    return ans;
};