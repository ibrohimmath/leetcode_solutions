function isLongPressedName(name: string, typed: string): boolean {
    let i: number, j: number;

    for (i = 0, j = 0; i < name.length && j < typed.length; ) {
        const nStr: string = name[i], tStr: string = typed[j];
        if (nStr != tStr) {
            return false;
        }

        let k: number = i;
        while (k < name.length && name[k] == name[i]) k++;

        let z: number = j; 
        while (z < typed.length && typed[z] == typed[j]) z++;

        if (k - i > z - j) {
            return false;
        }

        i = Math.max(i + 1, k);
        j = Math.max(j + 1, z);
    }
    
    if (i >= name.length && j < typed.length || 
        j >= typed.length && i < name.length) {
        return false;
    }
    return true;
} 
