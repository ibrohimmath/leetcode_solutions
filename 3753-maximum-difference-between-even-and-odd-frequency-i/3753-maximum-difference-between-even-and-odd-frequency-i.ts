function maxDifference(s: string): number {
    function code(x: string) {
        return x.charCodeAt(0) - 'a'.charCodeAt(0); 
    }

    const counter: number[] = Array(26).fill(0);
    let mx: number = 0, mn: number = 1e9;
    for (let i = 0; i < s.length; i++) {
        counter[code(s[i])]++;
    }
    for (let i = 0; i < 26; i++) {
        if (counter[i] & 1) {
            mx = Math.max(mx, counter[i]);
        } else if (counter[i] > 0) {
            mn = Math.min(mn, counter[i]);
        }
    }
    return mx - mn;
};