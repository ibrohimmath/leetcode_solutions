function canReach(arr: number[], start: number): boolean {
    function dfs(i: number) {
        if (vis[i]) return arr[i] == 0;
        vis[i] = true; 
        if (arr[i] == 0) {
            return true;
        }

        const g: number[] = [i + arr[i], i - arr[i]];
        for (const item of g) {
            if (item < 0 || item >= n) continue;
            if (dfs(item)) {
                return true;
            }
        }

        return false;
    }

    const n: number = arr.length;
    const vis = Array<boolean>(n).fill(false);
    const ans = Array<boolean>(n).fill(false);
    let found: boolean = false; 

    return dfs(start);
};