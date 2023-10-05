/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let list = new ListNode(0)
    let res = list
    let curr = head
    
    while (curr !== null) {
        if (curr.val !== curr.next?.val) {
            res.next = new ListNode(curr.val)
            res = res.next
        } 
        curr = curr.next
    }

    return list.next
};