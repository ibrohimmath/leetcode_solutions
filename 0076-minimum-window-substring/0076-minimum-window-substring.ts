function code(x: string) {
    return x === x.toUpperCase() ? x.charCodeAt(0) - 'A'.charCodeAt(0) : x.charCodeAt(0) - 'a'.charCodeAt(0) + 26;
}

function minWindow(s: string, t: string): string {
    const alpha: number[] = Array(52).fill(0);
    for (let i = 0; i < t.length; i++) {
        alpha[code(t[i])]++;
    }

    let uniqCount: number = alpha.reduce((acc, item) => acc + Number(item > 0), 0);
    let matched: number = 0;

    let ll = -1, rr = -1;
    const window: number[] = Array(52).fill(0);
    for (let i = 0, l = 0; i < s.length; i++) {
        window[code(s[i])]++;

        matched += Number(window[code(s[i])] === alpha[code(s[i])]);

        while (l <= i && window[code(s[l])] >= alpha[code(s[l])] && matched >= uniqCount) {
            if (ll === -1 && rr === -1 || i - l <= rr - ll) {
                ll = l;
                rr = i;
            }
            matched -= Number(window[code(s[l])] === alpha[code(s[l])]);
            window[code(s[l])]--;
            l++;
        }
    }

    return s.slice(ll, rr + 1);
};