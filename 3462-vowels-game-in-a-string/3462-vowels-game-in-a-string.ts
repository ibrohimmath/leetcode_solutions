function doesAliceWin(s: string): boolean {
    const vowels: string = 'aeiuo';
    let count: number = 0;
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i]))
            return true;
    } 
    return false;
};