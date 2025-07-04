function kthCharacter(k: number, operations: number[]): string {
    function lessGreaterBinaryDeg(k: number) {
        let deg: number = 0, num: number = 1;
        while (num < k) {
            num *= 2;
            deg++;
        }
        return deg;
    }

    let move: number = 0;
    let deg: number;
    while (k > 0) {
        deg = lessGreaterBinaryDeg(k);
        const num: number = Math.pow(2, deg);
        k -= num / 2;
        if (operations[deg - 1]) {
           move = (move + 1) % 26;
        }
    }  

    return String.fromCharCode('a'.charCodeAt(0) + move);
};