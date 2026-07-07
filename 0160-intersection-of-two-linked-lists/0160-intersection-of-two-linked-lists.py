# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        l1, l2 = 0, 0
        currA, currB = headA, headB
        while currA or currB:
            if currA:
                currA = currA.next
                l1 += 1
            if currB:
                currB = currB.next
                l2 += 1

        currA, currB = headA, headB

        while currA and currB:
            if l1 == l2 and currA == currB:
                return currA
            L2, L1 = l2, l1
            if L2 >= L1:
                currB = currB.next
                l2 -= 1
            if L1 >= L2:
                currA = currA.next
                l1 -= 1
