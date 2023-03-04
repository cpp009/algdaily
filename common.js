


function ListNode(val, next) {
  this.val = (val === undefined ? null : val)
  this.next = (next === undefined ? null : next)
}


function createSingleListFormArray(arr = []) {
  const head = new ListNode()
  let cur = head

  arr.forEach((v) => {
    const node = new ListNode(v)
    cur.next = node
    cur = node
  })

  return head.next
}


function printSingleList(head) {
  let cur = head
  let arr = []
  while (cur !== null) {
    arr.push(cur.val)
    cur = cur.next
  }
  console.log(arr.join("->"))
}


module.exports = {
  ListNode,
  createSingleListFormArray,
  printSingleList
}

