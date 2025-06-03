function maxCandies(status: number[], candies: number[], keys: number[][], containedBoxes: number[][], initialBoxes: number[]): number {
    const n: number = status.length;
    
    const vis: boolean[] = Array(n).fill(false);
    let l: number = 0;
    const queue: number[] = [...initialBoxes.filter(item => status[item] == 1)];
    let waiting: number[] = [...initialBoxes.filter(item => status[item] == 0)];

    let ans: number = 0; 
    while (l < queue.length) {
        const node: number = queue[l++];

        if (vis[node] || !status[node]) continue;
        vis[node] = true;
        // console.log("added", node, candies[node]);

        ans += candies[node];
            
        for (const adjNode of keys[node]) {
            status[adjNode] = 1;
            // console.log("opened", adjNode, status[adjNode]);
        }

        waiting = waiting.filter(item => {
            if (!status[item]) return true;
            queue.push(item);
            return false;
        });

        for (const adjNode of containedBoxes[node]) {
            if (vis[adjNode]) continue;
            if (!status[adjNode]) {
                waiting.push(adjNode);
            } else {
                queue.push(adjNode);
            }
        }
    }

    return ans;
};