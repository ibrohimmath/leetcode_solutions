function makeFancyString(s: string): string {
    let ans: string = "";
    for (let i = 0; i < s.length; i++) {
        let j;
        for (j = i; j < s.length; j++) {
            if (s[i] != s[j]) {
                break;
            }
        }
        if (j - i >= 3) {
            ans += s[i].repeat(2); 
        } else {
            ans += s[i].repeat(Math.max(1, j - i));
        }
        if (j > i) {
            i = j - 1;
        }
    }

    return ans;
};