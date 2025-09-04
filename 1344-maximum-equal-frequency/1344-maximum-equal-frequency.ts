function maxEqualFreq(nums: number[]): number {
    /* when |freqMap| = 2
     * x and y keys exist and must also |x - y| = 1
     * assume x < y
     * freq[x] == 1 || freq[y] == 1 || Math.abs(freq[x] - freq[y]) == 1
     * in that case we've found one of such prefixes
     */

    const N: number = 1e5 + 1; const freqMap: Map<number, number> = new Map();   
    const set = (key: number, val: number) =>  {
        freqMap.set(key, val);
    };

    const get = (key: number) => {
        return freqMap.get(key) ?? 0;
    };

    const decrease = (key: number) => {
        const val: number = get(key);
        if (val <= 1) {
            // console.log("delete");
            freqMap.delete(key);
            return;
        }
        set(key, val - 1); 
    };

    const increase = (key: number) => {
        const val: number = get(key);
        set(key, val + 1);
    };

    const counter: number[] = Array(N).fill(0);

    let ans: number = 0;
    for (let i = 0; i < nums.length; i++) {
        const prevFreq: number = counter[nums[i]];
        if (prevFreq > 0) {
           decrease(prevFreq); 
        }
        increase(++counter[nums[i]]);

        if (freqMap.size == 2) {
            const freq = Array.from(freqMap.keys());
            const vals = Array.from(freqMap.values()); 

            if (freq[0] == freq[1] + 1 && vals[0] == 1 ||
                freq[1] == freq[0] + 1 && vals[1] == 1) {
                ans = Math.max(ans, i + 1);
            } else if (freq[0] == 1 && vals[0] == 1 ||
                freq[1] == 1 && vals[1] == 1) {
                ans = Math.max(ans, i + 1);
            }
        } else if (freqMap.size == 1) {
            const freq = Array.from(freqMap.keys());
            const vals = Array.from(freqMap.values()); 

            if (freq[0] == 1 || vals[0] == 1) {
                ans = Math.max(ans, i + 1);
            }
        }
    }

    return ans;
};