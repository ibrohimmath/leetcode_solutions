function lengthAfterTransformations(s: string, t: number): number {
    const code = (x: string) => {
        return x.charCodeAt(0) - 'a'.charCodeAt(0); 
    };

    const MOD = 1e9 + 7;
    let counter = Array<number>(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        counter[code(s[i])]++;
    }
    for (let i = 0; i < t; i++) {
        const newCounter = Array<number>(26).fill(0);
        for (let c = 0; c < 25; c++) {
            newCounter[c + 1] = (newCounter[c + 1] + counter[c]) % MOD;
        }
        newCounter[0] = (newCounter[0] + counter[25]) % MOD;
        newCounter[1] = (newCounter[1] + counter[25]) % MOD;
        counter = newCounter;
    }
    return counter.reduce((acc, item) => (acc + item) % MOD, 0);
};