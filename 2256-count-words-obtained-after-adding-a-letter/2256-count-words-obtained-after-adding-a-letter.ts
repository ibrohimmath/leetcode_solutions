function wordCount(startWords: string[], targetWords: string[]): number {
    const getCode = (x: string): number => {
        return x.charCodeAt(0) - 'a'.charCodeAt(0);
    };
    const getChar = (x: number): string => {
        return String.fromCharCode('a'.charCodeAt(0) + x);
    };

    for (let i = 0; i < targetWords.length; i++) {
        targetWords[i] = targetWords[i].split('').sort().join('');
    }
    const targetMp: Map<string, number> = new Map();
    for (const word of targetWords) {
        targetMp.set(word, (targetMp.get(word) ?? 0) + 1);
    }

    let ans: number = 0;
    for (let i = 0; i < startWords.length && targetMp.size > 0; i++) {
        const st: boolean[] = Array(26).fill(0);
        for (let j = 0; j < startWords[i].length; j++) {
            st[getCode(startWords[i][j])] = true;
        }
        for (let j = 0; j < 26; j++) {
            if (st[j]) continue;
            let newStr: string = startWords[i] + getChar(j); 
            newStr = newStr.split('').sort().join('');

            if (targetMp.has(newStr)) {
                ans += targetMp.get(newStr);
                targetMp.delete(newStr);
            }
        }
    }

    return ans;
};