function pacificAtlantic(heights: number[][]): number[][] {
    const dirs: [number, number][] = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    function dfs(i: number, j: number) {
        if ((dp[i][j] >> 2) & 1) return;
        dp[i][j] |= 1 << 2;

        for (const [dx, dy] of dirs) {
            const ii = i + dx;
            const jj = j + dy;
            if (ii < 0 || ii >= m || jj < 0 || jj >= n || heights[ii][jj] > heights[i][j]) continue;
            dfs(ii, jj);
            dp[i][j] |= dp[ii][jj];
        }
    }

    const m: number = heights.length, n: number = heights[0].length;
    const ans: number[][] = [];

    // ___
    // 2nd bit denotes whether point is visited
    // 1st bit denotes whether pacific is reachable
    // 0nd bit denotes whether atlantic is reachable
    const dp: number[][] = Array.from({length: m}, () => Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        dp[i][0] |= 1 << 1;
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] |= 1 << 1;
    }
    for (let i = 0; i < m; i++) {
        dp[i][n - 1] |= 1 << 0;
    }
    for (let j = 0; j < n; j++) {
        dp[m - 1][j] |= 1 << 0;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(i, j);
        }
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dp[i][j] ^= 1 << 2;
        }
    }

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            dfs(i, j);
            if (dp[i][j] % 4 == 3) {
                ans.push([i, j]);
            }
        }
    }
    

    return ans;
};