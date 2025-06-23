function maxTargetNodes(edges1: number[][], edges2: number[][], k: number): number[] {
    function dfs(node: number, g: number[][], vis: boolean[], dist: number) {
        if (vis[node] || dist < 0) return 0;
        vis[node] = true; 

        let sm: number = 1;
        for (const adjNode of g[node]) {
            sm += dfs(adjNode, g, vis, dist - 1);
        }

        return sm;
    }

    function buildAdj(edges: number[][], n: number) {
        const g: number[][] = Array.from({length: n}, () => []);
        for (const edge of edges) {
            g[edge[0]].push(edge[1]);
            g[edge[1]].push(edge[0]);
        }

        return g;
    }

    const n: number = edges1.length + 1, m: number = edges2.length + 1;
    const N: number = 1e3 + 1;
    const g1: number[][] = buildAdj(edges1, n), g2: number[][] = buildAdj(edges2, m);

    let ans: number[] = Array(n), tree2Mx: number = 0;
    for (let i = 0; i < m; i++) {
        if (g2[i].length == 0) continue;
        const vis: boolean[] = Array(m).fill(false); 
        tree2Mx = Math.max(tree2Mx, dfs(i, g2, vis, k - 1));
    }

    for (let i = 0; i < n; i++) {
        if (g1[i].length == 0) continue;
        const vis: boolean[] = Array(n).fill(false);
        ans[i] = dfs(i, g1, vis, k) + tree2Mx;
    }

    return ans;
};