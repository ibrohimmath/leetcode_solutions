// const N: number = 100; 
// const INF: number = 1e18;

// class SegmentTree {
//     tree: number[];

//     constructor() {
//         this.tree = Array(4 * N).fill(-1);
//     }

//     combine(x: number, y: number) {
//         return Math.max(x, y);
//     }

//     updateHelper(idx: number, l: number, r: number, pos: number, val: number) {
//         if (l == r) {
//             this.tree[idx] = val;
//             return;
//         }
//         const mid: number = (l + r) >> 1;
//         if (pos <= mid) {
//             this.updateHelper(idx * 2, l, mid, pos, val);
//         } else {
//             this.updateHelper(idx * 2 + 1, mid + 1, r, pos, val);
//         }
//         this.tree[idx] = this.combine(this.tree[idx * 2], this.tree[idx * 2 + 1]);
//     }

//     update(pos: number, val: number) {
//         this.updateHelper(1, 0, N - 1, pos, val);
//     }

//     findHelper(idx: number, l: number, r: number, val: number) {
//         if (this.tree[idx] < val) {
//             return -1;
//         }
//         if (l == r) {
//             return l;
//         }
//         const mid: number = (l + r) >> 1; 
//         const leftAns: number = this.findHelper(idx * 2, l, mid, val);
//         if (leftAns != -1) {
//             return leftAns;
//         }
//         return this.findHelper(idx * 2 + 1, mid + 1, r, val);
//     }

//     find(val: number) {
//         return this.findHelper(1, 0, N - 1, val);
//     }
// }

// function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
//     const segmentTree = new SegmentTree(); 
//     for (let i = 0; i < baskets.length; i++) {
//         segmentTree.update(i, baskets[i]);
//     }

//     let loss: number = 0;
//     for (const elem of fruits) {
//         const ind: number = segmentTree.find(elem);
//         if (ind == -1) {
//             loss++;
//         } else {
//             segmentTree.update(ind, -1);
//         }
//     }
//     return loss;
// };

const N: number = 1e5;

class SegmentTree {
    tree: number[];
    
    constructor() {
        // Initialize with 0 instead of -1
        this.tree = Array(4 * N).fill(0);
    }
    
    combine(x: number, y: number): number {
        return Math.max(x, y);
    }
    
    updateHelper(idx: number, l: number, r: number, pos: number, val: number): void {
        if (l === r) {
            this.tree[idx] = val;
            return;
        }
        const mid: number = (l + r) >> 1;
        if (pos <= mid) {
            this.updateHelper(idx * 2, l, mid, pos, val);
        } else {
            this.updateHelper(idx * 2 + 1, mid + 1, r, pos, val);
        }
        this.tree[idx] = this.combine(this.tree[idx * 2], this.tree[idx * 2 + 1]);
    }
    
    update(pos: number, val: number): void {
        this.updateHelper(1, 0, N - 1, pos, val);
    }
    
    // Find the leftmost position where capacity >= val
    findHelper(idx: number, l: number, r: number, val: number): number {
        // If the maximum in this range is less than val, no valid position exists
        if (this.tree[idx] < val) {
            return -1;
        }
        
        // If we're at a leaf node, this is our answer
        if (l === r) {
            return l;
        }
        
        const mid: number = (l + r) >> 1;
        
        // Always check left subtree first to get leftmost valid position
        const leftResult: number = this.findHelper(idx * 2, l, mid, val);
        if (leftResult !== -1) {
            return leftResult;
        }
        
        // If left subtree doesn't have a valid position, check right subtree
        return this.findHelper(idx * 2 + 1, mid + 1, r, val);
    }
    
    find(val: number): number {
        return this.findHelper(1, 0, N - 1, val);
    }
}

function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
    const segmentTree = new SegmentTree(); 
    
    // Initialize baskets in the segment tree
    for (let i = 0; i < baskets.length; i++) {
        segmentTree.update(i, baskets[i]);
    }
    
    let unplacedCount = 0;
    
    // Process each fruit
    for (const fruit of fruits) {
        // Find the leftmost basket with sufficient capacity
        const basketIndex = segmentTree.find(fruit);
        
        if (basketIndex === -1) {
            // No available basket can hold this fruit
            unplacedCount++;
        } else {
            // Use this basket by setting its capacity to 0
            segmentTree.update(basketIndex, 0);
        }
    }
    
    return unplacedCount;
}