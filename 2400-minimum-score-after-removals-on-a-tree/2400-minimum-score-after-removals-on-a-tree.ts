function minimumScore(nums: number[], edges: number[][]): number {
    const n: number = nums.length;
    const total: number = nums.reduce((acc, item) => acc ^ item, 0);    
    const g: number[][] = Array.from({length: n}, () => []);
    for (const [a, b] of edges) {
        g[a].push(b);
        g[b].push(a);
    } 

    let xor1: number = 0, xor2: number = 0, mn: number = Infinity;
    for (let i = 0; i < edges.length; i++) {
        const [from, to] = edges[i];

        const xorVal: number[] = Array(n).fill(0);
        const color: number[] = Array(n).fill(0);
        const timer: number[] = Array(n).fill(0);

        function dfs(node: number, bound: number, paintColor: number, time: number = 0) {
            if (color[node] > 0 || node == bound) {
                return;
            }
            color[node] = paintColor;
            xorVal[node] = nums[node];
            timer[node] = time;

            for (const adjNode of g[node]) {
                if (color[adjNode] > 0 || adjNode == bound) continue;
                dfs(adjNode, bound, paintColor, time + 1);
                xorVal[node] ^= xorVal[adjNode];
            }
        } 
        dfs(from, to, 1);
        dfs(to, from, 2);
        // console.log(xorVal);

        xor1 = xorVal[from];
        xor2 = xorVal[to];

        for (let j = 0; j < edges.length; j++) {
            if (i == j) continue;

            let [s, e] = edges[j];
            if (timer[s] > timer[e]) [s, e] = [e, s];
            // console.log(from, to);
            // console.log(s, e);
            // console.log(xor1, xor2);

            if (color[s] == 1 && color[e] == 1) {
                const lst: number[] = [xor1 ^ xorVal[e], xorVal[e], xor2]; 
                mn = Math.min(mn, Math.max(...lst) - Math.min(...lst)); 
                // console.log(lst);
                // console.log('#');
            } else {
                const lst: number[] = [xor1, xor2 ^ xorVal[e], xorVal[e]];
                mn = Math.min(mn, Math.max(...lst) - Math.min(...lst));
                // console.log(lst);
                // console.log('#');
            } 
        }
    }

    return mn;
};