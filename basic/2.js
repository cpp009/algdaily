/**
 * 
 * 
 * 链表操作，链表开头就是组地位，链表尾是最高位，依次相加就可以
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


var addTwoNumbers = function(l1, l2) {
    const head = new ListNode()
    let cur = head
    let carry = 0
    while(l1 !== null && l2 !== null) {
        const result = l1.val + l2.val + carry
        const node = new ListNode(result % 10)
        carry = parseInt(result / 10)
        cur.next = node
        cur = node
        l1 = l1.next
        l2 = l2.next
    }

    while (l1 !== null) {
        const result = l1.val + carry
        const node = new ListNode(result % 10)
        carry = parseInt(result / 10)
        cur.next = node
        cur = node
        l1 = l1.next
    }

    while (l2 !== null) {
        const result = l2.val + carry
        const node = new ListNode(result % 10)
        carry = parseInt(result / 10)
        cur.next = node
        cur = node
        l2 = l2.next
    }

    if (carry === 1) {
        const node = new ListNode(1)
        cur.next = node
    }

    return head.next
};