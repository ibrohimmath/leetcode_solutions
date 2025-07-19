function removeSubfolders(folder: string[]): string[] {
    const st: Set<string> = new Set();

    folder.sort((x, y) => x.length - y.length);
    // console.log(folder);

    outer: for (const str of folder) {
        let newStr: string = "";
        for (let i = 0; i < str.length; i++) {
            newStr += str[i];
            if (i + 1 < str.length && str[i + 1] == '/' && st.has(newStr)) {
                continue outer;
            }
        }
        if (newStr.length) {
            st.add(newStr);
        }
    }

    return Array.from(st);
};