function doesAliceWin(s: string): boolean {
    const vowels: string = 'aeiuo';
    let count: number = 0;
    for (let i = 0; i < s.length; i++) {
        count += Number(vowels.includes(s[i]));
    } 
    if (count == 0) return false;
    return true;
};