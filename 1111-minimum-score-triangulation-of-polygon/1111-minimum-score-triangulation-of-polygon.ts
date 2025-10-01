function minScoreTriangulation(values: number[]): number {
    const n: number = values.length;
    const dp: number[][] = Array.from({ length: n }, () => Array(n).fill(1e18));

    for (let i = 0; i < n; i++) {
        for (let d: number = 0; d < 2 && i + d < n; d++) {
            dp[i][i + d] = 0;
        }    
    }

    let mn: number = 1e18;
    for (let d = 2; d < n; d++) {
        for (let i = 0; i + d < n; i++) {
            const j: number = i + d;

            for (let k = i + 1; k < j; k++) {
                dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j] + values[i] * values[j] * values[k]);
                // console.log(i, j, dp[i][j], "main");
                // console.log(i, k, dp[i][k]);
                // console.log(k, j, dp[k][j]);
                // console.log(i, j, k, values[i], values[j], values[k]);
                // console.log("#######");
            }
        }
    }

    return dp[0][n - 1];
};