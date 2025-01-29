/*
 * @lc app=leetcode id=2076 lang=typescript
 *
 * [2076] Process Restricted Friend Requests
 */

// @lc code=start
class DSU {
    sz: number[];
    parent: number[];

    constructor(n: number) {
        this.sz = Array(n + 1).fill(1);
        this.parent = Array.from({length: n + 1}, (_, ind) => ind);
    }

    public find_set(node: number) {
        if (this.parent[node] === node) {
            return node;
        }
        return this.parent[node] = this.find_set(this.parent[node]);
    }

    public union_sets(x: number, y: number) {
        x = this.find_set(x);
        y = this.find_set(y);

        if (x === y) {
            return;
        }

        if (this.sz[x] > this.sz[y]) {
            [x, y] = [y, x];
        }
        this.sz[y] += this.sz[x];
        this.parent[x] = y;
    }
}

function friendRequests(n: number, restrictions: number[][], requests: number[][]): boolean[] {
    const dsu = new DSU(n);
    const ans: boolean[] = [];
    for (const pair of requests) {
        const px: number = dsu.find_set(pair[0]), py: number = dsu.find_set(pair[1]); 
        let valid: boolean = true; 
        for (const restPair of restrictions) {
            const x: number = dsu.find_set(restPair[0]), y: number = dsu.find_set(restPair[1]);
            if (x === px && y === py || x === py && y === px) {
                valid = false;
                break;
            }
        }
        if (valid) {
            dsu.union_sets(px, py);
        }
        ans.push(valid);
    }
    return ans;
};
// @lc code=end

