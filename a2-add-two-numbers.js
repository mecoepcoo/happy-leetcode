/**
 * 两数相加
 * 给定两个非空链表来表示两个非负整数。位数按照逆序方式存储，它们的每个节点只存储单个数字。将两数相加返回一个新的链表。
 * 你可以假设除了数字 0 之外，这两个数字都不会以零开头。
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 */

let ListNode = function(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function(l1, l2) {
  let v1 = 0;
  let v2 = 0;
  let carry = 0;
  let result = null;
  let cur = null;

  function carryPlus(sum) {
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }
    return sum;
  }

  if (l1 || l2) {
    v1 = l1 ? l1.val : 0;
    v2 = l2 ? l2.val : 0;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    cur = new ListNode(carryPlus(v1 + v2));
    result = cur;
    while (l1 || l2) {
      v1 = l1 ? l1.val : 0;
      v2 = l2 ? l2.val : 0;
      l1 = l1 ? l1.next : null;
      l2 = l2 ? l2.next : null;
      cur.next = new ListNode(carryPlus(v1 + v2 + carry));
      cur = cur.next;
    }
    if (carry != 0) {
      cur.next = new ListNode(carryPlus(carry));
    }
  }
  return result;
};

module.exports = {
  addTwoNumbers: addTwoNumbers,
  ListNode: ListNode,
}
// exports.addTwoNumbers = addTwoNumbers;