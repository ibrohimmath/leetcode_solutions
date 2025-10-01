function islandPerimeter(grid: number[][]): number {
    const m: number = grid.length, n: number = grid[0].length;

    const dirs: [number, number][] = [[1, 0], [0, 1], [-1, 0], [0, -1]];    

    let perimeter: number = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 0) continue;
            let side: number = 4;
            for (const [dx, dy] of dirs) {
                const x: number = i + dx, y: number = j + dy; 
                if (x < 0 || x >= m || y < 0 || y >= n) continue;
                side -= grid[x][y];
            }
            // console.log(i, j, side);
            perimeter += side;
        }
    }

    return perimeter;
};