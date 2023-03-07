const { ListNode, createSingleListFormArray, printSingleList } = require("../common");

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {

  let arr = []
  let cur = head
  while (cur !== null) {
    arr.push(cur.val)
    cur = cur.next
  }
  arr.sort((a, b) => a - b)

  const dummy = new ListNode()
  cur = dummy
  arr.forEach(v => {
    const node = new ListNode(v)
    cur.next = node
    cur = cur.next
  })
  return dummy.next
};


/**
 * 
 * 不用数组，节约内存
 */
const fn = (head) => {

  function mergeSort(head, tail) {
    if (head === null) {
      return head
    }
    if (head.next === tail) {
      head.next = null
      return head
    }

    let fast = slow = head
    while (fast !== tail) {
      fast = fast.next
      slow = slow.next
      if (fast !== tail) {
        fast = fast.next
      }
    }

    const mid = slow
    // 左闭右开
    const list1 = mergeSort(head, mid)
    const list2 = mergeSort(mid, tail)
    return mergeList(list1, list2)
  }

  function mergeList(list1, list2) {
    const dummy = new ListNode()
    let cur = dummy
    let cur1 = list1
    let cur2 = list2
    while (cur1 !== null && cur2 !== null) {
      if (cur1.val < cur2.val) {
        cur.next = cur1
        cur1 = cur1.next
      } else {
        cur.next = cur2
        cur2 = cur2.next
      }
      cur = cur.next
    }
    if (cur1 !== null) {
      cur.next = cur1
    } else if (cur2 !== null) {
      cur.next = cur2
    }

    return dummy.next
  }

  return mergeSort(head, null)
}


const list = fn(createSingleListFormArray([4, 19, 14, 5, -3, 1, 8, 5, 11, 15]))
printSingleList(list)