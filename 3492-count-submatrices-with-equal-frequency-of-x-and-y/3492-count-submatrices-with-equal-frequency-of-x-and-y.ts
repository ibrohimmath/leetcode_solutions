function numberOfSubmatrices(grid: string[][]): number {
    const m: number = grid.length, n: number = grid[0].length;
    const a: number[][] = Array.from({length: m}, () => Array(n).fill(0));
    const dp: [number, number][][] = Array.from({length: m}, () => Array.from({length: n}, () => [0,0]));

    let counter: number = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            a[i][j] = (grid[i][j] == 'X' ? 1 : (grid[i][j] == '.' ? 0 : -1));
            
            if (a[i][j] == 1) dp[i][j][1]++;
            dp[i][j][0] += a[i][j];
            
            if (i > 0) {
                dp[i][j][1] += dp[i - 1][j][1];
                dp[i][j][0] += dp[i - 1][j][0]; 
            }
            if (j > 0) {
                dp[i][j][1] += dp[i][j - 1][1];
                dp[i][j][0] += dp[i][j - 1][0];
            }
            if (i > 0 && j > 0) {
                dp[i][j][1] -= dp[i - 1][j - 1][1];
                dp[i][j][0] -= dp[i - 1][j - 1][0];
            }

            if (dp[i][j][1] > 0 && dp[i][j][0] == 0) {
                counter++;
            }
        }
    }

    return counter;
};