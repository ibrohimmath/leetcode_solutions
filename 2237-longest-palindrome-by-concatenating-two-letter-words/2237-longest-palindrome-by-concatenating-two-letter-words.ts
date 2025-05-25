function longestPalindrome(words: string[]): number {
    function reverse(str: string) {
        return str.split('').reverse().join('');
    }

    const mp = new Map<string, number>(); 
    for (const word of words) {
        mp.set(word, (mp.get(word) ?? 0) + 1);
    }
    const seen = new Set<string>(); 
    let seenMid = false, len = 0;
    for (const [key, value] of mp) {
        if (seen.has(key)) continue;
        if (key[0] == key[1]) {
            if (value & 1) {
                seenMid = true;
            } 
            // console.log(key, value);
            len += (value >> 1) << 2;
        } else {
            const rev = reverse(key), revCount = mp.get(rev) ?? 0;
            const mn = Math.min(value, revCount); 
            // console.log(key, rev, value, revCount);
            len += mn * 4;
            seen.add(rev);
        }
        seen.add(key);
    }
    // console.log(seenMid);
    if (seenMid) len += 2;
    return len;
};