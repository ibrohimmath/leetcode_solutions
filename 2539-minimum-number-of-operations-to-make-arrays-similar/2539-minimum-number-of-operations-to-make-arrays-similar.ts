function makeSimilar(nums: number[], target: number[]): number {
    const numSort = (x, y) => x - y; 
    function separate(lst: number[]) {
        const evens: number[] = lst.filter(elem => elem % 2 == 0);
        const odds: number[] = lst.filter(elem => elem % 2 == 1); 
        evens.sort(numSort);
        odds.sort(numSort);
        return [evens, odds];
    }

    const [numEven, numOdd] = separate(nums);
    const [targetEven, targetOdd] = separate(target);
    let increment: number = 0, decrement: number = 0;

    for (let i = 0; i < numEven.length; i++) {
        if (numEven[i] > targetEven[i]) {
            increment += (numEven[i] - targetEven[i]) / 2;
        } else {
            decrement += (targetEven[i] - numEven[i]) / 2;
        }
    }

    for (let i = 0; i < numOdd.length; i++) {
        if (numOdd[i] > targetOdd[i]) {
            increment += (numOdd[i] - targetOdd[i]) / 2;
        } else {
            decrement += (targetOdd[i] - numOdd[i]) / 2;
        }
    }

    console.log(increment, decrement);
    return increment;
};