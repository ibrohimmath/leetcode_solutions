function nextBeautifulNumber(n: number): number {
    const combs: [number, number][][][] = [
        [],
        [[[1, 1]]],
        [[[2, 2]]],
        [[[2, 2], [1, 1]], [[3, 3]]],
        [[[3, 3], [1, 1]], [[4, 4]]], 
        [[[3, 3], [2, 2]], [[4, 4], [1, 1]], [[5, 5]]],
        [[[3, 3], [2, 2], [1, 1]], [[4, 4], [2, 2]], [[5, 5], [1, 1]], [[6, 6]]],
        [[[4, 4], [3, 3]], [[4, 4], [2, 2], [1, 1]],[[5, 5], [2, 2]], [[6, 6], [1, 1]], [[7, 7]]],
    ];

    function generate(l: number, n: number, lst: [number, number][], temp: number) {
        if (l == 0) {
            if (temp > n) {
                mn = Math.min(temp, mn);
            }
            return;
        }
        for (let i = lst.length - 1; i >= 0; i--) {
            if (lst[i][1] > 0) {
                const newLst = lst.map(pair => {
                    const newPair: [number, number] = [pair[0], pair[1]];
                    return newPair;
                });
                newLst[i][1]--; 
                generate(l - 1, n, newLst, temp * 10 + lst[i][0]); 
            }
        }
    } 

    const l: number = n.toString().length;
    const L: number = l + 1;
    let mn: number = 77777777;
    for (const lst of combs[l]) {
        generate(l, n, lst, 0);
    }
    if (L <= 7) {
        for (const lst of combs[L]) {
            generate(L, n, lst, 0);
        }
    }
    return mn;
};