function vowelMap(x: string) {
    switch (x) {
        case 'a':
            return 0;
        case 'e':
            return 1;
        case 'i':
            return 2;
        case 'o':
            return 3;
        case 'u':
            return 4;
        default:
            return -1;
    }
}

function countOfSubstrings(word: string, k: number): number {
    function rightNearestConstant(pos: number) {
        let l: number = 0, r: number = constantList.length - 1, mid: number; 
        while (l < r) {
            mid = Math.floor((l + r) / 2);
            if (constantList[mid] > pos) {
                r = mid; 
            } else {
                l = mid + 1;
            }
        }

        if (constantList[r] > pos) {
            return constantList[r];
        }
        return word.length;
    }

    let window: number[] = Array(5).fill(0);
    let matched: number = 0;
    let counter: number = 0;
    let constant: number = 0;
    const constantList: number[] = [];
    for (let i = 0; i < word.length; i++) {
        if (vowelMap(word[i]) === -1) {
            constantList.push(i);
        }
    } 

    for (let i = 0, l = 0; i < word.length; i++) {
        const code = vowelMap(word[i]);

        if (code === -1) {
            constant++;
            matched += Number(constant == k);
        }
        else {
            window[code]++;
            matched += Number(window[code] === 1);
        }

        let lCode: number = vowelMap(word[l]);
        while (l <= i && 
            (lCode != -1 && window[lCode] >= 1 || lCode === -1 && constant >= k) && 
            matched >= Number(k > 0) + 5) {
            if (constant === k) {
                counter += rightNearestConstant(i) - i;
                // console.log(l, i, rightNearestConstant(i));
            }
            if (lCode === -1) {
                matched -= Number(constant == k);
                constant--;
            } else {
               matched -= Number(window[lCode] === 1); 
               window[lCode]--;
            }
            lCode = vowelMap(word[++l]);
        } 
    }
    
    return counter;
};