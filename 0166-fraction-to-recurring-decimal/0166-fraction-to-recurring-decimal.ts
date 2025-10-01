function fractionToDecimal(numerator: number, denominator: number): string {
    if (numerator % denominator == 0) {
        return (numerator / denominator).toString();
    }

    const sign: string = (numerator < 0 && denominator >= 0 || numerator >= 0 && denominator < 0) ? "-" : "";
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
    const heading = Math.floor(numerator / denominator);
    numerator %= denominator;
    let lst: string = '';

    const mp: Map<number, number> = new Map();
    while (numerator > 0) {
        mp.set(numerator, lst.length);
        lst = lst + Math.floor(10 * numerator / denominator).toString();
        numerator = 10 * numerator % denominator;
        if (mp.has(numerator)) {
            const ind: number = mp.get(numerator);
            lst = lst.slice(0, ind) + '(' + lst.slice(ind) + ')'; 
            break;
        }    
    }

    return sign + heading.toString() + '.' + lst;
};