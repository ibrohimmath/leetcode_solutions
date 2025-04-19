function jump(nums: number[]): number {
    const n: number = nums.length;
    if (n == 1) {
        return 0;
    }
    for (let i = 0; i < n; i++) {
        nums[i] = Math.max(i + nums[i], (i > 0 ? nums[i - 1] : 0));
    }
    let counter: number = 0;
    for (let i = 0; i < n - 1; counter++) {
        // console.log(i, nums[i]);
        i = nums[i];
        // if (i >= n - 1) {
        //     break;
        // }
        // counter++;
    }
    return counter;
};  