function avoidFlood(rains: number[]): number[] {
    const cmp = (x: number, y: number) => {
        const lstX: number[] = mapper.get(x) ?? []; 
        const lstY: number[] = mapper.get(y) ?? [];
        
        if (lstX.length > 0 && lstY.length > 0) {
            if (lstX.length != lstY.length) return lstY.length - lstX.length;
            return lstX.at(-1) - lstY.at(-1);
        }
        if (lstX.length == 0 && lstY.length > 0) return 1;
        if (lstY.length == 0 && lstX.length > 0) return -1;
        return counter.get(y) - counter.get(x);
    };

    const n: number = rains.length;

    const used: Set<number> = new Set();
    const mapper: Map<number, number[]> = new Map();
    const counter: Map<number, number> = new Map();
    const pq = new PriorityQueue<number>(cmp);
    for (let i = 0; i < n; i++) {
        if (rains[i] == 0) continue;

        if (!mapper.has(rains[i])) {
            mapper.set(rains[i], []);
        }
        mapper.get(rains[i]).push(i);
        counter.set(rains[i], (counter.get(rains[i]) ?? 0) + 1);
    }

    for (const key of mapper.keys()) {
        mapper.get(key).reverse();
    }
    
    const ans: number[] = Array(n).fill(-1); 
    for (let i = 0; i < n; i++) {
        if (rains[i] == 0) {
            while (!pq.isEmpty() && mapper.has(pq.front())) {
                if (mapper.get(pq.front()).length > 0) {
                    break;
                }
                const usedLake = pq.front();
                mapper.delete(usedLake);
                pq.dequeue();
            }

            if (pq.isEmpty()) {
                ans[i] = 1;
                continue;
            }

            const lake = pq.front();
            // console.log(lake, "dry");
            if (mapper.has(lake) && mapper.get(lake).length > 0) {
                mapper.get(lake).pop();
            }
            if (mapper.has(lake) && mapper.get(lake).length == 0) {
                mapper.delete(lake);
            }
            used.delete(lake);
            pq.dequeue();
            ans[i] = lake; 
        } else {
            // console.log(rains[i], "fill");
            if (used.has(rains[i])) {
                return [];
            }
            used.add(rains[i]);
            if (mapper.has(rains[i]) && mapper.get(rains[i]).length > 0) {
                mapper.get(rains[i]).pop();
                if (mapper.get(rains[i]).length == 0) {
                    mapper.delete(rains[i]);
                }
            }
            counter.set(rains[i], counter.get(rains[i]) - 1);
            pq.enqueue(rains[i]);
            ans[i] = -1;

            // console.log(pq.toArray());
            // for (const item of pq.toArray()) {
            //     console.log(item, (mapper.has(item) ? mapper.get(item) : []), "check pq");
            // }
        }
    }

    return ans;
};