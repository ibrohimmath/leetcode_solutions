function countTriples(n: number): number {
    let ans: number = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            if (Math.floor(Math.sqrt(i * i - j * j)) == Math.sqrt(i * i - j * j)) {
                ans++;
            }
        }
    }
    return ans;
};