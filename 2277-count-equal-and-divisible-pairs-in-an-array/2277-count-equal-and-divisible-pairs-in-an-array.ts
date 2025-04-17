function gcd(a: number, b: number) {
    if (a == 0) {
        return b;
    }
    return gcd(b % a, a);
}

function countPairs(nums: number[], k: number): number {
    const n: number = nums.length; 
    const groupCounter: number[][] = Array.from({length: 101}, () => []); 
    for (let i = 0; i < n; i++) {
        groupCounter[nums[i]].push(gcd(i, k));
    }
    let ans: number = 0;
    for (let i = 0; i < 101; i++) {
        const counter: number[] = Array(101).fill(0);
        groupCounter[i].sort((a, b) => a - b);
        for (const [ind, item]  of groupCounter[i].entries()) {
            // console.log(i, ind, item);
            // if (item % k === 0) {
            //     ans += groupCounter[i].length - 1;; 
            //     continue;
            // } else {
            //     ans += counter[k / item];  
            // }
            // console.log(i, item, k / item, counter[k / item]);
            ans += counter[k / item];
            for (let j = 1; j * j <= item; j++) {
                if (item % j === 0) {
                    counter[j]++;
                    if (item / j != j) {
                        counter[item / j]++;
                    }
                }
            }
        }
        console.log("####");
    } 
    return ans;
};