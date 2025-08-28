function minCost(startPos: number[], homePos: number[], rowCosts: number[], colCosts: number[]): number {
    let cost: number = 0;

    let i: number = startPos[0];
    while (i != homePos[0]) {
        i += (homePos[0] - startPos[0]) / Math.abs(homePos[0] - startPos[0]);
        cost += rowCosts[i];
        // console.log(i, "row");
    }

    let j: number = startPos[1];
    while (j != homePos[1]) {
        j += (homePos[1] - startPos[1]) / Math.abs(homePos[1] - startPos[1]);
        cost += colCosts[j];
        // console.log(j, "col"); 
    }

    return cost;
};