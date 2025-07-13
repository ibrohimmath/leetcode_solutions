function intervalIntersection(firstList: number[][], secondList: number[][]): number[][] {
    const ans: number[][] = []; 

    for (let i: number = 0, j: number = 0; i < firstList.length && j < secondList.length; ) {
        if (Math.max(firstList[i][0], secondList[j][0]) <= 
            Math.min(firstList[i][1], secondList[j][1])) {
            ans.push([Math.max(firstList[i][0], secondList[j][0]), Math.min(firstList[i][1], secondList[j][1])]);
        }
        if (firstList[i][1] == secondList[j][1]) {
            i++;
            j++;
        } else if (firstList[i][1] < secondList[j][1]) {
            i++;
        } else {
            j++;
        }
    }

    return ans;
};