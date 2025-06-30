function findLHS(nums: number[]): number {
    nums.sort((x, y) => x - y);
    let mx: number = 0;
    let prevCount: number = 0, count: number = 1;
    for (let i = 0; i < nums.length; i++) {
        if (i > 0) {
            if (nums[i] == nums[i - 1]) {
                count++;
            } else {
                if (nums[i] == nums[i - 1] + 1) {
                    prevCount = count;
                } else {
                    prevCount = 0; 
                }
                count = 1;
            }
        }
        if (prevCount > 0) {
            // console.log(i, nums[i], count, prevCount);
            mx = Math.max(mx, prevCount + count);
        }
    }

    return mx;
};
