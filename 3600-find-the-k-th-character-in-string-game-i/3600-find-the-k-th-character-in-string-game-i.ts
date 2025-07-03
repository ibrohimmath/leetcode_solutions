function kthCharacter(k: number): string {
    function findLessBiggestBin(k: number) {
        const degree: number = Math.floor(Math.log2(k));
        if (Math.pow(2, degree) == k) {
            return k >> 1;
        }
        return Math.pow(2, degree);
    }

    function findOrder(k: number) {
        if (k == 1) {
            return 0;
        }
        const biggestLessBin: number = findLessBiggestBin(k);
        return (findOrder(k - biggestLessBin) + 1) % 26;
    }
    const code: number = 'a'.charCodeAt(0) + findOrder(k);
    return String.fromCharCode(code);
};