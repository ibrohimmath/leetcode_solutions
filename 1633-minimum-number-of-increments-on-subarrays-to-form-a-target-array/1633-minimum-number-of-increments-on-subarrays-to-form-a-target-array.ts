type Pair = [number, number];
const cmp = (x: Pair, y: Pair) => x[0] - y[0];

function minNumberOperations(target: number[]): number {
    const n: number = target.length;
    let mnInd: number = 0;

    const INF = 1000 * 1000 * 1000;
    const pq = new PriorityQueue<Pair>(cmp);
    const dp: number[] = Array(n).fill(INF);
    const vis: boolean[] = Array(n).fill(false);

    for (let i = 0; i < n; i++) {
        if (target[i] < target[mnInd]) {
            mnInd = i;
        }
    }
    dp[mnInd] = target[mnInd];

    let stack: number[] = [];
    const g: number[][] = Array.from({ length: n }, (_, ind) => [ind]);
    for (let i = 0; i < n; i++) {
        while (stack.length && target[stack.at(-1)] > target[i]) {
            stack.pop();
        }
        if (stack.length) {
            g[stack.at(-1)].push(i);
            // g[i].push(stack.at(-1));
        }
        // console.log(dp[i], i, target[i]);
        stack.push(i);
    }
    // console.log();

    stack = [];
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && target[stack.at(-1)] > target[i]) {
            stack.pop();
        }
        if (stack.length) {
            g[stack.at(-1)].push(i);
            // g[i].push(stack.at(-1));
        }
        // console.log(dp[i], i, target[i]);
        stack.push(i);
    }

    // g.sort((lstX, lstY) => target[lstX[0]] - target[lstY[0]]);
    // console.log(g);
    // for (const lst of g) {
    //     const ind = lst[0];
    //     if (ind == mnInd) continue;
    //     for (let j = 1; j < lst.length; j++) {
    //         if (dp[lst[j]] === INF) continue;
    //         dp[ind] = Math.min(dp[ind], target[ind] - target[lst[j]]); 
    //     }
    // } 

    // console.log(g);
    pq.enqueue([dp[mnInd], mnInd]);
    for (let i = 0; i < n; i++) {
        if (mnInd != i && target[mnInd] == target[i]) {
            dp[i] = 0;
            pq.enqueue([dp[i], i]);
        }
    }
    while (!pq.isEmpty()) {
        const [ops, node] = pq.dequeue();
        if (ops > dp[node] || vis[node]) continue;
        vis[node] = true;

        for (const adjNode of g[node]) {
            if (adjNode == mnInd || adjNode == node || vis[adjNode] || dp[node] == INF) continue;
            if (dp[adjNode] > target[adjNode] - target[node]) {
                dp[adjNode] = target[adjNode] - target[node];
                pq.enqueue([dp[adjNode], adjNode]);
            }
        }
    }

    // console.log(dp);

    return dp.reduce((acc, item) => acc + item, 0);
};