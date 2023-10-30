/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let curr = head
    let arr = []
    while (curr !== null) {
        arr.push(curr.val)
        curr = curr.next
    }

    let l = 0
    let r = arr.length - 1

    for (let i = 0; i < arr.length; i++) {
        if (arr[l] !== arr[r]) {
            return false
        }
        l++
        r--
    }
    return true
};