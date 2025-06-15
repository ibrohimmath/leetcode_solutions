function minMaxDifference(num: number): number {
    const original: number[] = num.toString().split('').map(Number); 
    let mn: number = -1, mx: number = -1; 

    for (let i = 0; i < original.length; i++) {
        if (original[i] != 9 && mx == -1) {
            mx = original[i]; 
        }
        if (original[i] != 0 && mn == -1) {
            mn = original[i];
        }
    }

    if (mx == -1) {
        return num;
    } else if (mn == -1) {
        return Math.pow(10, original.length) - 1; 
    }
    
    const maxNum: number = +original.map(d => d == mx ? 9 : d).join('');
    const minNum: number = +original.map(d => d == mn ? 0 : d).join('');
    console.log(mx, mn, maxNum, minNum);
    return maxNum - minNum; 
};