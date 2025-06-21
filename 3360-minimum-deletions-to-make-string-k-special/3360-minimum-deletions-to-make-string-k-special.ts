function minimumDeletions(word: string, k: number): number {
    const code = (x: string) => {
        return x.charCodeAt(0) - 'a'.charCodeAt(0);
    }; 

    const counter: number[] = Array(26).fill(0);
    for (let i = 0; i < word.length; i++) {
        counter[code(word[i])]++;
    }
    counter.sort((x, y) => x - y);

    let mn: number = Infinity;
    for (let i = 0; i < 26; i++) {
        if (i > 0 && counter[i] == counter[i - 1]) continue;
        const mx: number = counter[i] + k;
        let collect: number = 0;
        for (let j = i; j < 26; j++) {
            collect += Math.min(mx, counter[j]);
        }
        mn = Math.min(mn, word.length - collect);
    }

    return mn;
};