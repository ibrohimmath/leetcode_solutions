function finalValueAfterOperations(operations: string[]): number {
    let val: number = 0;   
    for (const op of operations) {
        if (op == 'X++' || op == '++X') {
            val++;
        } else {
            val--;
        }
    }
    return val;
};