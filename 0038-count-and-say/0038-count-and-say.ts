function countAndSay(n: number): string {
    let row: number[] = [1];  
    for (let i = 1; i <= n - 1; i++) {
        const temp: number[] = [];
        for (let j = 0; j < row.length; j++) {
            let times: number = 0;
            let k = j;
            while (k < row.length && row[j] == row[k]) {
                times++;
                k++;
            }
            temp.push(times);
            temp.push(row[j]);
            if (k > j) j = k - 1;
        }
        row = temp;
    }
    return row.join('');
};