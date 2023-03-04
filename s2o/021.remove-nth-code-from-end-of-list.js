const { createSingleListFormArray, printSingleList, ListNode } = require("../common");



/**
 * 快慢指针
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const node = new ListNode('xx')
  node.next = head
  let p1 = head
  let p2 = node
  while(p1 !==  null) {
    if (n <= 0) {
      p2 = p2.next
    } else {
      n--
    }
    p1 = p1.next
  }

  p2.next = p2.next.next
  return node.next
};


const i = removeNthFromEnd(createSingleListFormArray([1, 2]), 2)
printSingleList(i)


