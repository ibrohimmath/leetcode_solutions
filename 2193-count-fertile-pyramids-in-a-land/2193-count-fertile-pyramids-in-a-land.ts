function countPyramids(grid: number[][]): number {
    const m: number = grid.length, n: number = grid[0].length;
    const bottom: number[][] = Array.from({ length: m }, () => Array(n).fill(0));
    const top: number[][] = Array.from({ length: m }, () => Array(n).fill(0));

    let ans: number = 0;
    for (let i = m - 2; i >= 0; i--) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] && j > 0 && j + 1 < n && grid[i + 1][j] && grid[i + 1][j - 1] && grid[i + 1][j + 1]) {
               top[i][j] = Math.min(top[i + 1][j - 1], top[i + 1][j + 1]) + 1; 
               ans += top[i][j];
            }
        }
    }

    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] && j > 0 && j + 1 < n && grid[i - 1][j] && grid[i - 1][j - 1] && grid[i - 1][j + 1]) {
               bottom[i][j] = Math.min(bottom[i - 1][j - 1], bottom[i - 1][j + 1]) + 1; 
               ans += bottom[i][j];
            }
        }
    }

    return ans;
};