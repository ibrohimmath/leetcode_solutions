function partitionLabels(s: string): number[] {
    function code(x: string) {
        return x.charCodeAt(0) - 'a'.charCodeAt(0);
    } 

    const n: number = s.length;
    const alpha = Array<number>(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        const charCode: number = code(s[i]);
        alpha[charCode]++;
    }

    const partitionList: number[] = [];
    for (let i = 0; i < n; i++) {
        const st = new Set<number>([code(s[i])]);
        const window = Array<number>(26).fill(0);
        let j: number = i;
        while (j < n && st.size > 0) {
            const charCode: number = code(s[j]);
            st.add(charCode);
            window[charCode]++;
            if (window[charCode] === alpha[charCode]) {
                st.delete(charCode);
            }
            j++;
        }
        // console.log(i, j);
        if (j > i) {
            partitionList.push(j - i);
            i = j - 1;
        }
    }

    return partitionList;
};