function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * 合并两个有序链表
 * @param {ListNode} l1 
 * @param {ListNode} l2 
 */
let mergeTwoLists = function (l1, l2) {
  let l = new ListNode(null);
  let p = l;
  let i = l1;
  let j = l2;
  while (!(i == null && j == null)) {
    if (i == null) {
      if (j.val != null) {
        p.next = new ListNode(null);
        p.val = j.val;
      }
      j = j.next;
    } else if (j == null) {
      p.next = new ListNode(null);
      if (j.val != null) {
        p.val = i.val;
      }
      i = i.next;
    } else if (i.val > j.val) {
      p.next = new ListNode(null);
      p.val = j.val;
      j = j.next;
    } else {
      p.next = new ListNode(null);
      p.val = i.val;
      i = i.next;
    }
    p = p.next;
  }
  return l;
};
let input1 = new ListNode(-9);
    input1.next = new ListNode(3);
    let input2 = new ListNode(5);
    input2.next = new ListNode(7);
    const result = mergeTwoLists(input1, input2);
module.exports = {
  mergeTwoLists: mergeTwoLists,
  ListNode: ListNode,
}