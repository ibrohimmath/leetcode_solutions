function partitionArray(nums: number[], k: number): number {
    const N: number = 1e5 + 1;
    const n: number = nums.length;

    const counter: number[] = Array(N).fill(0);
    for (const item of nums) {
        counter[item]++;
    } 

    let ans: number = 0, mn: number = -1; 
    for (let i = 0; i < N; i++) {
        if (counter[i] == 0) continue;
        if (mn == -1 || i - mn > k) {
            ans++;
            mn = i;
        }
    }

    return ans;
};