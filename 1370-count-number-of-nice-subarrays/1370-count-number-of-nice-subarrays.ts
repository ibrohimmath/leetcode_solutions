function numberOfSubarrays(nums: number[], k: number): number {
    const counter = Array<number>(5e5 + 1).fill(0);
    let oddPref: number = 0, ans: number = 0;
    for (const num of nums) {
        oddPref += (num & 1);
        if (oddPref == k) ans++;
        if (oddPref >= k) ans += counter[oddPref - k];
        counter[oddPref]++;
    }
    return ans;
};