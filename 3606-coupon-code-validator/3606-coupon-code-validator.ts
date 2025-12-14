function validateCoupons(code: string[], businessLine: string[], isActive: boolean[]): string[] {
    const isValidCode = (code: string) => {
        for (let i = 0; i < code.length; i++) {
            const c: string = code[i];
            const cNum: number = c.charCodeAt(0);
            const a: number = 'a'.charCodeAt(0), z: number = 'z'.charCodeAt(0);
            const A: number = 'A'.charCodeAt(0), Z: number = 'Z'.charCodeAt(0);
            if (c != '_' && !(cNum >= a && cNum <= z) && !(cNum >= A && cNum <= Z) && isNaN(+c)) {
                return false;
            }
        }
        return code.length > 0;
    };
    const N: number = code.length;
    const categories: string[] = ["electronics", "grocery", "pharmacy", "restaurant"];
    let a = Array.from({length: N}, (_, ind) => ind);
    a = a.filter(item => isValidCode(code[item]) && categories.includes(businessLine[item]) && isActive[item]); 
    a.sort((x, y) => {
        const ordX: number = categories.indexOf(businessLine[x]);
        const ordY: number = categories.indexOf(businessLine[y]);
        if (ordX != ordY) return ordX - ordY;
        return 2 * Number(code[y] < code[x]) - 1; 
    });
    return a.map(item => code[item]);
};