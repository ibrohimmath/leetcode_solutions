function minCost(basket1: number[], basket2: number[]): number {
    const counter: Map<number, number> = new Map();
    let mn: number = 1e9;

    for (const i in basket1) {
        counter.set(basket1[i], (counter.get(basket1[i]) ?? 0) + 1);
        counter.set(basket2[i], (counter.get(basket2[i]) ?? 0) - 1);
        mn = Math.min(mn, basket1[i], basket2[i]);
    }
    
    const A: number[] = [], B: number[] = []; 
    for (const [item, times] of counter) {
        if (Math.abs(times) % 2 == 1) {
            return -1;
        }
        for (let t = Math.abs(times / 2); t >= 1; t--) {
            if (times > 0) {
                A.push(item);
            } else if (times < 0) {
                B.push(item);
            }
        }
    }

    A.sort((x, y) => x - y);
    B.sort((x, y) => y - x);
    
    let cost: number = 0;
    for (const i in A) {
        cost += Math.min(2 * mn, Math.min(A[i], B[i]));    
    }

    return cost;
};