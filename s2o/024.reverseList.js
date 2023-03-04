

/**
 * 
 * 迭代版本
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prev = null
  while(head !== null) {
    const t = head.next
    head.next = prev
    prev = head
    head = t
  }
  return prev
};

/**
 * 递归解法
 */

var reverseList = function(head) {
   if (head === null || head.next === null) {
     return head
   }
   const newHead = reverseList(head.next)
   head.next.next = head
   head.next = null
   return newHead
}
