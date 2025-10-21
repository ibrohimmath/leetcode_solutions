function maxFrequency(nums: number[], k: number, numOperations: number): number {
    nums.sort((x, y) => x - y);
    const n: number = nums.length;

    const suff: number[] = Array(n).fill(0);
    for (let i = n - 1, r = n - 1; i >= 0; i--) {
        while (r > i && nums[r] - nums[i] > k) {
            r--;
        }
        if (i + 1 < n && nums[i] == nums[i + 1]) continue;
        suff[i] = r - i;
        console.log(i, suff[i]);
    }

    let mx: number = 1;

    for (let i = 0, l = 0; i < n; i++) {
        while (l < i && nums[i] - nums[l] > k) {
            l++;
        }
        const pref: number = i - l;

        let r: number = i;
        while (r < n && nums[i] == nums[r]) r++;
        r--;        

        mx = Math.max(mx, r - i + 1 + Math.min(suff[r] + pref, numOperations));

        i = r;
    }

    for (let i = 0, l = 0; i < n; i++) {
        while (l < i && nums[i] - nums[l] > 2 * k) {
            l++;
        }
        mx = Math.max(mx, Math.min(i - l + 1, numOperations));
    }

    return mx;
};