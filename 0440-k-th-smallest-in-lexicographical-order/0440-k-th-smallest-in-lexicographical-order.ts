function findKthNumber(n: number, k: number): number {
    function count(node: number, n: number) {
        const nodeS: string = node.toString();
        const nS: string = n.toString();

        if (nodeS.length > nS.length || node > n) {
            return 0;
        }

        let counter: number = 1;
        let suffix: string = nS.slice(nodeS.length);
        let pref: number = +nS.slice(0, nodeS.length);
        
        if (node < pref && suffix.length) {
            counter += Math.pow(10, suffix.length);
        } else if (node == pref) {
            counter += (+suffix) + 1;
        } 

        for (let i = 1, ten = 10; i <= suffix.length - 1; i++) {
            counter += ten;
            ten *= 10;
        }
        return counter;
    }

    function find(node: number, k: number) {
        for (let i = 0; i <= 9; i++) {
            if (node * 10 + i == 0) continue;
            const c: number = count(node * 10 + i, n);
            if (k == 1) {
                return node * 10 + i;
            }
            if (c >= k) {
               return find(node * 10 + i, k - 1); 
            } else {
                k -= c;
            }
        }
    }

    return find(0, k);
};