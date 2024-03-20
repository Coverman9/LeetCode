/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let prev = new ListNode(0, list1)
    let cur = list1

    let counter = 1

    while (counter <= a) {
        cur = cur.next;
        prev = prev.next;
        counter++
    }

    const prevA = prev;

    while (counter <= b) {
        cur = cur.next;
        counter++
    }


    prevA.next = list2;
    let nextB = cur.next;

    cur = list2
    while (cur.next !== null) {
        cur = cur.next;
    }

    cur.next = nextB

    return list1
};