class FreqStack {
public:
    int pos;
    // freq, pos, val
    set<tuple<int, int, int>> st;
    map<int, vector<int>> memo;

    FreqStack() {
       pos = 0; 
    }
    
    void push(int val) {
        memo[val].push_back(pos);
        st.emplace(-memo[val].size(), -pos, val);
        pos++; 
    }
    
    int pop() {
        auto [_, __, val] = *st.begin();
        memo[val].pop_back();
        st.erase(st.begin());
        if (memo[val].size() == 0) {
            memo.erase(val);
        } else {
            st.emplace(-memo[val].size(), -memo[val].back(), val);
        }
        // pos--;
        return val;
    }
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * FreqStack* obj = new FreqStack();
 * obj->push(val);
 * int param_2 = obj->pop();
 */