function countPalindromicSubsequence(s: string): number {
    const getCode = (c: string) => {
        return c.charCodeAt(0) - 'a'.charCodeAt(0);
    };

    const counterL: number[] = Array(26).fill(0);
    const counterR: number[] = Array(26).fill(0);
    const combs: number[] = Array(2526).fill(0);

    for (let i = 0; i < s.length; i++) {
        counterR[getCode(s[i])]++;
    }

    let ans: number = 0;

    counterR[getCode(s[0])]--;
    counterL[getCode(s[0])]++;
    for (let i = 1; i < s.length - 1; i++) {
        counterR[getCode(s[i])]--;

        const center: number = getCode(s[i]);
        for (let c = 0; c < 26; c++) {
            if (counterL[c] == 0 || counterR[c] == 0) continue;
            ans += Number(combs[26 * c + center] == 0);
            combs[26 * c + center]++;
        }

        counterL[getCode(s[i])]++;
    }

    return ans;
};