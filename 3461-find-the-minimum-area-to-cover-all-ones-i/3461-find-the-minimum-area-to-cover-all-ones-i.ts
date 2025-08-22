function minimumArea(grid: number[][]): number {
    const m: number = grid.length;
    const n: number = grid[0].length;
    let left: number = n, up: number = m, down: number = 0, right: number = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 0) continue;
            left = Math.min(left, j);
            right = Math.max(right, j);

            up = Math.min(up, i);
            down = Math.max(down, i);
        }
    }

    return (right - left + 1) * (down - up + 1);
};