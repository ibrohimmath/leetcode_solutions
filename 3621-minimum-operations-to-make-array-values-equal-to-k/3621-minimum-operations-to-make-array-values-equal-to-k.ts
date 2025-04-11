function minOperations(nums: number[], k: number): number {
    const counter: boolean[] = Array(101).fill(false);
    for (const item of nums) {
        if (item < k) {
            return -1;
        }
        counter[item] = true;
    }
    let ans: number = 0;
    for (let i = 99; i >= k; i--) {
        ans += Number(counter[i + 1]);
    }
    return ans;
};