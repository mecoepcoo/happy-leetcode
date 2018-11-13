const {mergeTwoLists, ListNode} = require('../../a1-50/a21-merge-two-sorted-lists');
const should = require('should');

describe('合并两个有序链表测试', () => {
  it('输入1->2->4, 1->3->4，应该得到1->1->2->3->4->4', () => {
    let input1 = new ListNode(1);
    input1.next = new ListNode(2);
    input1.next.next = new ListNode(4);
    let input2 = new ListNode(1);
    input2.next = new ListNode(3);
    input2.next.next = new ListNode(4);
    const result = mergeTwoLists(input1, input2);
    let r0 = new ListNode(1);
    r0.next = new ListNode(1);
    r0.next.next = new ListNode(2);
    r0.next.next.next = new ListNode(3);
    r0.next.next.next.next = new ListNode(4);
    r0.next.next.next.next.next = new ListNode(4);

    should(result).be.eql(r0);
  });

  it('输入-9->3, 5->7，应该得到-9->3->5->7', () => {
    let input1 = new ListNode(-9);
    input1.next = new ListNode(3);
    let input2 = new ListNode(5);
    input2.next = new ListNode(7);
    const result = mergeTwoLists(input1, input2);
    let r0 = new ListNode(-9);
    r0.next = new ListNode(3);
    r0.next.next = new ListNode(5);
    r0.next.next.next = new ListNode(7);

    should(result).be.eql(r0);
  });
});
