function isZeroArray(nums: number[], queries: number[][]): boolean {
    const n: number = nums.length;
    let diff: number[] = Array(n).fill(0);
    diff[0] = nums[0];
    for (let i = 1; i < n; i++) {
        diff[i] = nums[i] - nums[i - 1];
    }
    for (const pair of queries) {
        diff[pair[0]]--;
        if (pair[1] + 1 < n) diff[pair[1] + 1]++;
    }
    for (let i = 1; i < n; i++) {
        diff[i] += diff[i - 1];
    }
    for (const num of diff) {
        if (num > 0) {
            return false;
        }
    }
    return true;
};