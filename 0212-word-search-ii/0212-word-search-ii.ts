function findWords(board: string[][], words: string[]): string[] {
    function gen(i: number, j: number, vis: boolean[][], temp: string = '') {
        if (temp.length > 10 || !pref.has(temp)) return; 

        set.add(temp);
        for (let k = 0; k < 4; k++) {
            const x: number = i + dx[k], y: number = j + dy[k];
            if (x < 0 || x >= m || y < 0 || y >= n || vis[x][y]) continue; 

            vis[x][y] = true;
            gen(x, y, vis, temp + board[x][y]);
            vis[x][y] = false;
        }
    }

    const dx: number[] = [1, -1, 0, 0], dy: number[] = [0, 0, 1, -1];
    const m: number = board.length, n: number = board[0].length;
    const set = new Set<string>();
    const pref = new Set<string>();
    const L: number = Math.max(...words.map(w => w.length));

    for (const word of words) {
        for (let i = 0, temp = ''; i < word.length; i++) {
            temp += word[i];
            pref.add(temp);
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const vis: boolean[][] = Array.from({length: m}, () => Array(n).fill(false));        
            vis[i][j] = true;
            set.add(board[i][j]);
            gen(i, j, vis, board[i][j]);
        } 
    }

    return words.filter(word => set.has(word));
};