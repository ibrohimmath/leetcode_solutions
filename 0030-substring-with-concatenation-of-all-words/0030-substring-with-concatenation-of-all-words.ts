function findSubstring(s: string, words: string[]): number[] {
    const n: number = s.length;
    const m: number = words[0].length; 
    const l: number = words.length;

    const map = new Map<string, number>();
    for (const word of words) {
        map.set(word, (map.get(word) ?? 0) + 1);
    }
    // console.log("Map", map);

    const ans: number[] = [];

    outer: for (let i = 0; i + l * m <= n; i++) {
        const temp = new Map<string, number>();
        // console.log("check", i);
        let word: string = "";

        for (let j = i; j < i + l * m; j++) {
            word += s[j];
            if (word.length == m) {
                // console.log("check word", word);
                if (map.has(word)) {
                    const value: number = temp.get(word) ?? 0;
                    if (value >= map.get(word)) {
                        // console.log("Error", word, value, temp);
                        continue outer;
                    }
                    temp.set(word, value + 1);
                    word = "";
                } else {
                    // console.log("Error", word);
                    continue outer;
                }
            }
        }

        for (const [key, value] of temp) {
            // console.log("Check pairs", key, value);
            if (map.get(key) != value) {
                // console.log("Error", key, value, map.get(key));
                continue outer;
            }
        }
        ans.push(i);
    }

    return ans;
};