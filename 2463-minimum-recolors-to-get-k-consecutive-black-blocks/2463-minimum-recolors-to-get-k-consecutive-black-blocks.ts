function minimumRecolors(blocks: string, k: number): number {
    const n: number = blocks.length;
    let mn: number = 1e9;

    const pref: number[] = Array(n + 1).fill(0);
    for (let i = 0; i < k; i++) {
        pref[i + 1] += pref[i] + Number(blocks[i] === 'W');
    }
    mn = Math.min(mn, pref[k]);
    
    for (let i = k; i < n; i++) {
        pref[i + 1] += pref[i] + Number(blocks[i] === 'W');
        mn = Math.min(mn, pref[i + 1] - pref[i + 1 - k]);
    }

    return mn;
};