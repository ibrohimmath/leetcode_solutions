function countCompleteSubarrays(nums: number[]): number {
    const n: number = nums.length;
    const LEN: number = new Set(nums).size;
    const counter = Array<number>(2001).fill(0);
    let len: number = 0, ans: number = 0;
    for (let i = 0, l = 0; i < n; i++) {
        if (++counter[nums[i]] === 1) {
            len++;
        }
        if (len === LEN) {
            while (l < i && counter[nums[l]] > 1) {
                counter[nums[l]]--;
                l++;
            }
            // console.log(i, l);
            ans += l + 1; 
        }
    }
    return ans;
};