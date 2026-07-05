# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        def rev(head: Optional[ListNode], prev: Optional[ListNode]):
            if not head:
                return prev
            nxt = head.next
            head.next = prev
            prev = head
            return rev(nxt, prev)
        
        return rev(head, None)