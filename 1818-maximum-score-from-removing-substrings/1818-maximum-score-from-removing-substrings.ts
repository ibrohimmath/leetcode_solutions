function maximumGain(s: string, x: number, y: number): number {
    function process(s: string, pattern: string, score: number): [string, number] {
        let ans: number = 0;
        const stack: string[] = [];    
        for (let i = 0; i < s.length; i++) {
            if (stack.length && stack.at(-1) + s[i] == pattern) {
                stack.pop();
                ans += score;
            } else {
                stack.push(s[i]);
            }
        }
        return [stack.join(''), ans];
    }

    const maxStr: string = (x > y ? 'ab' : 'ba');
    const minStr: string = (x <= y ? 'ab' : 'ba');
    let remainStr: string;
    let maxPoints: number = 0, minPoints: number = 0;

    [remainStr, maxPoints] = process(s, maxStr, Math.max(x, y));
    [remainStr, minPoints] = process(remainStr, minStr, Math.min(x, y));

    return minPoints + maxPoints;
};