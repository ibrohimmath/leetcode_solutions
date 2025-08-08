function maxCollectedFruits(fruits: number[][]): number {
    const n: number = fruits.length;
    let ans: number = 0;

    for (let i = 0; i < n; i++) {
        ans += fruits[i][i];
    }

    function solve() {
        let prev: number[] = Array(n).fill(0);
        let curr: number[] = Array(n).fill(0);

        prev[n - 1] = fruits[0][n - 1];
        for (let i = 1; i < n - 1; i++) {
            for (let j = Math.max(n - 1 - i, i + 1); j < n; j++) {
                curr[j] = Math.max(curr[j], prev[j] + fruits[i][j]);
                if (j - 1 >= 0) curr[j] = Math.max(curr[j], prev[j - 1] + fruits[i][j]);
                if (j + 1 < n) curr[j] = Math.max(curr[j], prev[j + 1] + fruits[i][j]);
            }
            prev = [...curr];
        } 

        return prev[n - 1];
    }

    ans += solve();

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [fruits[i][j], fruits[j][i]] = [fruits[j][i], fruits[i][j]]; 
        }
    }
    // console.log(fruits);
    
    ans += solve();

    return ans;
};