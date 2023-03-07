const { createSingleListFormArray, printSingleList, ListNode } = require("../common");



/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    function reverseList(l) {
      let prev = null
      while(l !== null) {
        const t = l.next
        l.next = prev
        prev = l
        l = t
      }

      return prev
    }

    l1 = reverseList(l1)
    l2 = reverseList(l2)

    let carry = 0
    const dummy = new ListNode()
    let cur = dummy
    while(l1 !== null || l2 !== null) {
      const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry
      carry = parseInt(sum / 10)
      const node = new ListNode(sum % 10)
      cur.next = node
      cur = cur.next
      if (l1) {
        l1 = l1.next
      }
      if (l2) {
        l2 = l2.next
      }
    }

    if (carry === 1) {
      const node = new ListNode(1)
      cur.next = node
    }

    return reverseList(dummy.next)
};


const ret = addTwoNumbers(createSingleListFormArray([7, 2, 4, 3]), createSingleListFormArray([5, 6, 4]))
printSingleList(ret)