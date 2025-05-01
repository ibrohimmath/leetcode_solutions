function countSubarrays(nums: number[], k: number): number {
    const n: number = nums.length;
    const mx = Math.max(...nums);
    let ans: number = 0, maxCount: number = 0; 
    for (let i = 0, l = 0; i < n; i++) {
        if (nums[i] == mx) {
            maxCount++;
        }
        while (l < i && (maxCount > k || maxCount == k && nums[l] != mx)) {
            if (nums[l] == mx) {
                maxCount--;
            } 
            l++;
        }
        if (maxCount == k) {
            ans += l + 1;
            // console.log(i, l);
        }
    }
    return ans;
};