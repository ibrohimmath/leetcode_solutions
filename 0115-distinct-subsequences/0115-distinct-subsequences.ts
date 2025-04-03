function numDistinct(s: string, t: string): number {
    const m: number = s.length, n: number = t.length;

    const dp: number[][] = Array.from({length: m + 1}, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) {
        dp[i][0] = 1;
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i < j) {
                continue;
            }
            if (s[i] === t[j]) {
                dp[i + 1][j + 1] += dp[i][j];
                // console.log(i + 1, j + 1, dp[i + 1][j + 1]);
            }
            if (j != n - 1) {
                dp[i + 1][j + 1] += dp[i][j + 1];
                // console.log(i + 1, j + 1, dp[i + 1][j + 1]);
            }
        }
    }

    // console.log("answers");
    let ans: number = 0;
    for (let i = 0; i <= m; i++) {
        console.log(i, n, dp[i][n]);
        ans += dp[i][n];
    }

    return ans;
};