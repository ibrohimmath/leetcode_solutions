/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:

    int hbool(TreeNode* root){
        if (root == nullptr){
            return 0;
        }        
        return 1 + max(hbool(root -> left), hbool(root -> right));
    }

    bool isBalanced(TreeNode* root) {
        if (root == nullptr) return true;
        return isBalanced(root -> left) && isBalanced(root -> right) && abs(hbool(root -> left) - hbool(root -> right)) <= 1;
    }
};