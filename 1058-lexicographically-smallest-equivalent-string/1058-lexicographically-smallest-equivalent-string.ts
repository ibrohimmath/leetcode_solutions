function smallestEquivalentString(s1: string, s2: string, baseStr: string): string {
    function getCode(x: string) {
        return x.charCodeAt(0) - 'a'.charCodeAt(0);
    }
    function getAlpha(x: number) {
        return String.fromCharCode(x + 'a'.charCodeAt(0));
    }

    class DSU {
        public parent: number[];

        constructor() {
            this.parent = new Array(26).fill(-1).map((_, i) => i);
        }
        
        find(node: number) {
            if (node == this.parent[node]) return node;
            return this.parent[node] = this.find(this.parent[node]);
        }

        unite(a: number, b: number) {
            let pa: number = this.find(a), pb: number = this.find(b);
            if (pa == pb) {
                return;
            }
            if (pa > pb) {
                [pa, pb] = [pb, pa];
            }
            this.parent[pb] = pa;
        }
    }

    const dsu = new DSU();
    for (let i = 0; i < s1.length; i++) {
        const code1: number = getCode(s1[i]), code2: number = getCode(s2[i]);
        dsu.unite(code1, code2);
    }
    return baseStr.split('').map(c => dsu.find(getCode(c))).map(getAlpha).join(''); 
};