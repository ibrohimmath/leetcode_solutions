function closestMeetingNode(edges: number[], node1: number, node2: number): number {
    function buildDist(root: number) {
        const dist: number[] = Array(N).fill(INF);
        const vis: boolean[] = Array(N).fill(false);
        const q: number[] = [root];
        let l: number = 0; 

        dist[root] = 0;
        
        while (l < q.length) {
            const node: number = q[l++]; 

            if (vis[node]) continue;
            vis[node] = true;
           
            for (const adjNode of g[node]) {
                dist[adjNode] = Math.min(dist[adjNode], dist[node] + 1);
                q.push(adjNode);
            }
        }

        return dist;
    }

    const N: number = Math.max(edges.length, ...edges) + 1;
    const INF: number = 1e9 + 7;
    const g: number[][] = Array.from({length: N}, () => []);   
    for (let i = 0; i < edges.length; i++) {
        if (edges[i] == -1) continue;
        g[i].push(edges[i]);
    }

    const dist1: number[] = buildDist(node1);
    const dist2: number[] = buildDist(node2);

    // console.log(dist1);
    // console.log(dist2);

    let minInd: number = -1;
    for (let i = 0; i < N; i++) {
        if (Math.max(dist1[i], dist2[i]) === INF) continue;
        if (minInd == -1 || Math.max(dist1[i], dist2[i]) < Math.max(dist1[minInd], dist2[minInd])) {
            minInd = i;
        }
    }

    return minInd;
};