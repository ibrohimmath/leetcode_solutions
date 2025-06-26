function findPairs(nums: number[], k: number): number {
    nums.sort((x, y) => x - y);
    console.log(nums);

    const n: number = nums.length;
    let counter: number = 0;
    for (let l: number = 0, r: number = 0; r < n; r++) {
        while (l < r && nums[r] - nums[l] >= k) {
            if (nums[r] - nums[l] == k && (l == 0 || nums[l] != nums[l - 1])) {
                counter++;
                // console.log(r, l, nums[r], nums[l]);
            }
            l++;
        }
    }

    return counter;
};