function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
    const n: number = fruits.length;
    const l: number = Math.floor(Math.sqrt(n));
    const m: number = Math.ceil(n / l);

    const block: number[] = Array(m).fill(0);

    let loss: number = 0;
    for (let i = 0; i < n; i++) {
        block[Math.floor(i / l)] = Math.max(block[Math.floor(i / l)], baskets[i]);
    }

    for (const elem of fruits) {
        let blockInd: number = -1;
        for (let j = 0; j < m; j++) {
            if (block[j] >= elem) {
                blockInd = j;
                break;
            }
        }
        if (blockInd == -1) {
            loss++;
            continue;
        }

        block[blockInd] = 0;
        let set: boolean = false;
        for (let i: number = blockInd * l; i < (blockInd + 1) * l && i < n; i++) {
            if (!set && baskets[i] >= elem) {
                baskets[i] = 0;
                set = true;
            } else {
                block[blockInd] = Math.max(block[blockInd], baskets[i]);
            }
        }
    }

    return loss;
};