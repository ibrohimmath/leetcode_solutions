function findWordsContaining(words: string[], x: string): number[] {
    return words.map((item, ind) => ind).filter(i => words[i].includes(x));
};