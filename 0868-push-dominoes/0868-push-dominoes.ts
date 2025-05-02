function pushDominoes(dominoes: string): string {
    const n: number = dominoes.length;
    const ans: string[] = dominoes.split('');
    let prev: number = -1;
    for (let i = 0; i < n; i++) {
        if (dominoes[i] == '.') continue;
        if (prev == -1) {
            if (dominoes[i] == 'L') {
                for (let j = 0; j < i; j++) {
                    ans[j] = 'L';
                }
            }
        } 
        if (dominoes[prev] == dominoes[i]) {
            // console.log(dominoes[prev], dominoes[i]);
            for (let j = prev + 1; j < i; j++) {
                ans[j] = dominoes[i];
            }
        }
        if (dominoes[prev] == 'R' && dominoes[i] == 'L') {
            const len: number = i - prev + 1;
            const l: number = prev + Math.floor(len / 2) - 1;
            const r: number = ((len & 1) ? l + 2 : l + 1); 
            // console.log(prev, l, 'R');
            for (let j = prev; j <= l; j++) {
                ans[j] = 'R';
            }
            // console.log(r, i, 'R');
            for (let j = r; j <= i; j++) {
                ans[j] = 'L';
            }
        }
        prev = i;
    }
    if (prev != -1 && dominoes[prev] == 'R') {
        for (let j = prev + 1; j < n; j++) {
            ans[j] = 'R';    
        }
    }
    return ans.join('');
};