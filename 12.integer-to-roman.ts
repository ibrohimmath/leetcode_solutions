/*
 * @lc app=leetcode id=12 lang=typescript
 *
 * [12] Integer to Roman
 */

// @lc code=start
function intToRoman(num: number): string {
    function buildRomanDigitRoman(digit: number, ord: number) {
        let ans: string = "";
        if (digit === 9) {
            return mapper[ord][0] + mapper[ord + 1][0];
        }
        if (digit === 4) {
            return mapper[ord][0] + mapper[ord][1];
        }
        if (digit > 4) {
            digit -= 5;
            ans += mapper[ord][1];
        }
        ans += mapper[ord][0].repeat(digit);
        return ans;
    }

    const mapper = {
        0: ['I', 'V'],
        1: ['X', 'L'],
        2: ['C', 'D'],
        3: ['M', ''],
    }; 

    let ans: string[] = [];
    let deg: number = 0; 
    while (num) {
        const remain: number = num % 10;
        if (remain) ans.push(buildRomanDigitRoman(remain, deg)); 
        num = Math.floor(num / 10);
        deg++;
    }
    
    return ans.reverse().join('');
};
// @lc code=end