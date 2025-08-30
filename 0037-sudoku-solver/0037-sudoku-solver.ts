/**
 Do not return anything, modify board in-place instead.
*/

function solveSudoku(board: string[][]): void {
    function isValid(val: number, x: number, y: number) {
        for (let i = 0; i < 9; i++) {
            if (board[i][y] == '.') continue;
            if (+board[i][y] == val) return false;
        }
        for (let j = 0; j < 9; j++) {
            if (board[x][j] == '.') continue;
            if (+board[x][j] == val) return false;
        }
        const sx: number = Math.floor(x / 3) * 3, sy: number = Math.floor(y / 3) * 3;
        for (let i = sx; i < sx + 3; i++) {
            for (let j = sy; j < sy + 3; j++) {
                if (board[i][j] == '.') continue;
                if (+board[i][j] == val) return false;
            }
        }
        return true;
    }

    function solve(lst: [number, number][], ind: number = 0) {
        if (ind >= lst.length) return true;
        const [x, y] = lst[ind];
        for (let i = 1; i <= 9; i++) {
            if (!isValid(i, x, y)) continue;
            board[x][y] = i.toString();
            if (solve(lst, ind + 1)) {
                return true;
            }
            board[x][y] = '.';
        }

    }
    
    const lst: [number, number][] = [];
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] != '.') continue;
            lst.push([i, j]);
        }
    }
    solve(lst, 0);
};