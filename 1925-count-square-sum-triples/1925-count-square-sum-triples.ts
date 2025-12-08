function countTriples(n: number): number {
    function gcd(x: number, y: number) {
        if (y == 0) return x;
        return gcd(y, x % y);
    }

    let ans: number = 0;
    for (let i = 1; i * i <= n; i++) {
        for (let j = 1 + (i % 2); j < i; j += 2) {
            if (gcd(i, j) != 1) continue;
            const c: number = i * i + j * j;
            if (c > n) continue;
            ans += 2 * Math.floor(n / c);
        }
    }
    return ans;
};