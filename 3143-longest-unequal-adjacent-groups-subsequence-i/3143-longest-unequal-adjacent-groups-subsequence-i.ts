function getLongestSubsequence(words: string[], groups: number[]): string[] {
    let zeroList: number[] = [], oneList: number[] = [];
    for (let i = 0; i < words.length; i++) {
        if (groups[i] == 0) {
            if (zeroList.length == 0 || groups[zeroList.at(-1)] != groups[i]) {
                zeroList.push(i);
            } else if (groups[oneList.at(-1)] != groups[i]) {
                oneList.push(i);
            }
        } else {
            if (groups[zeroList.at(-1)] != groups[i]) {
                zeroList.push(i);
            } else if (zeroList.length == 0 || groups[oneList.at(-1)] != groups[i]) {
                oneList.push(i);
            }
        }
    }
    if (oneList.length > zeroList.length) {
        return oneList.map(ind => words[ind]);
    } else {
        return zeroList.map(ind => words[ind]);
    }
};