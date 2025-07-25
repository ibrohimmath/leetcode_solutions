function maxSum(nums: number[]): number {
    nums.sort((x, y) => x - y);
    let last: number = Infinity;
    let mx: number = nums.at(-1), mxSub: number = 0;
    for (const num of nums) {
        if (last == Infinity || last != num) {
            mxSub = Math.max(num, num + mxSub);
            mx = Math.max(mx, mxSub);

            last = num;
        }
    }

    return mx;
};