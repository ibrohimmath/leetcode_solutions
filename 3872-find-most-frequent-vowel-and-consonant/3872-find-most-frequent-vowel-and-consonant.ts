function maxFreqSum(s: string): number {
    const vowels: string = 'aeiuo';

    const isVowel = (c: string) => vowels.includes(c);
    const getCode = (c: string) => (c.charCodeAt(0) - 'a'.charCodeAt(0));

    const counter: number[] = Array(26).fill(0);
    let mxVowel: number = 0, mxConsonant: number = 0;
    for (let i = 0; i < s.length; i++) {
        const code: number = getCode(s[i]);
        counter[code]++;
        if (isVowel(s[i])) {
            mxVowel = Math.max(mxVowel, counter[code]);
        } else {
            mxConsonant = Math.max(mxConsonant, counter[code]);
        }
    }
    return mxVowel + mxConsonant;
};