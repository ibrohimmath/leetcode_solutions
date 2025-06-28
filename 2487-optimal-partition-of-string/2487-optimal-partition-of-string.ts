function partitionString(s: string): number {
    const getCode = (x: string) => {
        return x.charCodeAt(0) - 'a'.charCodeAt(0);
    };

    const n: number = s.length;
    let ans: number = 1;
    const alpha: number[] = Array(26).fill(0);
    for (let i: number = 0, l: number = 0; i < n; i++) {
        const code: number = getCode(s[i]);
        alpha[code]++;
        ans += Number(alpha[code] > 1);
        if (alpha[code] <= 1) continue;
        while (l < i) {
            const codeL: number = getCode(s[l]);
            alpha[codeL]--;
            l++;
        }
    }

    return ans;
};