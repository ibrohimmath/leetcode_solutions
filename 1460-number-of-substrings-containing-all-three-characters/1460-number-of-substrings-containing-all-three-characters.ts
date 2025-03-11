function charMap(x: string) {
    switch (x) {
        case 'a': 
            return 0;
        case 'b':
            return 1;
        case 'c':
            return 2;
        default:
            return -1;
    }
}

function numberOfSubstrings(s: string): number {
    const mp: number[] = Array(3).fill(0);
    let matched: number = 0;
    let counter: number = 0;

    for (let i = 0, l = 0; i < s.length; i++) {
        const code: number = charMap(s[i]);
        if (code !== -1) {
            mp[code]++;
            matched += Number(mp[code] === 1);
        }

        let lCode: number = charMap(s[l]);
        while (l <= i && (lCode === -1 || mp[lCode] >= 1) && matched >= 3) {
            // console.log(l, i, s.length, mp);
            counter += (s.length - i); 
            // console.log(s.length, i);
            if (lCode !== -1) {
                matched -= Number(mp[lCode] === 1);
                mp[lCode]--;
            }
            lCode = charMap(s[++l]);
        }
        // console.log(l, i, s.length, mp, 'outside');
    }

    return counter;
};