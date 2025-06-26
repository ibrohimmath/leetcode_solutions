function longestSubsequence(s: string, k: number): number {
    function reverse(s: string) {
        return s.split('').reverse().join('');
    }

    const n: number = s.length;
    const kStr: string = k.toString(2);
    const zeroCount: number[] = Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        zeroCount[i] = (i > 0 ? zeroCount[i - 1] : 0) + Number(s[i] == '0');
    }
    
    let mx: number = 0;
    for (let i: number = n - 1, temp: string = ""; i >= 0 && temp.length < kStr.length; i--) {
        if (s[i] == kStr.at(-1 - temp.length)) {
            temp += s[i];
        }
        if (parseInt(s.slice(i), 2) <= k) {
            mx = Math.max(mx, s.slice(i).length + (i > 0 ? zeroCount[i - 1] : 0));
        }
        mx = Math.max(mx, temp.length + (i > 0 ? zeroCount[i - 1] : 0));
    }

    return mx;
};