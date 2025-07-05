function findLucky(arr: number[]): number {
    arr.sort((x, y) => x - y);

    let mx: number = -1;
    for (let i = 0; i < arr.length; ) {
        let j: number = i; 
        while (j < arr.length && arr[i] == arr[j]) {
            j++;
        }
        if (j - i == arr[i]) {
            mx = Math.max(mx, arr[i]);
        }
        i = Math.max(i + 1, j);
    }

    return mx;
};