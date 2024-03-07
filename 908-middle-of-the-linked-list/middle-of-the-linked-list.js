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
var middleNode = function(head) {
    let arr = []
    let curr = head
    while (curr !== null) {
        arr.push(curr.val)
        curr = curr.next
    }
    const avg = arr.length % 2 === 0 ? Math.round(arr.length / 2) : Math.floor(arr.length / 2)
    let res = head
    let level = 0
    while (res !== null) {
        if (level === avg) {
            return res
        }
        level++
        res = res.next
    }
};