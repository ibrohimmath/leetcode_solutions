function minimumOperations(nums: number[]): number {
    const counter: number[] = Array(101).fill(0);

    const st: Set<number> = new Set();
    for (const item of nums) {
        counter[item]++;
        if (counter[item] > 1)
            st.add(item);
    }

    let ans: number = 0;
    nums.reverse();
    while (nums.length > 0 && st.size > 0) {
        for (let i = 0; i < 3 && nums.length > 0 && st.size > 0; i++) {
            const item = nums.at(-1); 
            if (--counter[item] <= 1) {
                st.delete(item);
            }
            // console.log(item);
            nums.pop();
        }
        // console.log("###");
        ans++;
    }
    return ans;
};