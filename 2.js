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

    let prev = null
    let cur = l1
    while(cur !== null) {
        const t = cur.next
        cur.next = prev
        prev = cur
        cur = t
    }
    let lnew1 = prev

    prev = null
    cur = l2
    while(cur !== null) {
        const t = cur.next
        cur.next = prev
        prev = cur
        cur = t
    }
    let lnew2 = prev


let carry = 1
const head = new ListNode()
cur = head
    while(lnew1 !== null && lnew2 !== null) {
        const result = lnew1.val + lnew2.val + carry
        const node =  new ListNode(result % 10)
        carry = parseInt(result/ 10)
        cur.next = node
        cur = node
        lnew1 = lnew1.next
        lnew2 = lnew2.next
    }

    while(lnew1 !== null) {
        const result = 
    }

    cur = lnew1
    let str = ''
    while(cur !== null) {
        str += cur.val + '->'
        cur = cur.next
    }

    console.log(str)

};