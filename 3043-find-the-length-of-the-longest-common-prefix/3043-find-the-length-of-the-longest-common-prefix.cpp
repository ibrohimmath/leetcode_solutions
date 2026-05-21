class Solution {
    static struct TrieNode {
        short side;
        TrieNode* children[10];

        TrieNode() {
            for (short i = 0; i < 10; ++i) this->children[i] = nullptr;
            this->side = 0;
        }
    };

    static struct Trie {
        TrieNode* root;

        Trie() {
            this->root = new TrieNode();
        }

        void push(int num, int side = 0) {
            // std::cout << num << ' ' << side << " number\n";
            TrieNode* curr = this->root;
            string snum = to_string(num);

            for (short i = 0; i < size(snum); ++i) {
                short digit = snum[i] - '0';
                if (curr->children[digit] == nullptr) {
                    curr->children[digit] = new TrieNode();
                }
                curr = curr->children[digit];
                curr->side |= 1 << side;
                // std::cout << digit << ' ' << curr->side << " push\n";
            }
        }

        int getCommonLength(int num) {
            TrieNode* curr = this->root;
            string snum = to_string(num);

            int commonLength = 0;
            for (short i = 0; i < size(snum) && curr != nullptr; ++i) {
                short digit = snum[i] - '0';
                curr = curr->children[digit];
                if (curr == nullptr || curr->side != 3) break;
                // std::cout << 
                ++commonLength;
            }

            return commonLength;
        }
    };

public:
    static int longestCommonPrefix(vector<int>& arr1, vector<int>& arr2) {
        int mx = 0;
        Trie trie;
        for (const int& item : arr1) {
            trie.push(item);
        }
        for (const int& item : arr2) {
            trie.push(item, 1);
            mx = max(mx, trie.getCommonLength(item));
        }
        return mx;
    }
};