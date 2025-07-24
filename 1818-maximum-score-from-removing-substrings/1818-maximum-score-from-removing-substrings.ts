function maximumGain(s: string, x: number, y: number): number {
    if (x < y) {
        [x, y] = [y, x];
        s = s.split('').reverse().join('');
    }

    let a: number = 0, b: number = 0, ans: number = 0;
    for (let char of s) {
        if (char == 'a') {
            a++;
        } else if (char == 'b') {
            if (a > 0) {
                a--;
                ans += x; 
            } else {
                b++; 
            }
        } else {
            ans += Math.min(a, b) * y;
            a = b = 0;
        }
    }
    ans += Math.min(a, b) * y;

    return ans;
};