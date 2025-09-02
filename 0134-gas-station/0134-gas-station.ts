function canCompleteCircuit(gas: number[], cost: number[]): number {
    const sum = (args) => args.reduce((item, acc) => acc + item, 0);

    const N: number = gas.length;
    if (sum(gas) < sum(cost)) {
        return -1;
    }

    let ind = 0, temp: number = gas[0];
    for (let i = 1; i < N; i++) {
        if (temp < cost[i - 1]) {
            temp = gas[i]; 
            ind = i;
            continue;
        } 
        temp += gas[i] - cost[i - 1];
    } 

    return ind;
};