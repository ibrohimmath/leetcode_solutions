function sortMatrix(grid: number[][]): number[][] {
    const m: number = grid.length, n: number = grid[0].length;
    const D: number = m + n - 1;

    let sx: number = m - 1, sy: number = 0;
    for (let d = 1; d <= D; d++) {
        const lst: number[] = [];
        const diff: number = n - d;

        let x: number = sx, y: number = sy;
        while (x < m && y < n) {
            lst.push(grid[x][y]); 
            x++;
            y++;
        }

        if (d <= (D + 1) / 2) {
            lst.sort((x, y) => x - y);
        } else {
            lst.sort((x, y) => y - x);
        }

        x = sx; y = sy;
        while (x < m && y < n) {
            grid[x++][y++] = lst.pop();
        } 

        if (sx > 0) {
            sx--;
        } else {
            sy++;
        }
    }

    return grid;
};