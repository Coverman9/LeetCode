/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let res = new ListNode()
    let curr = res
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            res.next = new ListNode(list1.val)
            list1 = list1.next
        }
        else {
            res.next = new ListNode(list2.val)
            list2 = list2.next
        }
        res = res.next
    }
    while(list1) {
        res.next = new ListNode(list1.val)
        list1 = list1.next
        res = res.next
    }
    while(list2) {
        res.next = new ListNode(list2.val)
        list2 = list2.next
        res = res.next
    }

    return curr.next
}