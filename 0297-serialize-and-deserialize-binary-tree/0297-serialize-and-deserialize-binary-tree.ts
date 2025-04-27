/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
    if (root == null) return "";
    let ans: string = "(" + String(root.val);
    if (root.left && root.right) {
        ans += "-" + serialize(root.left) + "|" + serialize(root.right);
    } else if (root.left) {
        ans += "-" + serialize(root.left) + "|" + "n";
    } else if (root.right) {
        ans += "-" + "n" + "|" + serialize(root.right); 
    } 
    ans += ")";
    console.log(ans);
    return ans;
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    if (data.length == 0 || data == "n") return null;

    // clearing from brackets
    data = data.slice(1, -1);
    console.log("destructure", data);

    let isNeg: boolean = (data[0] == '-');
    if (isNeg) data = data.slice(1);

    let i: number = 0;
    while (i < data.length && !isNaN(+data[i])) {
       i++; 
    }
    
    let val: number = Number(data.slice(0, i));
    if (isNeg) val *= -1;
    i++;

    if (i >= data.length) {
        return new TreeNode(val);
    } 
    if (data[i] == "n") {
        return new TreeNode(val, 
            null, 
            deserialize(data.slice(i + 2))
        );
    }
    let brackets: number = 1;
    i++;
    let str: string = "(";
    do {
       str += data[i];
       brackets += (data[i] == '(' ? 1 : (data[i] == ')' ? -1 : 0));
       i++;
    } while (i < data.length && brackets != 0);
    return new TreeNode(val,
        deserialize(str),
        deserialize(data.slice(i + 1)),
    ); 
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */