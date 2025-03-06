function simplifyPath(path: string): string {
    const directories: string[] = [];
    let pathName: string = "";
    for (let i = 0; i < path.length; i++) {
        if (path[i] === '/') {
            if (pathName.length && pathName !== '.') {
                directories.push(pathName);
            }
            pathName = "";
        } else {
           pathName += path[i];
        }
    }
    if (pathName.length && pathName !== '.') {
        directories.push(pathName);
    }

    let newDirectories: string[] = []; 
    for (let i = directories.length - 1; i >= 0; i--) {
        newDirectories.push(directories[i]);
        if (newDirectories.length > 1 && newDirectories.at(-1) != '..' && newDirectories.at(-2) == '..') {
            newDirectories.pop();
            newDirectories.pop();
        }
    }

    newDirectories = newDirectories.filter(d => d !== '..');
    return '/' + newDirectories.reverse().join('/');
};