function findKDistantIndices(nums: number[], key: number, k: number): number[] {
    const n: number = nums.length;
    const ans: number[] = [];

    let bound: number = -1; 
    for (let i = 0; i < n; i++) {
        if (nums[i] == key) {
            for (let j = Math.max(0, bound, i - k); j <= Math.min(n - 1, i + k); j++) {
                ans.push(j);
            }
            bound = Math.max(bound, i + k + 1);
        }
    }

    return ans;
};