function numberOfPairs(points: number[][]): number {
    points.sort((pa, pb) => {
        if (pa[0] != pb[0]) return pa[0] - pb[0];
        return pb[1] - pa[1];
    });

    const n: number = points.length;
    let counter: number = 0;
    for (let i = 1; i < n; i++) {
        let greater: number = points[i][1];

        let j: number = i - 1;
        while (j >= 0 && points[j][1] < points[i][1]) {
            j--;
        }

        if (j < 0) {
            continue;
        }
        // console.log(i, points[i][1], points[j][1]);
        greater = points[j][1];
        counter++;
        j--;

        while (j >= 0) {
            if (points[j][1] >= greater || points[j][1] < points[i][1]) {
                j--;
                continue; 
            }
            greater = points[j][1];
            // console.log(i, points[i][1], greater);
            j--;
            counter++;
        }
    }

    return counter;
};