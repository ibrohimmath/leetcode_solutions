function maximum69Number (num: number): number {
    const s: string = num.toString();
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '6') {
            return +(s.slice(0, i) + '9' + s.slice(i + 1));
        }
    }
    return num;
};