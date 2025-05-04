function minDominoRotations(tops: number[], bottoms: number[]): number {
    function solve(tops: number[], bottoms: number[]) {
        const n: number = tops.length;
        let ans: number[] = [tops[0], bottoms[0]];
        for (let i = 1; i < n; i++) {
            if (ans.length == 0) {
                return -1;
            }
            const newAns: number[] = [];
            for (const item of [tops[i], bottoms[i]]) {
                if (ans.includes(item)) {
                    newAns.push(item);
                }
            }
            ans = newAns;
        }
        const counter: number[] = Array(ans.length).fill(0);
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < ans.length; j++) {
                if (ans[j] == tops[i]) continue;
                counter[j]++;
            }
        }
        console.log(counter);
        if (ans.length == 0) return -1;
        return Math.min(Math.min(...counter));
    }
    const a: number = solve(tops, bottoms), b: number = solve(bottoms, tops);
    if (a == -1) return b;
    return Math.min(a, b);
};