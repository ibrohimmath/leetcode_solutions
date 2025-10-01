function minScoreTriangulation(values: number[]): number {
    const n: number = values.length;
    const dp: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

    for (let d = 2; d < n; d++) {
        for (let i = 0; i + d < n; i++) {
            const j: number = i + d;

            let mn: number = 1e18;
            for (let k = i + 1; k < j; k++) {
                mn = Math.min(mn, dp[i][k] + dp[k][j] + values[i] * values[j] * values[k]);
            }
            dp[i][j] = mn;
        }
    }

    return dp[0][n - 1];
};