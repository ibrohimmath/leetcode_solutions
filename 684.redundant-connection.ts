/*
 * @lc app=leetcode id=684 lang=typescript
 *
 * [684] Redundant Connection
 */

// @lc code=start
function findRedundantConnection(edges: number[][]): number[] {
    class DSU {
        public sz: number[]; 
        public parent: number[];

        constructor(n: number) {
            this.sz = Array(n).fill(1);
            this.parent = Array.from({length: n}, (_, ind) => ind);
        }

        private find_set(node: number) {
            if (this.parent[node] === node) {
                return node;
            }
            return this.parent[node] = this.find_set(this.parent[node]);
        }

        public union_sets(x: number, y: number) {
            x = this.find_set(x);
            y = this.find_set(y);
            if (x === y) return false;
            if (this.sz[x] >= this.sz[y]) {
                [x, y] = [y, x];
            }
            this.sz[y] += this.sz[x];
            this.parent[x] = y;
            return true;
        }
    }

    const N: number = 1e3 + 1;
    let a: number = -1, b: number = -1;
    const dsu = new DSU(N);
    for (const edge of edges) {
        const connect = dsu.union_sets(edge[0], edge[1]);
        if (!connect) {
            a = edge[0];
            b = edge[1];
        }
    } 

    return [a, b];
};
// @lc code=end

