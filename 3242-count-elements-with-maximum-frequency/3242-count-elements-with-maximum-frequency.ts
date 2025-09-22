function maxFrequencyElements(nums: number[]): number {
    let mx: number = 0;
    let ans: number = 0;
    const counter: number[]= Array(101).fill(0);
    
    for (const item of nums) {
        counter[item]++;
        if (counter[item] > mx) {
            ans = 1;
            mx = counter[item];
        } else if (counter[item] == mx) {
            ans++;
        }
    }

   return ans * mx;
};