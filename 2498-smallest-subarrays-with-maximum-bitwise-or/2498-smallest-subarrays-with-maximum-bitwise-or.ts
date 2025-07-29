function smallestSubarrays(nums: number[]): number[] {
    function increase(counter: number[], num: number) {
        let ans: number = 0;
        for (let i = 0; i < N; i++) {
            if ((num >> i) & 1) {
                counter[i]++;
            }
            if (counter[i]) {
                ans += (1 << i);
            }
        }
        return ans;
    }
    
    function decrease(counter: number[], num: number) {
        let ans: number = 0;
        for (let i = 0; i < N; i++) {
            if ((num >> i) & 1) {
                counter[i]--;
            }
            if (counter[i]) {
                ans += (1 << i);
            }
        }
        return ans;
    }

    const N: number = 31;
    const counter: number[] = Array(N).fill(0);
    const ans: number[] = Array.from({length: nums.length}, (_, ind) => nums.length - ind);

    for (let i = nums.length - 1, r = nums.length - 1; i >= 0; i--) {
        let maxOr: number = increase(counter, nums[i]);
        while (i < r) {
            const tempOr: number = decrease(counter, nums[r]);
            if (tempOr < maxOr) {
                increase(counter, nums[r]);
                break;
            }
            r--;
        }
        ans[i] = r - i + 1;
    }

    return ans;
};