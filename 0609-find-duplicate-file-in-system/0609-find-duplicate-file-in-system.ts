function findDuplicate(paths: string[]): string[][] {
    function processFile(file: string): [string, string] {
        const ind = file.indexOf('(');
        return [file.slice(ind + 1, -1), file.slice(0, ind)];
    }

    function processStringInfo(strInfo: string) {
        const [mainPath, ...files] = strInfo.split(' ');

        for (const file of files) {
            const [content, subPath]: [string, string] = processFile(file);
            const fileFullPath: string = mainPath + '/' + subPath;
            
            const lst: string[] = mp.get(content) ?? [];
            lst.push(fileFullPath);
            mp.set(content, lst);
        } 
    }

    const mp: Map<string, string[]> = new Map();
    for (const strInfo of paths) {
        processStringInfo(strInfo);
    }
    return Array.from(mp.values()).filter(lst => lst.length > 1);
};