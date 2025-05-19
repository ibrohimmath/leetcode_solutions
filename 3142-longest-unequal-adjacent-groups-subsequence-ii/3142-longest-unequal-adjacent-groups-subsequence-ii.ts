
function getWordsInLongestSubsequence(words: string[], groups: number[]): string[] {
    function hammingDistance(a: string, b: string) {
        let diff: number = 0;
        for (let i = 0; i < a.length; i++) {
            diff += Number(a[i] != b[i]);
        }
        return diff;
    }

    const n: number = words.length;
    const dp = Array<number>(n).fill(1);
    const par = Array<number>(n).fill(-1);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (words[j].length == words[i].length && groups[j] != groups[i] && hammingDistance(words[j], words[i]) == 1 && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
                par[i] = j;
            }
        }
        // console.log(i, words[i], dp[i], par[i]);
    }

    let maxInd: number = 0;
    for (let i = 0; i < n; i++) {
        if (dp[maxInd] < dp[i]) {
            maxInd = i;
            // console.log(dp[maxInd], dp[i]);
        }
    }
    const path: number[] = [];
    for (let i = maxInd; i != -1; i = par[i]) {
        // console.log(i, par[i]);
        path.push(i);
    } 
    return path.reverse().map(p => words[p]);
};