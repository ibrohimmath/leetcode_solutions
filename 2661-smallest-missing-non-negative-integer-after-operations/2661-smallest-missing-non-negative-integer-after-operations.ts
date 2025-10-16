function findSmallestInteger(nums: number[], value: number): number {
    const mp: Map<number, number> = new Map();
    const set = (key: number, val: number) => {
        mp.set(key, val);
    };
    const get = (key: number) => {
        return mp.get(key) ?? 0;
    };
    for (const item of nums) {
        let remain = 0;
        if (item < 0) {
            remain = (value - (Math.abs(item) % value)) % value;
        } else if (item > 0) {
            remain = item % value;
        }
        set(remain, get(remain) + 1);
    }
    // console.log("check");
    for (let i = 0; i < nums.length; i++) {
        const remain = i % value;
        if (get(remain) == 0) return i;  
        set(remain, get(remain) - 1);
    }
    return nums.length;
};