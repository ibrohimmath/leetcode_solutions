function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const N: number = 2001;
    const n: number = new Set(prerequisites.flat()).size;

    const indegree = Array<number>(N).fill(0);
    const g: number[][] = Array.from({length: N}, () => []);
    for (const [to, from] of prerequisites) {
        g[from].push(to);
        indegree[to]++;
    } 

    const q: number[] = [];
    for (let i = 0; i < N; i++) {
        if (g[i].length > 0 && indegree[i] == 0) {
           q.push(i); 
        }
    }

    const vis = Array<boolean>(N).fill(false);
    const schedule: number[] = [];
    while (q.length > 0) {
        const node: number = q.shift();
        vis[node] = true;
        schedule.push(node);

        for (const adjNode of g[node]) {
            if (--indegree[adjNode] == 0) {
                q.push(adjNode);
            }
        }
    }

    if (schedule.length != n) {
        return [];
    } 
    
    for (let i = 0; i < numCourses; i++) {
        if (vis[i]) continue;
        schedule.push(i);
    }

    return schedule;
};