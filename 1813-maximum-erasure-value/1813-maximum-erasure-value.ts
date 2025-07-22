function maximumUniqueSubarray(nums: number[]): number {
    const n: number = nums.length;

    const pref: number[] = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        pref[i] = (i > 0 ? pref[i - 1] : 0) + nums[i];
    }

    let mx: number = 0;
    const pos: number[] = Array(1e4 + 1).fill(-1);
    for (let i = 0, l = 0; i < n; i++) {
        while (l < i && pos[nums[i]] != -1) {
            pos[nums[l]] = -1;
            l++;
        }
        pos[nums[i]] = i;         
        // console.log(l, i, pref[i] - pref[l] + nums[l]);
        mx = Math.max(mx, pref[i] - pref[l] + nums[l]); 
    }

    return mx;
};