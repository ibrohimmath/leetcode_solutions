/*
 * @lc app=leetcode id=2658 lang=typescript
 *
 * [2658] Maximum Number of Fish in a Grid
 */

// @lc code=start
function findMaxFish(grid: number[][]): number {
    function dfs(i: number, j: number, sm: number = 0) {
        if (used[i][j] || !grid[i][j]) return;
        used[i][j] = true;
        sm += grid[i][j];
        mx = Math.max(mx, sm);
        
        for (let k = 0; k < 4; k++) {
            const x: number = i + dx[k], y: number = j + dy[k];
            if (x < 0 || x >= m || y < 0 || y >= n || !grid[x][y]) continue;
            dfs(x, y, sm); 
        }
    }    

    const m: number = grid.length, n: number = grid[0].length;
    const dx: number[] = [1, -1, 0, 0];
    const dy: number[] = [0, 0, 1, -1];
    const used: boolean[][] = Array.from({length: m}, () => Array(n).fill(false));
    let mx: number = 0;
   
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(i, j);
        }
    }

    return sm;
};
// @lc code=end

