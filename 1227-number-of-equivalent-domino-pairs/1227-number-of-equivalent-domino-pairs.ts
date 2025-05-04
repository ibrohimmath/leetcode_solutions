function numEquivDominoPairs(dominoes: number[][]): number {
    const counter = Array(100).fill(0);
    let ans: number = 0;
    for (const [a, b] of dominoes) {
        const c: number = 10 * a + b, d: number = 10 * b + a;  
        ans += counter[c];
        if (a != b) ans += counter[d];
        counter[c]++;
    }
    return ans;
};