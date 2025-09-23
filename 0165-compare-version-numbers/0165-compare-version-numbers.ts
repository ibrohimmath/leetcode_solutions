function compareVersion(version1: string, version2: string): number {
    const lst1: number[] = version1.split('.').map(Number);
    const lst2: number[] = version2.split('.').map(Number);
    
    let i: number = 0, j: number = 0;
    while (i < lst1.length && j < lst2.length) {
        if (lst1[i] < lst2[j]) {
            return -1;
        } else if (lst1[i] > lst2[j]) {
            return 1;
        }
        i++;
        j++;
    }
    if (i < lst1.length && lst1.slice(i).some(x => x > 0)) {
        return 1;
    }
    if (j < lst2.length && lst2.slice(j).some(x => x > 0)) {
        return -1;
    }
    return 0;
};