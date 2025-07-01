function maximumBinaryString(binary: string): string {
    const lst: string[] = binary.split('');
    const firstZeroPos: number = lst.findIndex(b => b == '0');
    const lastZeroPos: number = lst.findLastIndex(b => b == '0');
    if (firstZeroPos == -1) {
        return binary;
    }
    const onesCount: number = lst.slice(firstZeroPos, lastZeroPos).filter(b => b == '1').length;
    return lst.slice(0, firstZeroPos).join('') + '1'.repeat(lastZeroPos - firstZeroPos + 1 - onesCount - 1) + '0' + '1'.repeat(onesCount) + lst.slice(lastZeroPos + 1).join('');
};