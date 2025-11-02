/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
    const N: number = 1e5 + 1;
    const exists: boolean[] = Array(N).fill(false);
    for (const item of nums) {
       exists[item] = true; 
    }

    let newHead = null, newCurr = null, curr = head;
    while (curr != null) {
        if (!exists[curr.val]) {
            if (newHead == null) {
                newHead = curr;
                newCurr = curr;
            } else {
                newCurr = newCurr.next = curr;
            }
        }
        curr = curr.next;
    }
    newCurr.next = null;
    return newHead;
};