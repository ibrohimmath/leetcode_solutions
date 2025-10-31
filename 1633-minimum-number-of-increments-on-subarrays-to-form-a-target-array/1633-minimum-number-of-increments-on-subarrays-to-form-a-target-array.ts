function minNumberOperations(target: number[]): number {
   let minOps: number = target[0]; 
    for (let i = 1; i < target.length; i++) {
        minOps += Math.max(target[i] - target[i - 1], 0);
    }
    return minOps;
};