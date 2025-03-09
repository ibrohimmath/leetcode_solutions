function count(x: string, s: string) {
    return s.split('').filter(ch => ch === x).length;
}

function isDigit(x: string) {
    return !Number.isNaN(+x);
}

function isSign(s: string) {
    console.log('is sign');
    return !s || !s.length || ['+', '-'].includes(s[0]);
}

// integer without any signs
function isUnsignedInteger(s: string) {
    console.log('is unsigned integer');
    for (let i = 0; i < s.length; i++) {
        if (!isDigit(s[i])) {
            return false;
        }
    }
    return s.length > 0;
}

// Integer can consist of signs 
function isInteger(s: string) {
    console.log('integer check');
    return isSign(s[0]) ? isUnsignedInteger(s.slice(1)) : isUnsignedInteger(s);
}

function isDecimalOrInteger(s: string): boolean {
    if (!s.length) {
        console.log('decimal number is empty');
        return true;
    }
    const dotCount: number = count('.', s); 
    if (dotCount > 1) {
        console.log('dot count increase');
        return false
    }
    if (dotCount === 1) {
        console.log('one dot exists');
        let [a, b] = s.split('.');
        if (!a.length && !b.length) return false;
        if (!a.length) return isUnsignedInteger(b);
        if (!b.length) return isUnsignedInteger(a);
        return isUnsignedInteger(a) && isUnsignedInteger(b);
    }
    return isUnsignedInteger(s);
}

function isNumber(s: string): boolean {
    if (['+', '-'].includes(s[0])) s = s.slice(1);
    if (count('e', s) + count('E', s) > 1) {
        console.log('first')
        return false;
    }
    if (count('e', s) + count('E', s) === s.length) {
        console.log('second')
        return false;
    }
    if (count('e', s) + count('E', s) === 0) {
        console.log('third')
        return isDecimalOrInteger(s);
    }
    const delim: string = count('e', s) ? 'e': 'E';
    const [a, b] = s.split(delim);
    if (!a.length || !b.length) {
        return false;
    }
    if (count('.', s) === 1) {
        return isDecimalOrInteger(a) && isInteger(b);
    }
    return isUnsignedInteger(a) && isInteger(b); 
};