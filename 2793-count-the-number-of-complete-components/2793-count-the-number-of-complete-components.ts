function countCompleteComponents(n: number, edges: number[][]): number {
    const vis: boolean[] = Array(n).fill(false);   

    const g: number[][] = Array.from({length: n}, () => []);
    for (const [x, y] of edges) {
        g[x].push(y);
        g[y].push(x);
    }

    let ans: number = 0;
    outer: for (let i = 0; i < n; i++) {
        if (vis[i]) continue;

        let nodes: number = 0;
        const compNodes: number[] = [];
        const q: number[] = [i];
        while (q.length) {
            const node: number = q.shift();
            if (vis[node]) continue;
            vis[node] = true;
            compNodes.push(node);
            nodes++;
            for (const adjNode of g[node]) {
                q.push(adjNode);
            }
        }

        for (const node of compNodes) {
            if (g[node].length != nodes - 1) {
                continue outer;
            }
        }
        ans++;
    }

    return ans;
};