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

function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
    function dfs(root: TreeNode | null, level: number = 0) {
        if (root == null) {
            return;
        }

        traverseList.push([root, level]);
        
        if (root.left) {
            dfs(root.left, level + 1);
            traverseList.push([root, level]);
        }

        if (root.right) {
            dfs(root.right, level + 1);
            traverseList.push([root, level]);
        }
    }

    const traverseList: [TreeNode, number][] = [];
    dfs(root);

    const maxLevel: number = Math.max(...traverseList.map(pair => pair[1]));
    const deepLeavesInd: number[] = [];
    for (let i = 0; i < traverseList.length; i++) {
        if (traverseList[i][1] == maxLevel) {
            deepLeavesInd.push(i);
        }
    }

    let leftInd: number = deepLeavesInd[0];
    for (let i = 1; i < deepLeavesInd.length; i++) {
        let rightInd: number = deepLeavesInd[i]; 
        let ind: number = traverseList[leftInd][1] < traverseList[rightInd][1] ? leftInd : rightInd;
        for (let j = leftInd + 1; j < rightInd; j++) {
            if (traverseList[j][1] < traverseList[ind][1]) {
                ind = j;
            }
        }
        leftInd = ind;
    }

    return traverseList[leftInd][0];
};