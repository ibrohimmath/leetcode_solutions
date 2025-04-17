function countGood(nums: number[], k: number): number {
    const n: number = nums.length;
    const counter = new Map<number, number>();
    let pairs: number = 0, ans = 0;
    for (let i = 0, l = 0; i < n; i++) {
        let times: number = counter.get(nums[i]) ?? 0; 
        pairs -= times * (times - 1) / 2;
        times++;
        counter.set(nums[i], times);
        pairs += times * (times - 1) / 2;
        // console.log(i, pairs);

        while (l <= i && pairs >= k) {
            let times: number = counter.get(nums[l]) ?? 0;
            pairs -= times * (times - 1) / 2;
            times--;
            counter.set(nums[l], times);
            pairs += times * (times - 1) / 2;
            l++; 
        }
        
        ans += l;
    }
    return ans;
};