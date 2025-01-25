/*
 * @lc app=leetcode id=51 lang=typescript
 *
 * [51] N-Queens
 */

// @lc code=start
function solveNQueens(n: number): string[][] {
    function traverse(r: number, cell: string[]) {
        if (r === n) {
            ans.push(cell);
            return;
        }
        for (let c = 0; c < n; c++) {
            if (col[c] || diag1[r + c] || diag2[r + n - 1 - c]) continue;
            col[c] = diag1[r + c] = diag2[r + n - 1 - c] = true; 
            const lst: string[] = cell[r].split(''); 
            lst[c] = 'Q';
            cell[r] = lst.join('');
            traverse(r + 1, cell.slice());
            col[c] = diag1[r + c] = diag2[r + n - 1 - c] = false; 
            lst[c] = '.';
            cell[r] = lst.join('');
        }
    } 
    
    const diag1: boolean[] = Array(2 * n + 1).fill(false);
    const diag2: boolean[] = Array(2 * n + 1).fill(false);
    const col: boolean[] = Array(n).fill(false);
    const cell: string[] = Array(n).fill('.'.repeat(n));
    const ans: string[][] = [];
    traverse(0, cell);

    return ans;   
};
// @lc code=end

