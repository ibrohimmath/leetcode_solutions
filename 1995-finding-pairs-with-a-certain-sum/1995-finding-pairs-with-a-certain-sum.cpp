#define all(x) (x).begin(), (x).end()
#define each(item, a) for (auto &item : a)

class FindSumPairs {
public:
    vector<int> a, b;
    map<int, int> counter;

    FindSumPairs(vector<int>& nums1, vector<int>& nums2) {
        a.assign(all(nums1));
        b.assign(all(nums2));
        each(item, nums2) {
            counter[item]++;
        }
    }
    
    void decrease(int key) {
        if (--counter[key] == 0) {
            counter.erase(key);
        }
    }

    void increase(int key) {
        counter[key]++;
    }

    void add(int index, int val) {
        decrease(b[index]);
        increase(b[index] += val);
    }
    
    int count(int tot) {
        int count = 0;
        each(item, a) {
            count += counter[tot - item];
        }
        return count;
    }
};

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * FindSumPairs* obj = new FindSumPairs(nums1, nums2);
 * obj->add(index,val);
 * int param_2 = obj->count(tot);
 */