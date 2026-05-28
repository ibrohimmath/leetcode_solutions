class Solution {
    const static inline int N = 5e3 + 1;

    struct TrieNode {
        int l;
        int i;
        TrieNode** children;
    
        TrieNode() : l(N), i(N) {
            children = new TrieNode*[26];
    
            for (int j = 0; j < 26; ++j)
                children[j] = nullptr;
        }
    
        ~TrieNode() {
            for (int j = 0; j < 26; ++j)
                delete children[j];
    
            delete[] children;
        }
    };

    struct Trie {
        TrieNode* root;

        Trie() {
            root = new TrieNode();
        }

        void comp(TrieNode* node, int l, int i) {
            if (l < node->l || l == node->l && i < node->i) {
                node->l = l;
                node->i = i;
            }
        }

        void push(string& w, int i) {
            TrieNode* curr = root;
            const int l = size(w);

            comp(curr, l, i);
            for (int j = l - 1; j >= 0; --j) {
                int ord = w[j] - 'a';
                if (curr->children[ord] == nullptr)
                    curr->children[ord] = new TrieNode();
                curr = curr->children[ord];
                if (curr) comp(curr, l, i);
            }
        }

        int query(string& q) {
            TrieNode* curr = root;
            const int l = size(q);

            int res = curr->i;
            for (int i = l - 1; i >= 0 && curr != nullptr; --i) {
                int ord = q[i] - 'a';
                curr = curr->children[ord];
                if (curr != nullptr) res = curr->i;
            }

            return res;
        } 
    };

public:
    vector<int> stringIndices(vector<string>& wordsContainer, vector<string>& wordsQuery) {
        int n = (int)size(wordsContainer);
        int q = (int)size(wordsQuery);
        vector<int> ans(q);
        Trie trie;

        for (int j = 0; j < n; ++j) {
            trie.push(wordsContainer[j], j);
        }

        for (int i = 0; i < q; ++i) {
            ans[i] = trie.query(wordsQuery[i]);
        }

        delete trie.root;
        return ans;
    }
};

auto init = []() {
    cin.tie(0)->sync_with_stdio(0);
    cout.tie(0);
    return 0;
};