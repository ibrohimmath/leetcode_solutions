function kthSmallestProduct(nums1: number[], nums2: number[], k: number): number {
    function separateList(nums: number[]): [number[], number[]] {
        const pos: number[] = [], neg: number[] = [];
        let nulls: number = 0;

        for (const item of nums) {
            if (item > 0) {
                pos.push(item);
            } else {
                neg.push(item);
            }
        }

        pos.sort((x, y) => x - y);
        neg.sort((x, y) => x - y);
        
        return [pos, neg];
    }

    function countProductPairs(prod: number, A: number[], B: number[]) {
        let counter: number = 0;

        for (let i = 0, j = B.length - 1; i < A.length; i++) {
            while (j >= 0 && A[i] * B[j] > prod) j--;
            counter += j + 1;
        }

        return counter;
    }

    const [pos1, neg1] = separateList(nums1);
    const [pos2, neg2] = separateList(nums2);

    const negCount: number = neg1.length * pos2.length + neg2.length * pos1.length;  
    if (k <= negCount) {
        pos1.reverse();
        pos2.reverse();

        let l: number = -1e10, r: number = 0, mid;
        while (l < r) {
            mid = Math.floor((l + r) / 2);
            if (countProductPairs(mid, pos1, neg2) + countProductPairs(mid, pos2, neg1) >= k) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }

        return r;
    } else {
        k -= negCount;

        neg1.reverse();
        neg2.reverse();

        let l: number = 0, r: number = 1e10, mid;
        while (l < r) {
            mid = Math.floor((l + r) / 2);
            if (countProductPairs(mid, pos1, pos2) + countProductPairs(mid, neg1, neg2) >= k) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }

        return r;
    }
};