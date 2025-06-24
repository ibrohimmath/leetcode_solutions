function largestPathValue(colors: string, edges: number[][]): number {
    function getCode(x: string) {
        return x.charCodeAt(0) - 'a'.charCodeAt(0);
    }

    const n: number = colors.length;
    const indegree: number[] = Array(n).fill(0);
    const g: number[][] = Array.from({length: n}, () => []); 
    for (const edge of edges) {
        const u: number = edge[0], v: number = edge[1];
        g[u].push(v);
        indegree[v]++;
    }

    let max: number = -1;
    const counter: number[][] = Array.from({length: n}, () => Array(26).fill(0)); 
    let l: number = 0;
    const q: number[] = [];
    const result: number[] = [];
    
    for (let i = 0; i < n; i++) {
        if (indegree[i] > 0) continue;
        q.push(i);
    } 

    while (l < q.length) {
        const node: number = q[l++];
        result.push(node);

        max = Math.max(max, ++counter[node][getCode(colors[node])]);
        for (const adjNode of g[node]) {
            for (let i = 0; i < 26; i++) {
                counter[adjNode][i] = Math.max(counter[adjNode][i], counter[node][i]);
            }
            if (--indegree[adjNode] === 0) {
                q.push(adjNode);
            }
        }
    }

    if (result.length != n) {
        return -1;
    }
    return Math.max(...counter.map(lst => Math.max(...lst)));
};