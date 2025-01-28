/*
 * @lc app=leetcode id=2050 lang=typescript
 *
 * [2050] Parallel Courses III
 */

// @lc code=start
function minimumTime(n: number, relations: number[][], time: number[]): number {
    const N: number = n + 1;
    const g: number[][] = Array.from({length: N}, () => []);
    const inDegree: number[] = Array(N).fill(0);
    const dist: number[] = Array(N).fill(0);
    for (const edge of relations) {
        g[edge[0]].push(edge[1]);
        inDegree[edge[1]]++;
    } 
    let ans: number = 0;
    const queue: number[] = [];
    for (let i = 1; i <= n; i++) {
        if (!inDegree[i]) {
            dist[i] = time[i - 1];
            queue.push(i);
        } 
    } 
    while (queue.length) {
        const node: number = queue.shift()!;
        for (const child of g[node]) {
            dist[child] = Math.max(dist[child], dist[node] + time[child - 1]);
            if (--inDegree[child] === 0) {
                queue.push(child);
            }
        }
    }
    return Math.max(...dist);
};
// @lc code=end

