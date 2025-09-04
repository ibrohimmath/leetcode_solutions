function findClosest(x: number, y: number, z: number): number {
    const d1: number = Math.abs(z - x), d2: number = Math.abs(z - y);
    if (d1 == d2) {
        return 0;
    }
    if (d1 < d2) {
        return 1;
    }
    return 2;
};