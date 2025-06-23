function maxTargetNodes(edges1: number[][], edges2: number[][]): number[] {
    function buildAdj(edges: number[][], n: number) {
        const g: number[][] = Array.from({length: n}, () => []);
        for (const edge of edges) {
            g[edge[0]].push(edge[1]);
            g[edge[1]].push(edge[0]);
        }
        return g;
    } 

    function dfs(node: number, g: number[][], color: number[], col: number) {
        if (color[node] != -1) return;
        color[node] = col;

        for (const adjNode of g[node]) {
            dfs(adjNode, g, color, 1 - col);
        }
    }

    const n: number = edges1.length + 1, m: number = edges2.length + 1;
    const g1: number[][] = buildAdj(edges1, n), g2: number[][] = buildAdj(edges2, m);
    const color1: number[] = Array(n).fill(-1), color2: number[] = Array(m).fill(-1);

    dfs(1, g2, color2, 0); 
    dfs(1, g1, color1, 0);

    const whites2: number = color2.filter(c => c == 0).length;
    const whites1: number = color1.filter(c => c == 0).length;

    const ans: number[] = Array(n).fill(-1);
    for (let i = 0; i < n; i++) {
        ans[i] = (color1[i] == 0 ? whites1 : n - whites1) + Math.max(whites2, m - whites2);
    }

    return ans;
};