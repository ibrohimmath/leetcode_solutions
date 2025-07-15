function isValid(word: string): boolean {
    function isAlpha(x: string) {
        const code: number = x.charCodeAt(0);
        const aCode: number = 'a'.charCodeAt(0), zCode: number = 'z'.charCodeAt(0);
        const ACode: number = 'A'.charCodeAt(0), ZCode: number = 'Z'.charCodeAt(0);
        return code >= aCode && code <= zCode || code >= ACode && code <= ZCode;
    }

    let wordList: string[] = word.split('');
    if (wordList.length < 3) return false;
    let existsVowel: boolean = false, existsConsotant: boolean = false;
    for (const char of wordList) {
        if (['@', '#', '$'].includes(char)) {
            return false;
        }
        if (isAlpha(char)) {
            if (['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase())) {
                existsVowel = true;
            } else {
                existsConsotant = true;
            }
        }
    }
    return existsConsotant && existsVowel;
};