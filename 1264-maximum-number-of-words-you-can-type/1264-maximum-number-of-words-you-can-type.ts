function canBeTypedWords(text: string, brokenLetters: string): number {
    const getCode = (c: string) => c.charCodeAt(0) - 'a'.charCodeAt(0);

    const alpha: number[] = Array(26).fill(0);
    for (let i = 0; i < brokenLetters.length; i++) {
        alpha[getCode(brokenLetters[i])]++;
    }

    let typedWords: number = 0;
    let hasBroken: boolean = false;
    for (let i = 0; i < text.length; i++) {
        if (text[i] != ' ' && alpha[getCode(text[i])]) {
            hasBroken = true;
        } else if (text[i] == ' ') {
            typedWords += Number(!hasBroken);
            hasBroken = false;
        }
    }
    typedWords += Number(!hasBroken);

    return typedWords;
};