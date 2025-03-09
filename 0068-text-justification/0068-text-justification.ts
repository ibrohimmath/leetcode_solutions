function fullJustify(words: string[], maxWidth: number): string[] {
    function buildLine(i: number, j: number, spaces: number, isEnd: boolean) {
        let line: string = words[i++];
        let times = j - i; 
        let gapSize: number = (!isEnd ? Math.floor(spaces / times) : 1);
        let remain: number = times > 0 ? spaces % times : 0;
        console.log(times, remain, isEnd);
        while (i < j) {
            if (isEnd) {
                line += ' '; 
                spaces--;
            } else {
                line += ' '.repeat(gapSize);
                spaces -= gapSize;
                if (remain) {
                    line += ' ';
                    remain--;
                    spaces--;
                }
            }
            line += words[i++];
        }
        if (spaces) {
            line += ' '.repeat(spaces);
        }
        return line;
    }

    const n: number = words.length; 
    const lst: string[] = [];
    for (let i = 0; i < n; ) {
        let j: number = i, chars: number = 0;
        while (j < n && chars + words[j].length + j - i <= maxWidth) {
            chars += words[j].length;
            j++;
        }
        lst.push(buildLine(i, j, maxWidth - chars, j >= n));
        i = j;
    }

    return lst;
}; 