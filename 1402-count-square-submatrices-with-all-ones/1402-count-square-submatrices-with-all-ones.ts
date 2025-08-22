function countSquares(matrix: number[][]): number {
    const m: number = matrix.length;
    const n: number = matrix[0].length;
    const dp: number[][] = Array.from({length: m}, () => Array(n).fill(0));
    let ans: number = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let mn: number = 1e9;
            if (i && j) {
                mn = Math.min(mn, dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
            } 
            if (mn == 1e9) mn = 0;
            if (matrix[i][j]) dp[i][j] = mn + matrix[i][j];
            ans += dp[i][j];
        }
    }

    return ans;
};