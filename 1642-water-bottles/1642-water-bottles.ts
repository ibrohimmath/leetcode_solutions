function numWaterBottles(numBottles: number, numExchange: number): number {
    let drunk: number = 0, emptyBottles: number = 0;
    while (numBottles > 0) {
        drunk += numBottles;
        emptyBottles = numBottles + emptyBottles;
        numBottles = Math.floor(emptyBottles / numExchange);
        emptyBottles %= numExchange;

    }
    
    return drunk;
};