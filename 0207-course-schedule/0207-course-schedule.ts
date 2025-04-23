function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const n: number = new Set(prerequisites.flat()).size;
    const g: number[][] = Array.from({length: 5001}, () => []);
    const indegree = Array<number>(5001).fill(0);

    for (const [from, to] of prerequisites) {
        indegree[to]++;
        g[from].push(to);
    }

    const queue: number[] = []; 
    for (let i = 0; i <= 5000; i++) {
        if (g[i].length && indegree[i] == 0) {
           queue.push(i); 
        }
    }

    if (queue.length == 0 && prerequisites.length > 0) {
        return false;
    }
    if (prerequisites.length == 0) {
        return true;
    }

    let res: number = 0;
    while (queue.length > 0) {
        const node = queue.shift();
        res++;

        for (const adjNode of g[node]) {
            if (--indegree[adjNode] == 0) {
                queue.push(adjNode);    
            }
        }
        
    }

    console.log(res);
    return res == n;
};