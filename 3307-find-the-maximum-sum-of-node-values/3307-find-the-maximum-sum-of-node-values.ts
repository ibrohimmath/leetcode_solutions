function maximumValueSum(nums: number[], k: number, edges: number[][]): number {
    function dfs(node: number, lst: number[]): void {
        if (vis[node]) return;
        vis[node] = true;
        lst.push(node);

        for (const adjNode of g[node]) {
            dfs(adjNode, lst);
        }
    }

    function process(lst: number[]) {
        const pairArr: [number, number][] = lst.map(ind => {
           const item = nums[ind]; 
           return [item, (item ^ k) - item];
        });
        pairArr.sort((x, y) => y[1] - x[1]);
        
        let sm: number = 0;
        for (const [item, _] of pairArr) {
            sm += item;
        }
        const posArr = pairArr.filter(pair => pair[1] > 0);
        const negArr = pairArr.filter(pair => pair[1] < 0); 
        if ((posArr.length & 1) == 0) {
            sm += posArr.reduce((acc, item) => acc + item[1], 0);
        } else if (negArr.length > 0 && posArr.at(-1)[1] + negArr[0][1] >= 0) {
            sm += posArr.reduce((acc, item) => acc + item[1], 0);
            sm += negArr[0][1];
        } else {
            sm += posArr.slice(0, (posArr.length >> 1) << 1).reduce((acc, item) => acc + item[1], 0);
        } 

        return sm;
    }

    const n: number = nums.length; 
    const vis = Array<boolean>(n).fill(false);
    const g: number[][] = Array.from({length: n}, () => []);

    for (const edge of edges) {
        g[edge[0]].push(edge[1]);
        g[edge[1]].push(edge[0]);
    }

    let ans: number = 0; 
    for (let i = 0; i < n; i++) {
        const lst: number[] = [];
        dfs(i, lst);
        ans += process(lst);
    }

    return ans;
};