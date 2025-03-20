function minimumCost(n: number, edges: number[][], query: number[][]): number[] {
    class DSU {
        public n: number;
        public parent: number[];
        public sz: number[];
        public acc: number[];

        constructor(n: number) {
            this.n = n;
            this.parent = Array.from({length: n + 1}, (_, ind) => ind);
            this.sz = Array(n + 1).fill(1);
            this.acc = Array(n + 1).fill(Math.pow(2, 31) - 1);
        }

        public find(node: number) {
            if (node === this.parent[node]) {
                return node;
            }
            return this.parent[node] = this.find(this.parent[node]);
        }

        public same(x: number, y: number) {
            return this.find(x) === this.find(y);
        }

        public union(x: number, y: number, val: number) {
            let px: number = this.find(x);
            let py: number = this.find(y);

            if (this.sz[px] > this.sz[py]) {
                [px, py] = [py, px];
            }

            this.parent[px] = py;
            this.sz[py] += this.sz[px];
            this.acc[py] &= (this.acc[px] &= val);
        }
    } 
    
    const dsu = new DSU(n); 
    for (const [x, y, w] of edges) {
        dsu.union(x, y, w);
    }

    const ans: number[] = []; 
    for (const [a, b] of query) {
        if (!dsu.same(a, b)) {
            ans.push(-1);
            continue;
        }
        ans.push(dsu.acc[dsu.find(a)]);
    }
    
    return ans;
};