using namespace std;
using ll = long long;
using ld = long double;
#define all(x) (x).begin(), (x).end()
#define sz(a) (int)((a).size())
#define debug(x) std::cerr << #x << ' ' << x << "\n";
#define each(i, a) for (auto &i : a)

class Solution {
public:
    template<typename ...Args>
    void println(Args ...args) {
        ((cout << args << ' '), ...); 
        cout << '\n';
    }

    string removeSubstring(string s, int k) {
        const int n = sz(s);
        vector<int> lst;
        string ans; 
        
        for (int i = 0; i < n; ) {
            int open = 0, close = 0;

            int j = i;
            while (j < n && s[j] == '(') {
                open++;
                j++;
            }
            i = j;

            while (j < n && s[j] == ')') {
                close++;
                j++;
            }
            i = j;
            
            int remove;
            if (open >= close) {
                remove = close / k * k;
            } else {
                remove = open / k * k;
            }
            open -= remove;
            close -= remove;

            if (open) {
                if (lst.size() > 0 && lst.back() > 0) {
                    lst.back() += open;
                } else {
                    lst.push_back(open);
                }
            }
            if (close) {
                if (lst.size() > 0 && lst.back() < 0) {
                    lst.back() += -close;
                } else {
                    lst.push_back(-close);
                }
            }

            while (
                lst.size() > 1 && lst.back() < 0 &&
                abs(lst.back()) >= k &&
                min(abs(lst.back()), lst[sz(lst) - 2]) >= k
            ) {
                close = abs(lst.back()); lst.pop_back();
                open = lst.back(); lst.pop_back();

                if (open >= close) {
                    remove = close / k * k;
                } else {
                    remove = open / k * k;
                }
                open -= remove;
                close -= remove;

                if (open) {
                    if (lst.size() > 0 && lst.back() > 0) {
                        lst.back() += open;
                    } else {
                        lst.push_back(open);
                    }
                }
                if (close) {
                    if (lst.size() > 0 && lst.back() < 0) {
                        lst.back() += -close;
                    } else {
                        lst.push_back(-close);
                    }
                }
            }
        }

        for (int ind = 0; ind < lst.size(); ind++) {
            bool isOpen = lst[ind] > 0;
            int t = abs(lst[ind]);
            while (t-- > 0) {
                if (isOpen) {
                    ans.push_back('(');
                } else {
                    ans.push_back(')');
                }
            }
        }

        return ans;
    }
};