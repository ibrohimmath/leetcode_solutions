function goodTriplets(nums1: number[], nums2: number[]): number {
    class SegmentTree {
        n: number; 
        tree: number[];

        constructor(n: number) {
            this.n = n;
            this.tree = Array(4 * n).fill(0);
        }

        clear() {
            this.tree.forEach((_, ind) => this.tree[ind] = 0);
        }

        updateHelper(idx: number, l: number, r: number, pos: number, val: number) {
            if (l === r) {
                this.tree[idx] += val;
                return;
            }
            const mid: number = Math.floor((l + r) / 2);
            if (pos <= mid) {
                this.updateHelper(idx * 2, l, mid, pos, val);
            } else {
                this.updateHelper(idx * 2 + 1, mid + 1, r, pos, val);
            }
            this.tree[idx] = this.tree[idx * 2] + this.tree[idx * 2 + 1];
        }

        queryHelper(idx: number, l: number, r: number, ql: number, qr: number) {
            if (qr < l || ql > r) {
                return 0;
            }
            if (ql <= l && r <= qr) {
                return this.tree[idx];
            }
            const mid: number = Math.floor((l + r) / 2);
            return this.queryHelper(idx * 2, l, mid, ql, qr) + this.queryHelper(idx * 2 + 1, mid + 1, r, ql, qr);
        }

        update(pos: number, val: number) {
            this.updateHelper(1, 0, this.n - 1, pos, val);
        }

        query(ql: number, qr: number) {
            return this.queryHelper(1, 0, this.n - 1, ql, qr);
        }
    }

    const n: number = nums1.length;
    const segTree = new SegmentTree(n);
    const pref: number[] = Array(n).fill(0);
    const suff: number[]= Array(n).fill(0);

    const pos: number[] = Array(n).fill(-1);
    for (let i = 0; i < n; i++) {
        pos[nums2[i]] = i;
    }

    for (let i = 0; i < n; i++) {
        const position: number = pos[nums1[i]];
        const reversed: number = segTree.query(position, n);
        // console.log(i, reversed, "pref");
        pref[i] = i - reversed;
        segTree.update(position, 1);
    }
    segTree.clear();
    for (let i = n - 1; i >= 0; i--) {
        const position: number = pos[nums1[i]];
        const reversed: number = segTree.query(0, position);
        // console.log(i, reversed, "suff");
        suff[i] = n - i - 1 - reversed;
        segTree.update(position, 1);
    }
    let ans: number = 0;
    for (let i = 0; i < n; i++) {
        // console.log(pref[i], suff[i]);
        ans += pref[i] * suff[i];
    }
    return ans;
};