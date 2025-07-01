function possibleStringCount(word: string): number {
    let ans: number = 1;
    for (let i = 0; i < word.length; ) {
        let j: number = i;
        while (j < word.length && word[i] == word[j]) {
            j++;
        }
        ans += Math.max(0, j - i - 1); 
        i = Math.max(i + 1, j);
    }
    return ans;
};