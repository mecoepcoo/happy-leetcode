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
  while (i != null && j != null) {
    if (i.val > j.val) {
      p.next = new ListNode(j.val);
      j = j.next;
    } else {
      p.next = new ListNode(i.val);
      i = i.next;
    }
    p = p.next;
  }
  p.next = i == null ? j : i;
  r = l.next;
  return r;
};

    let input1 = new ListNode(1);
    input1.next = new ListNode(2);
    input1.next.next = new ListNode(4);
    let input2 = new ListNode(1);
    input2.next = new ListNode(3);
    input2.next.next = new ListNode(4);
    const result = mergeTwoLists(input1, input2);
    console.log(result);

module.exports = {
  mergeTwoLists: mergeTwoLists,
  ListNode: ListNode,
}