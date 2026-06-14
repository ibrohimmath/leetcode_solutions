/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    int pairSum(ListNode* head) {
        ListNode *slow = head, *fast = head;

        int len = 0;
        while (fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
            ++len;
        }

        ListNode *rev = nullptr;
        while (slow) {
            ListNode *revPrev = rev;
            ListNode *nxt = slow->next;
            rev = slow;
            rev->next = revPrev;
            slow = nxt;
        }

        slow = head;
        int mx = 0;
        while (rev) {
            mx = max(mx, rev->val + slow->val);
            rev = rev->next;
            slow = slow->next;
            
        }

        return mx;
    }
};