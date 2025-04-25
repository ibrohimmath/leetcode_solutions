function subarraysDivByK(nums: number[], k: number): number {
    const memo = new Map<number, number>(); 

    let pref: number = 0, ans: number = 0;
    for (const item of nums) {
        pref += item;
        while (pref < 0) pref += k;
        pref %= k;
        const val: number = memo.get(pref) ?? 0;
        ans += val; 
        if (pref % k == 0) {
            ans++;
        }
        memo.set(pref, val + 1);
    }

    return ans;
};