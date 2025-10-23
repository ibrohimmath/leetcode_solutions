function hasSameDigits(s: string): boolean {
    const lst: number[] = s.split('').map(Number);
    while (lst.length > 2) {
        for (let i = 0; i < lst.length - 1; i++) {
            lst[i] = (lst[i] + lst[i + 1]) % 10;
        }
        lst.pop();
    }
    return lst[0] == lst[1];
};