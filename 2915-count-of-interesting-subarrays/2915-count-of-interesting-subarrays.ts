function countInterestingSubarrays(nums: number[], modulo: number, k: number): number {
    const counter = new Map<number, number>();
    let pref: number = 0, ans: number = 0; 
    for (const num of nums) {
        pref = (pref + Number(num % modulo == k)) % modulo;
        if (pref % modulo == k) {
            ans++;
        }
        const l: number = (pref - k + modulo) % modulo; 
        const prev: number = counter.get(l);
        // console.log(pref, l);
        ans += prev ?? 0;
        counter.set(pref, (counter.get(pref) ?? 0) + 1);
    }
    return ans;
};