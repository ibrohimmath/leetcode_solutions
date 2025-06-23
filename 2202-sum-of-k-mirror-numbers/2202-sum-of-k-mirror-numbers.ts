function kMirror(k: number, n: number): number {
    function isPalindrome(s: string): boolean {
        let l: number = 0, r: number = s.length - 1; 
        while (l < r) {
            if (s[l] != s[r]) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
    let sm: number = 0;
    for (let i = 1; i <= 9 && n > 0; i++) {
        if (isPalindrome(i.toString(k)) && n-- >= 0) {
            // console.log(1, i);
            sm += i;
        }
    }
    for (let i = 1; i <= 5 && n > 0; i++) {
        for (let j = Math.pow(10, i - 1); j < Math.pow(10, i) && n > 0; j++) {
            const palindrome = j * Math.pow(10, i) + +j.toString().split('').reverse().join('');
            if (isPalindrome(palindrome.toString(k)) && n-- >= 0) {
                // console.log(i * 2, palindrome);
                sm += palindrome;
            }
        }
        for (let j = Math.pow(10, i - 1); j < Math.pow(10, i) && n > 0; j++) {
            for (let z = 0; z <= 9 && n > 0; z++) {
                const palindrome = j * Math.pow(10, i + 1) + z * Math.pow(10, i) + +j.toString().split('').reverse().join(''); 
                if (isPalindrome(palindrome.toString(k)) && n-- >= 0) {
                    // console.log(i * 2 + 1, palindrome);
                    sm += palindrome;
                }
            }
        }
    }
    return sm;
};