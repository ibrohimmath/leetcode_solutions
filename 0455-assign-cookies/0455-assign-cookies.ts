function findContentChildren(g: number[], s: number[]): number {
    g.sort((x, y) => x - y);
    s.sort((x, y) => x - y);

    let ans: number = 0;
    let gg: number = g.length - 1, ss: number = s.length - 1;
    while (ss >= 0 && gg >= 0) {
        if (s[ss] >= g[gg]) {
            ans++;
            ss--;
        }
        gg--;
    } 

    return ans;
};