function minimumTeachings(n: number, languages: number[][], friendships: number[][]): number {
    const m: number = languages.length;

    const knows: boolean[][] = Array.from({length: m}, () => Array(n).fill(false));
    for (let i = 0; i < m; i++) {
        for (const lang of languages[i]) {
            knows[i][lang - 1] = true;
        }
    }

    const cannotTalk: Set<number> = new Set(); 
    outer: for (let [x, y] of friendships) {
        x--; y--;
        for (let i = 0; i < n; i++) 
            if (knows[x][i] && knows[y][i]) continue outer;

        cannotTalk.add(x);
        cannotTalk.add(y);
    }

    const langPerUser: number[] = Array(n).fill(0);
    for (const user of cannotTalk) {
        for (const userLang of languages[user]) {
            ++langPerUser[userLang - 1];
        }
    }

    return (cannotTalk?.size ?? 0) - Math.max(...langPerUser);
};