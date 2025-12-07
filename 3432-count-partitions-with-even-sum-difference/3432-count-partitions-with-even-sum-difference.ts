function countPartitions(nums: number[]): number {
    const sm: number = nums.reduce((acc, item) => acc + item, 0);
    let pref: number = 0, ans: number = 0;
    for (const item of nums) {
        pref += item;
        if (pref != sm) {
            ans += Number(Math.abs(2 * pref - sm) % 2 == 0);
        }
    }
    return ans;
};