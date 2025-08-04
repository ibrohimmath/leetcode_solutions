function maxTotalFruits(fruits: number[][], startPos: number, k: number): number {
    const N: number = 2e5 + 10;

    const pref: number[] = Array(N).fill(0);
    for (const [pos, num] of fruits) {
        pref[pos + 1] = num;
    }
    for (let i = 1; i < N; i++) {
        pref[i] += pref[i - 1];
    }

    let mx: number = 0;

    for (let r: number = startPos; r <= startPos + k && r <= 2e5; r++) {
        const x: number = r - startPos;
        const l: number = Math.max(0, startPos - (k - 2 * x)); 
        
        mx = Math.max(mx, pref[r + 1] - pref[l]); 
    }

    for (let l: number = startPos; l >= startPos - k && l >= 0; l--) {
        const x: number = startPos - l;
        const r: number = Math.min(2e5, startPos + k - 2 * x);

        mx = Math.max(mx, pref[r + 1] - pref[l]);
    }

    return mx;
};